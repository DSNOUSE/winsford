import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function getStudentData(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        student: {
          include: {
            class: true,
            parent: true
          }
        }
      }
    })

    if (!user?.student) return null

    // Get class teachers and subject teachers for this class
    const classAssignments = await prisma.assignment.findMany({
      where: {
        classId: user.student.classId,
        term: {
          isActive: true
        }
      },
      include: {
        teacher: true,
        subject: true
      },
      orderBy: [
        {
          role: 'asc'
        },
        {
          subject: {
            name: 'asc'
          }
        }
      ]
    })

    return {
      student: user.student,
      assignments: classAssignments
    }
  } catch (error) {
    console.error('Error fetching student data:', error)
    return null
  }
}

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/portal/signin')
  }

  if (session.user.role !== 'student') {
    redirect('/')
  }

  const data = await getStudentData(session.user.id)

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-500 text-center">No student profile found. Please contact administration.</p>
          </div>
        </div>
      </div>
    )
  }

  const { student, assignments } = data
  const classTeachers = assignments.filter(a => a.role === 'class_teacher')
  const subjectTeachers = assignments.filter(a => a.role === 'subject_teacher')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-xl text-blue-100">Welcome, {student.firstName}</p>
          {student.class && (
            <p className="text-blue-100 mt-2">Class: {student.class.name}</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Class Teachers Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Class Teachers</h2>
            {classTeachers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classTeachers.map((assignment) => (
                  <Link
                    key={assignment.id}
                    href={`/staff/${assignment.teacher.id}`}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        {assignment.teacher.photoUrl ? (
                          <img
                            src={assignment.teacher.photoUrl}
                            alt={`${assignment.teacher.title} ${assignment.teacher.lastName}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              {assignment.teacher.title} {assignment.teacher.lastName.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {assignment.teacher.title} {assignment.teacher.lastName}
                        </h3>
                        <p className="text-sm text-blue-600">Class Teacher</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No class teacher assigned</p>
            )}
          </div>
        </div>

        {/* Subject Teachers Section */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subject Teachers</h2>
            {subjectTeachers.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Teacher
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {subjectTeachers.map((assignment) => (
                      <tr key={assignment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {assignment.subject?.name || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            href={`/staff/${assignment.teacher.id}`}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {assignment.teacher.title} {assignment.teacher.lastName}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No subject teachers assigned</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}