import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

async function getTeacherAssignments(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        teacher: true
      }
    })

    if (!user?.teacher) return []

    const assignments = await prisma.assignment.findMany({
      where: {
        teacherId: user.teacher.id
      },
      include: {
        class: true,
        subject: true,
        term: {
          where: { isActive: true }
        }
      },
      orderBy: {
        term: {
          sessionName: 'desc'
        }
      }
    })

    return assignments
  } catch (error) {
    console.error('Error fetching teacher assignments:', error)
    return []
  }
}

export default async function TeacherDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/portal/signin')
  }

  if (session.user.role !== 'teacher') {
    redirect('/')
  }

  const assignments = await getTeacherAssignments(session.user.id)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Teacher Dashboard</h1>
          <p className="text-xl text-blue-100">Welcome, {session.user.name}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Teaching Assignments</h2>
          {assignments.length > 0 ? (
            <div className="space-y-6">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {assignment.class.name}
                      </h3>
                      <p className="text-gray-600">
                        {assignment.role === 'class_teacher' ? 'Class Teacher' : 'Subject Teacher'}
                      </p>
                      {assignment.subject && (
                        <p className="text-blue-600 font-medium mt-2">
                          {assignment.subject.name}
                        </p>
                      )}
                      <p className="text-gray-500 text-sm mt-1">
                        {assignment.term.sessionName}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {assignment.term.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No assignments found</p>
          )}
        </div>
      </div>
    </div>
  )
}