import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import DashboardLayout from '@/components/DashboardLayout'

export const dynamic = 'force-dynamic'

export default async function TeacherResourcesPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/portal/signin')
  }

  if (session.user.role !== 'teacher') {
    redirect('/')
  }

  return (
    <DashboardLayout role="teacher" userName={session.user.name}>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins mb-1">
          Teacher Resources
        </h1>
        <p className="text-gray-500">Access teaching materials and resources</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-lg font-semibold text-gray-900 font-poppins mb-4">Available Resources</h2>
        <p className="text-gray-600">Resources will be added here soon.</p>
      </div>
    </DashboardLayout>
  )
}
