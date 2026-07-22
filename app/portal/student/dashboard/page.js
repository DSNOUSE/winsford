import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import DashboardLayout from '@/components/DashboardLayout'

const subjectIconMap = {
  'Mathematics': '/images/icons/maths.png',
  'English': '/images/icons/eng.png',
  'Science': '/images/icons/chemistry.png',
  'Chemistry': '/images/icons/chemistry.png',
  'Physics': '/images/icons/physics.png',
  'Biology': '/images/icons/healthy.png',
  'Computer Science': '/images/icons/computing.png',
  'Computing': '/images/icons/computing.png',
  'History': '/images/icons/history.png',
  'Geography': '/images/icons/geography.png',
  'Social Studies': '/images/icons/geography.png',
  'Religious Studies': '/images/icons/religious.png',
  'Religious Education': '/images/icons/religious.png',
  'Art': '/images/icons/arts.png',
  'Fine Art': '/images/icons/arts.png',
  'Music': '/images/icons/music.png',
  'Drama': '/images/icons/theater.png',
  'Theatre': '/images/icons/theater.png',
  'Languages': '/images/icons/languages.png',
  'French': '/images/icons/languages.png',
  'Spanish': '/images/icons/languages.png',
  'PE': '/images/icons/healthy.png',
  'Physical Education': '/images/icons/healthy.png',
  'PE & Sport': '/images/icons/healthy.png',
  'Personal Development': '/images/icons/personal-development.png',
  'Design & Technology': '/images/icons/worker.png',
  'Design Technology': '/images/icons/worker.png',
  'Agricultural Science': '/images/icons/training.png',
}

function getSubjectIcon(subjectName) {
  if (!subjectName) return '/images/icons/teach.png'
  const icon = subjectIconMap[subjectName]
  if (icon) return icon
  const key = Object.keys(subjectIconMap).find(k =>
    subjectName.toLowerCase().includes(k.toLowerCase()) ||
    k.toLowerCase().includes(subjectName.toLowerCase())
  )
  return key ? subjectIconMap[key] : '/images/icons/teach.png'
}

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

    let classAssignments = []
    if (user.student.classId) {
      classAssignments = await prisma.assignment.findMany({
        where: {
          classId: user.student.classId,
          term: { isActive: true }
        },
        include: {
          teacher: true,
          subject: true,
          term: true
        },
        orderBy: [
          { role: 'asc' },
          { subject: { name: 'asc' } }
        ]
      })
    }

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
      <DashboardLayout role="student" userName={session.user.name}>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <p className="text-gray-500 text-center">No student profile found. Please contact administration.</p>
        </div>
      </DashboardLayout>
    )
  }

  const { student, assignments } = data
  const classTeachers = assignments.filter(a => a.role === 'class_teacher')
  const subjectTeachers = assignments.filter(a => a.role === 'subject_teacher')
  const activeTerm = assignments[0]?.term?.sessionName || 'N/A'

  return (
    <DashboardLayout role="student" userName={session.user.name}>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-sky-blue to-blue-600 rounded-xl p-6 md:p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold font-poppins mb-1">
              Hello, {student.firstName}!
            </h1>
            <p className="text-blue-100 text-sm md:text-base">
              Welcome back to your student portal
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            {student.class && (
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                {student.class.name}
              </span>
            )}
            {student.admissionNumber && (
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                {student.admissionNumber}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">{subjectTeachers.length}</p>
          <p className="text-xs text-gray-500 mt-1">Subjects</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 truncate">
            {classTeachers[0]?.teacher ? `${classTeachers[0].teacher.title} ${classTeachers[0].teacher.lastName}` : 'N/A'}
          </p>
          <p className="text-xs text-gray-500 mt-1">Class Teacher</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 truncate">{activeTerm}</p>
          <p className="text-xs text-gray-500 mt-1">Current Term</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">95%</p>
          <p className="text-xs text-gray-500 mt-1">Attendance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subjects Grid - takes 2 cols */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4">My Subjects</h2>
            {subjectTeachers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjectTeachers.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:border-sky-blue/30 hover:bg-sky-blue/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={getSubjectIcon(assignment.subject?.name)}
                        alt={assignment.subject?.name || 'Subject'}
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm">
                        {assignment.subject?.name || 'N/A'}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {assignment.teacher.title} {assignment.teacher.lastName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm py-8 text-center">No subjects assigned yet</p>
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Class Teacher Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4">Class Teacher</h2>
            {classTeachers.length > 0 ? (
              <div className="space-y-4">
                {classTeachers.map((assignment) => (
                  <Link
                    key={assignment.id}
                    href={`/staff/${assignment.teacher.id}`}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      {assignment.teacher.photoUrl ? (
                        <img
                          src={assignment.teacher.photoUrl}
                          alt={`${assignment.teacher.title} ${assignment.teacher.lastName}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-sky-blue to-blue-600 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">
                            {assignment.teacher.lastName?.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {assignment.teacher.title} {assignment.teacher.firstName} {assignment.teacher.lastName}
                      </p>
                      <p className="text-xs text-sky-blue">Class Teacher</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm text-center py-4">Not assigned</p>
            )}
          </div>

          {/* Timetable Placeholder */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4">Timetable</h2>
            <div className="text-center py-6">
              <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
              <p className="text-gray-400 text-sm">Coming soon</p>
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