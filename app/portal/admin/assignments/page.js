import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { getFormData, createAssignment, deleteAssignment, copyFromLastTerm } from './actions'

export const dynamic = 'force-dynamic'

export default async function AdminAssignmentsPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    redirect('/')
  }

  const { teachers, classes, subjects, terms } = await getFormData()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Assignment Management</h1>
          <p className="text-xl text-blue-100">Manage teacher assignments by term</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Copy from Last Term */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <form action={copyFromLastTerm} className="flex gap-4">
            <select
              name="sourceTermId"
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select source term...</option>
              {terms.map((term) => (
                <option key={term.id} value={term.id}>
                  {term.sessionName}
                </option>
              ))}
            </select>
            <select
              name="targetTermId"
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select target term...</option>
              {terms.map((term) => (
                <option key={term.id} value={term.id}>
                  {term.sessionName}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Copy Assignments
            </button>
          </form>
        </div>

        {/* Create New Assignment */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Create New Assignment</h2>
          <form action={createAssignment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teacher
                </label>
                <select
                  name="teacherId"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select teacher...</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.title} {teacher.lastName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class
                </label>
                <select
                  name="classId"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select class...</option>
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name} ({cls.level})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject (optional - leave blank for class teacher covering all subjects)
                </label>
                <select
                  name="subjectId"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">None (Class Teacher)</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Term
                </label>
                <select
                  name="termId"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select term...</option>
                  {terms.map((term) => (
                    <option key={term.id} value={term.id}>
                      {term.sessionName} {term.isActive ? '(Active)' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  name="role"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select role...</option>
                  <option value="class_teacher">Class Teacher</option>
                  <option value="subject_teacher">Subject Teacher</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Assignment
            </button>
          </form>
        </div>

        {/* Current Assignments */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Assignments</h2>
          <AssignmentsList />
        </div>
      </div>
    </div>
  )
}

async function AssignmentsList() {
  const assignments = await prisma.assignment.findMany({
    include: {
      teacher: {
        include: {
          user: true
        }
      },
      class: true,
      subject: true,
      term: true
    },
    orderBy: [
      { term: { sessionName: 'desc' } },
      { class: { name: 'asc' } },
      { role: 'asc' }
    ]
  })

  if (assignments.length === 0) {
    return <p className="text-gray-500 text-center py-8">No assignments found</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Term
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Class
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Teacher
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {assignments.map((assignment) => (
            <tr key={assignment.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {assignment.term.sessionName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {assignment.class.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {assignment.teacher.title} {assignment.teacher.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {assignment.subject?.name || '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  assignment.role === 'class_teacher'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {assignment.role === 'class_teacher' ? 'Class Teacher' : 'Subject Teacher'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <form action={deleteAssignment.bind(null, assignment.id)}>
                  <button
                    type="submit"
                    className="text-red-600 hover:text-red-800 font-medium"
                    onClick={(e) => {
                      if (!confirm('Are you sure you want to delete this assignment?')) {
                        e.preventDefault()
                      }
                    }}
                  >
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}