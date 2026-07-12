import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'

export const revalidate = 3600

async function getTeacher(teacherId) {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: { id: teacherId },
      include: {
        assignments: {
          include: {
            class: true,
            subject: true,
            term: {
              where: { isActive: true }
            }
          },
          orderBy: {
            class: {
              name: 'asc'
            }
          }
        }
      }
    })

    return teacher
  } catch (error) {
    console.error('Error fetching teacher:', error)
    return null
  }
}

export default async function TeacherPage({ params }) {
  const teacher = await getTeacher(params.teacherId)

  if (!teacher) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex-shrink-0">
              {teacher.photoUrl ? (
                <img
                  src={teacher.photoUrl}
                  alt={`${teacher.title} ${teacher.lastName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {teacher.title} {teacher.lastName.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {teacher.title} {teacher.lastName}
              </h1>
              <p className="text-xl text-blue-100">
                {teacher.employmentType === 'class_teacher' ? 'Class Teacher' : 'Subject Teacher'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {teacher.bio && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Biography</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{teacher.bio}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Teaching Assignments</h2>
          {teacher.assignments.length > 0 ? (
            <div className="space-y-4">
              {teacher.assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded"
                >
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
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No current assignments</p>
          )}
        </div>
      </div>
    </div>
  )
}