import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import SignInForm from './SignInForm'

export const dynamic = 'force-dynamic'

export default async function SignInPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Portal Sign In</h1>
            <p className="text-gray-600">Sign in to access your portal</p>
          </div>

          <SignInForm />
        </div>
      </div>
    </div>
  )
}