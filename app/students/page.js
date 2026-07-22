'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function StudentsPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        username: email,
        password,
        redirect: false
      })

      if (result?.error) {
        setError('Invalid username or password')
        setLoading(false)
      } else {
        router.push('/portal/student/dashboard')
        router.refresh()
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

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
    { src: '/images/icons/personal-development.png', top: '88%', left: '10%', size: 190, opacity: 0.13 },
    { src: '/images/icons/maths.png', top: '12%', left: '25%', size: 180, opacity: 0.14 },
    { src: '/images/icons/eng.png', top: '25%', right: '25%', size: 184, opacity: 0.12 },
    { src: '/images/icons/chemistry.png', top: '38%', left: '20%', size: 176, opacity: 0.15 },
    { src: '/images/icons/physics.png', top: '50%', right: '22%', size: 188, opacity: 0.13 },
    { src: '/images/icons/geography.png', top: '62%', left: '22%', size: 192, opacity: 0.14 },
    { src: '/images/icons/history.png', top: '75%', right: '20%', size: 180, opacity: 0.12 },
    { src: '/images/icons/languages.png', top: '85%', left: '18%', size: 184, opacity: 0.15 },
    { src: '/images/icons/arts.png', top: '3%', left: '40%', size: 200, opacity: 0.13 },
    { src: '/images/icons/music.png', top: '18%', left: '38%', size: 208, opacity: 0.14 },
    { src: '/images/icons/drama.png', top: '35%', right: '35%', size: 196, opacity: 0.12 },
    { src: '/images/icons/computing.png', top: '48%', left: '35%', size: 204, opacity: 0.15 },
    { src: '/images/icons/healthy.png', top: '60%', right: '38%', size: 192, opacity: 0.13 },
    { src: '/images/icons/religious.png', top: '72%', left: '32%', size: 200, opacity: 0.14 },
    { src: '/images/icons/teach.png', top: '82%', right: '32%', size: 188, opacity: 0.12 },
    { src: '/images/icons/personal-development.png', top: '92%', left: '28%', size: 196, opacity: 0.15 },
    { src: '/images/icons/maths.png', top: '10%', right: '40%', size: 184, opacity: 0.13 },
    { src: '/images/icons/eng.png', top: '22%', left: '45%', size: 192, opacity: 0.14 },
    { src: '/images/icons/chemistry.png', top: '36%', right: '45%', size: 200, opacity: 0.12 },
    { src: '/images/icons/physics.png', top: '48%', left: '42%', size: 208, opacity: 0.15 },
    { src: '/images/icons/geography.png', top: '58%', right: '42%', size: 196, opacity: 0.13 },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-sky-50">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <Header />
      </div>

      {/* Main Content - Flex container with explicit vertical padding */}
      <main className="flex-1 flex flex-col justify-center items-center relative overflow-hidden px-4 py-16 md:py-24">
        {/* Background Icons */}
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

        {/* Form Container - my-auto dynamically spaces from header and footer */}
        <div className="relative z-10 text-center max-w-md w-full my-auto">
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div className="space-y-6">
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
          
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-8">
                Welcome to the Student Portal
              </h2>

              <div>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter admission number (e.g. WIN2013001) or email"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-sky-500 border-gray-300 rounded focus:ring-sky-500" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sky-500 hover:text-sky-600 transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 disabled:bg-gray-400 transition-colors"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <div className="text-center text-xs text-gray-500">
                <a href="https://dsnouse.co.uk" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 transition-colors">
                  Powered by DSNOUSE
                </a>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      {/* Footer component pushed downwards */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  )
}
