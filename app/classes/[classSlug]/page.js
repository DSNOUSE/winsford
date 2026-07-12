import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 3600

async function getClassBySlug(classSlug) {
  try {
    // Decode the slug and find matching class
    const className = classSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    const classData = await prisma.class.findFirst({
      where: {
        name: {
          equals: className,
          mode: 'insensitive'
        }
      },
      include: {
        assignments: {
          where: {
            term: {
              isActive: true
            }
          },
          include: {
            teacher: {
              include: {
                assignments: {
                  where: {
                    classId: undefined // circular reference
                  }
                }
              }
            },
            subject: true,
            term: true
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
        }
      }
    })

    return classData
  } catch (error) {
    console.error('Error fetching class:', error)
    return null
  }
}

export default async function ClassPage({ params }) {
  const classData = await getClassBySlug(params.classSlug)

  if (!classData) {
    notFound()
  }

  const classTeachers = classData.assignments.filter(a => a.role === 'class_teacher')
  const subjectTeachers = classData.assignments.filter(a => a.role === 'subject_teacher')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{classData.name}</h1>
          <p className="text-xl text-blue-100 capitalize">{classData.level} Level</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Class Teachers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Class Teachers</h2>
          {classTeachers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classTeachers.map((assignment) => (
                <Link
                  key={assignment.id}
                  href={`/staff/${assignment.teacher.id}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      {assignment.teacher.photoUrl ? (
                        <img
                          src={assignment.teacher.photoUrl}
                          alt={`${assignment.teacher.title} ${assignment.teacher.lastName}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-white text-xl font-bold">
                            {assignment.teacher.title} {assignment.teacher.lastName.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {assignment.teacher.title} {assignment.teacher.lastName}
                      </h3>
                      <p className="text-blue-600 font-medium">Class Teacher</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No class teacher assigned for this term</p>
          )}
        </div>

        {/* Subject Teachers Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Subject Teachers</h2>
          {subjectTeachers.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Teacher
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subjectTeachers.map((assignment) => (
                      <tr key={assignment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">
                            {assignment.subject?.name || 'N/A'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            href={`/staff/${assignment.teacher.id}`}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {assignment.teacher.title} {assignment.teacher.lastName}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No subject teachers assigned for this term</p>
          )}
        </div>
      </div>
    </div>
  )
}