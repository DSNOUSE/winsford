'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from './icons'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      setMenuVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleClose = () => {
    setMenuVisible(false)
    setTimeout(() => setMobileMenuOpen(false), 400)
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: [
        { name: 'Welcome from Director', href: '/about#welcome' },
        { name: 'Our History', href: '/about#history' },
        { name: 'Vision & Mission', href: '/about#vision' },
        { name: 'Leadership Team', href: '/about#team' },
      ]
    },
    { 
      name: 'Academics', 
      href: '/academics',
      dropdown: [
        { name: 'Curriculum Overview', href: '/academics#curriculum' },
        { name: 'Basic Education', href: '/academics#basic' },
        { name: 'Senior Secondary', href: '/academics#senior' },
        { name: 'Examination Prep', href: '/academics#exams' },
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      dropdown: [
        { name: 'Why Choose Winsford', href: '/admissions#why' },
        { name: 'Admission Process', href: '/admissions#process' },
        { name: 'Fees & Payments', href: '/admissions#fees' },
        { name: 'Scholarships', href: '/admissions#scholarships' },
      ]
    },
    {
      name: 'School Life',
      href: '/school-life',
      dropdown: [
        { name: 'Management', href: '/management' },
        { name: 'Staff', href: '/staff' },
        { name: 'Students', href: '/students' },
        { name: "Teacher's Portal", href: '/teachers-portal' },
      ],
    },
  ]

  const desktopNavigation = [
    ...navigation.filter((item) => item.name === 'About Us'),
    ...navigation.filter((item) => item.name === 'Admissions'),
    ...navigation.filter((item) => item.name === 'Academics'),
    ...navigation.filter((item) => item.name === 'School Life'),
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container px-6">
        {/* Main Navigation */}
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Winsford Schools Logo"
              width={240}
              height={96}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {desktopNavigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-white hover:text-sky-blue transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-blue-950/95 border border-white/30 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/enquire" className="text-white hover:text-sky-blue transition-colors duration-200 font-medium">
              Enquire Now
            </Link>
            <Link href="/apply" className="bg-white text-gray-900 px-6 py-2 font-medium hover:bg-gray-100 transition-colors duration-200">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => mobileMenuOpen ? handleClose() : setMobileMenuOpen(true)}
            className="lg:hidden p-2 relative w-12 h-12 flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`absolute transition-all duration-300 ${mobileMenuOpen && menuVisible ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
              <Icon name="menu_thick" color="white" size={36} />
            </span>
            <span className={`absolute transition-all duration-300 ${mobileMenuOpen && menuVisible ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
              <Icon name="close" color="white" size={36} />
            </span>
          </button>
        </div>

        <hr className="border-white/30" />

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden fixed inset-0 bg-sky-blue z-50 transition-all duration-400 ease-out
              ${menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
            style={{ transitionDuration: '400ms' }}
          >
            <div className={`flex justify-between items-center px-6 py-6 transition-all duration-300 delay-150
              ${menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <Link href="/" onClick={handleClose}>
                <Image
                  src="/images/logo.png"
                  alt="Winsford Schools Logo"
                  width={240}
                  height={96}
                  className="h-20 w-auto"
                />
              </Link>
              <button
                onClick={handleClose}
                className="p-2 hover:rotate-90 transition-transform duration-300"
              >
                <Icon name="close" color="white" size={36} />
              </button>
            </div>
            <nav className="px-6 overflow-y-auto max-h-[calc(100vh-100px)]">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={`border-b transition-all duration-300 ease-out
                    ${menuVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{
                    borderColor: 'rgba(0, 90, 140, 0.3)',
                    transitionDelay: menuVisible ? `${200 + index * 60}ms` : '0ms',
                  }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-4 text-white font-medium text-lg hover:bg-[#6ab8d9] hover:pl-6 transition-all duration-200"
                    onClick={handleClose}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div
                className={`pt-6 space-y-3 transition-all duration-300 ease-out
                  ${menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: menuVisible ? `${200 + navigation.length * 60 + 80}ms` : '0ms' }}
              >
                <Link href="/enquire" className="block text-white text-center px-4 py-3 border-2 border-white font-medium hover:bg-white hover:text-sky-blue transition-colors duration-200"
                  onClick={handleClose}
                >
                  Enquire Now
                </Link>
                <Link href="/apply" className="block bg-white text-sky-blue text-center px-4 py-3 font-semibold hover:bg-gray-100 transition-colors duration-200"
                  onClick={handleClose}
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
