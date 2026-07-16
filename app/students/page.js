'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function StudentsPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password })
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

      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden px-4 py-8">
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

        {/* Centered Content */}
        <div className="relative z-10 text-center max-w-md w-full">
          {/* Logo */}
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

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Winsford Student Portal
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent outline-none transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-sky-blue border-gray-300 rounded focus:ring-sky-blue" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sky-blue hover:text-sky-blue/80 transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-sky-blue/90 transition-colors duration-200"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="/student-information" className="text-sky-blue hover:text-sky-blue/80 font-medium transition-colors">
              Register here
            </a>
          </p>
        </div>
      </main>

      {/* Fixed Footer */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  )
}
