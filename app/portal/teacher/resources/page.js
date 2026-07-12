import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Teacher Resources</h1>
          <p className="text-xl text-blue-100">Access teaching materials and resources</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Resources</h2>
          <p className="text-gray-600">Resources will be added here soon.</p>
        </div>
      </div>
    </div>
  )
}