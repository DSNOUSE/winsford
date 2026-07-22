'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import DashboardSidebar from './DashboardSidebar'

export default function DashboardLayout({ children, role, userName }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSignOut = () => {
    const callbackUrl =
      role === 'student' ? '/students' : role === 'teacher' ? '/teachers-portal' : '/portal/signin'
    signOut({ callbackUrl })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar
        role={role}
        userName={userName}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content area */}
      <div className="lg:ml-64">
        {/* Top bar (mobile) */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
            <span className="text-sm font-medium text-gray-700 truncate">{userName}</span>
            <button
              onClick={handleSignOut}
              className="p-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600"
              aria-label="Sign out"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
