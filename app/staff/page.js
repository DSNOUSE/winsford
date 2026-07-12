import prisma from '@/lib/prisma'

export const revalidate = 3600

async function getTeachers() {
  try {
    const teachers = await prisma.teacher.findMany({
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
      },
      orderBy: {
        lastName: 'asc'
      }
    })

    return teachers
  } catch (error) {
    console.error('Error fetching teachers:', error)
    return []
  }
}

export default async function StaffPage() {
  const teachers = await getTeachers()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Staff</h1>
          <p className="text-xl text-blue-100">
            Meet our dedicated team of educators committed to excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                {teacher.photoUrl ? (
                  <img
                    src={teacher.photoUrl}
                    alt={`${teacher.title} ${teacher.lastName}`}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {teacher.title} {teacher.lastName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {teacher.title} {teacher.lastName}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {teacher.employmentType === 'class_teacher' ? 'Class Teacher' : 'Subject Teacher'}
                </p>
                {teacher.bio && (
                  <p className="text-gray-600 mb-4 line-clamp-3">{teacher.bio}</p>
                )}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Current Assignments:</h4>
                  <div className="space-y-2">
                    {teacher.assignments.length > 0 ? (
                      teacher.assignments.map((assignment) => (
                        <div key={assignment.id} className="text-sm">
                          <span className="font-medium text-gray-700">
                            {assignment.class.name}
                          </span>
                          {assignment.subject && (
                            <span className="text-gray-500"> - {assignment.subject.name}</span>
                          )}
                          <span className="text-gray-400 block text-xs">
                            {assignment.term.sessionName}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No current assignments</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}