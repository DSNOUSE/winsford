'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

const studentLinks = [
  { href: '/portal/student/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/portal/student/subjects', label: 'My Subjects', icon: 'subjects' },
  { href: '/portal/student/timetable', label: 'Timetable', icon: 'timetable' },
  { href: '/portal/student/profile', label: 'Profile', icon: 'profile' },
]

const teacherLinks = [
  { href: '/portal/teacher/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/portal/admin/assignments', label: 'Assignments', icon: 'assignments' },
  { href: '/portal/teacher/resources', label: 'Resources', icon: 'resources' },
  { href: '/portal/teacher/profile', label: 'Profile', icon: 'profile' },
]

const iconPaths = {
  dashboard: (
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  ),
  subjects: (
    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
  ),
  timetable: (
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
  ),
  profile: (
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  ),
  assignments: (
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  ),
  resources: (
    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
  ),
  logout: (
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
  ),
}

export default function DashboardSidebar({ role, userName, isOpen, onClose }) {
  const pathname = usePathname()
  const links = role === 'teacher' ? teacherLinks : studentLinks

  const handleSignOut = () => {
    const callbackUrl =
      role === 'student' ? '/students' : role === 'teacher' ? '/teachers-portal' : '/portal/signin'
    signOut({ callbackUrl })
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Winsford Schools"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <p className="font-poppins font-semibold text-sm text-gray-900 leading-tight">Winsford</p>
                <p className="text-xs text-gray-500">Schools Portal</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-blue/10 text-sky-blue'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <svg
                    className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-sky-blue' : 'text-gray-400'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {iconPaths[link.icon]}
                  </svg>
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* User info + Sign out */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sky-blue text-sm font-semibold">
                  {userName?.charAt(0)?.toUpperCase() || '?'}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
                <p className="text-xs text-gray-500 capitalize">{role}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <svg className="w-5 h-5 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                {iconPaths.logout}
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
