import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Header from '@/components/Header' // Standard root alias prefix used to prevent directory nesting bugs
import Footer from '@/components/Footer' 
import Image from 'next/image'
import SignInForm from './SignInForm'

export const dynamic = 'force-dynamic'

export default async function SignInPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    if (session.user?.role === 'teacher') {
      redirect('/portal/teacher/dashboard')
    }
    if (session.user?.role === 'student') {
      redirect('/portal/student/dashboard')
    }
    redirect('/')
  }

  // Replicating the background decoration array from your student layout reference
  const backgroundIcons = [
    { src: '/images/icons/maths.png', top: '5%', left: '3%', size: 200, opacity: 0.12 },
    { src: '/images/icons/eng.png', top: '8%', right: '5%', size: 190, opacity: 0.15 },
    { src: '/images/icons/chemistry.png', top: '15%', left: '8%', size: 220, opacity: 0.13 },
    { src: '/images/icons/physics.png', top: '20%', right: '8%', size: 210, opacity: 0.14 },
    { src: '/images/icons/geography.png', top: '28%', left: '2%', size: 196, opacity: 0.12 },
    { src: '/images/icons/history.png', top: '32%', right: '12%', size: 204, opacity: 0.15 },
    { src: '/images/icons/languages.png', top: '40%', left: '12%', size: 216, opacity: 0.13 },
    { src: '/images/icons/arts.png', top: '45%', right: '3%', size: 192, opacity: 0.14 },
    { src: '/images/icons/music.png', top: '52%', left: '5%', size: 208, opacity: 0.12 },
    { src: '/images/icons/drama.png', top: '58%', right: '10%', size: 200, opacity: 0.15 },
    { src: '/images/icons/computing.png', top: '65%', left: '15%', size: 212, opacity: 0.13 },
    { src: '/images/icons/healthy.png', top: '70%', right: '5%', size: 196, opacity: 0.14 },
    { src: '/images/icons/religious.png', top: '78%', left: '3%', size: 204, opacity: 0.12 },
    { src: '/images/icons/teach.png', top: '82%', right: '15%', size: 216, opacity: 0.15 },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <Header />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center relative overflow-hidden px-4 py-16 md:py-24">
        {/* Render Background Icons */}
        {backgroundIcons.map((icon, index) => (
          <div
            key={index}
            className="absolute pointer-events-none"
            style={{
              top: icon.top,
              left: icon.left,
              right: icon.right,
              opacity: icon.opacity,
            }}
          >
            <Image
              src={icon.src}
              alt=""
              width={icon.size}
              height={icon.size}
              className="w-auto h-auto"
              style={{ maxWidth: `${icon.size}px`, maxHeight: `${icon.size}px` }}
            />
          </div>
        ))}

        {/* Form Card Layout wrapper matches reference */}
        <div className="relative z-10 text-center max-w-md w-full my-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            
            {/* Header Image Logo Container */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Winsford Schools Logo"
                width={200}
                height={80}
                className="h-24 w-auto"
                priority
              />
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Portal Sign In</h1>
              <p className="text-gray-600">Sign in to access your portal</p>
            </div>

            {/* Embedded Form Handler Child */}
            <SignInForm />
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  )
}