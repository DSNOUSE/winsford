'use server'

import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function createAssignment(data) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    throw new Error('Unauthorized')
  }

  try {
    await prisma.assignment.create({
      data: {
        teacherId: data.teacherId,
        classId: data.classId,
        subjectId: data.subjectId || null,
        termId: data.termId,
        role: data.role
      }
    })

    revalidatePath('/staff')
    revalidatePath(`/classes/${data.classSlug}`)
  } catch (error) {
    console.error('Error creating assignment:', error)
    throw new Error('Failed to create assignment')
  }
}

export async function deleteAssignment(assignmentId) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    throw new Error('Unauthorized')
  }

  try {
    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId },
      select: { classId: true }
    })

    await prisma.assignment.delete({
      where: { id: assignmentId }
    })

    if (assignment) {
      revalidatePath('/staff')
      revalidatePath(`/classes/${assignment.classId}`)
    }
  } catch (error) {
    console.error('Error deleting assignment:', error)
    throw new Error('Failed to delete assignment')
  }
}

export async function getFormData() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    redirect('/')
  }

  try {
    const [teachers, classes, subjects, terms] = await Promise.all([
      prisma.teacher.findMany({
        orderBy: { lastName: 'asc' }
      }),
      prisma.class.findMany({
        orderBy: { name: 'asc' }
      }),
      prisma.subject.findMany({
        orderBy: { name: 'asc' }
      }),
      prisma.term.findMany({
        orderBy: { sessionName: 'desc' }
      })
    ])

    return { teachers, classes, subjects, terms }
  } catch (error) {
    console.error('Error fetching form data:', error)
    return { teachers: [], classes: [], subjects: [], terms: [] }
  }
}

export async function copyFromLastTerm(sourceTermId, targetTermId) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    throw new Error('Unauthorized')
  }

  try {
    // Get all assignments from source term
    const sourceAssignments = await prisma.assignment.findMany({
      where: { termId: sourceTermId },
      include: {
        class: true
      }
    })

    // Create assignments in target term
    for (const assignment of sourceAssignments) {
      const classSlug = assignment.class.name.toLowerCase().replace(/\s+/g, '-')
      
      await prisma.assignment.create({
        data: {
          teacherId: assignment.teacherId,
          classId: assignment.classId,
          subjectId: assignment.subjectId,
          termId: targetTermId,
          role: assignment.role
        }
      })

      revalidatePath(`/classes/${classSlug}`)
    }

    revalidatePath('/staff')
  } catch (error) {
    console.error('Error copying assignments:', error)
    throw new Error('Failed to copy assignments from last term')
  }
}