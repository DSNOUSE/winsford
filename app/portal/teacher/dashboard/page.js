import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import DashboardLayout from '@/components/DashboardLayout'

export const dynamic = 'force-dynamic'

async function getTeacherData(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        teacher: true
      }
    })

    if (!user?.teacher) return null

    const assignments = await prisma.assignment.findMany({
      where: {
        teacherId: user.teacher.id,
        term: { isActive: true }
      },
      include: {
        class: true,
        subject: true,
        term: true
      },
      orderBy: {
        class: { name: 'asc' }
      }
    })

    return {
      teacher: user.teacher,
      assignments
    }
  } catch (error) {
    console.error('Error fetching teacher data:', error)
    return null
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

  const data = await getTeacherData(session.user.id)

  if (!data) {
    return (
      <DashboardLayout role="teacher" userName={session.user.name}>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <p className="text-gray-500 text-center">No teacher profile found. Please contact administration.</p>
        </div>
      </DashboardLayout>
    )
  }

  const { teacher, assignments } = data
  const classTeacherAssignments = assignments.filter(a => a.role === 'class_teacher')
  const subjectAssignments = assignments.filter(a => a.role === 'subject_teacher')
  const uniqueClasses = [...new Set(assignments.map(a => a.class.name))]
  const uniqueSubjects = [...new Set(subjectAssignments.map(a => a.subject?.name).filter(Boolean))]
  const activeTerm = assignments[0]?.term?.sessionName || 'N/A'

  return (
    <DashboardLayout role="teacher" userName={session.user.name}>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sky-blue to-blue-600 rounded-xl p-6 md:p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-poppins mb-1">
              Hello, {teacher.title} {teacher.lastName}!
            </h1>
            <p className="text-blue-100 text-sm md:text-base">
              Welcome back to your teacher portal
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              {activeTerm}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{uniqueClasses.length}</p>
          <p className="text-xs text-gray-500 mt-1">Classes</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{uniqueSubjects.length}</p>
          <p className="text-xs text-gray-500 mt-1">Subjects</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{assignments.length}</p>
          <p className="text-xs text-gray-500 mt-1">Assignments</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 truncate">{activeTerm}</p>
          <p className="text-xs text-gray-500 mt-1">Current Term</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Assignments - takes 2 cols */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4">Teaching Assignments</h2>
            {assignments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="p-4 rounded-lg border border-gray-100 hover:border-sky-blue/30 hover:bg-sky-blue/5 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{assignment.class.name}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        assignment.role === 'class_teacher'
                          ? 'bg-sky-blue/10 text-sky-blue'
                          : 'bg-green-50 text-green-700'
                      }`}>
                        {assignment.role === 'class_teacher' ? 'Class Teacher' : 'Subject'}
                      </span>
                    </div>
                    {assignment.subject && (
                      <p className="text-sm text-gray-600">{assignment.subject.name}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">{assignment.term.sessionName}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm py-8 text-center">No assignments found for the active term</p>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4">Quick Links</h2>
            <div className="space-y-3">
              <Link
                href="/portal/teacher/resources"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-sky-blue/30 hover:bg-sky-blue/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Resources</p>
                  <p className="text-xs text-gray-500">Teaching materials</p>
                </div>
              </Link>
              <Link
                href="/portal/admin/assignments"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-sky-blue/30 hover:bg-sky-blue/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Manage Assignments</p>
                  <p className="text-xs text-gray-500">Class & subject assignments</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Announcements Placeholder */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4">Announcements</h2>
            <div className="text-center py-6">
              <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              <p className="text-gray-400 text-sm">No announcements yet</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}