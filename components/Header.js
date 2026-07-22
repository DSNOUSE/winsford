'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from './icons'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
  const [desktopOpenDropdown, setDesktopOpenDropdown] = useState(null)
  const closeTimeoutRef = useRef(null)

  useEffect(() => {
    if (mobileMenuOpen) {
      setMenuVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  const handleClose = () => {
    setMenuVisible(false)
    setMobileOpenDropdown(null)
    setTimeout(() => setMobileMenuOpen(false), 400)
  }

  const toggleMobileDropdown = (name) => {
    setMobileOpenDropdown((current) => (current === name ? null : name))
  }

  // Desktop dropdown open/close with a short close delay so moving the
  // cursor diagonally from the trigger into the panel doesn't close it.
  const openDesktopDropdown = (name) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setDesktopOpenDropdown(name)
  }

  const scheduleCloseDesktopDropdown = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => setDesktopOpenDropdown(null), 150)
  }

  const handleDesktopKeyDown = (event) => {
    if (event.key === 'Escape') {
      setDesktopOpenDropdown(null)
    }
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

  // Desktop nav intentionally omits "Home" (the logo already links there)
  // and reorders the remaining items for the top bar.
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
            {desktopNavigation.map((item) => {
              const isOpen = desktopOpenDropdown === item.name
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && openDesktopDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && scheduleCloseDesktopDropdown()}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-sky-blue transition-colors duration-200 font-medium"
                    aria-haspopup={item.dropdown ? 'true' : undefined}
                    aria-expanded={item.dropdown ? isOpen : undefined}
                    onFocus={() => item.dropdown && openDesktopDropdown(item.name)}
                    onKeyDown={(e) => item.dropdown && handleDesktopKeyDown(e)}
                  >
                    <span className="flex items-center gap-1">
                      {item.name}
                      {item.dropdown && (
                        <Icon
                          name="arrow_down"
                          color="white"
                          size={14}
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      )}
                    </span>
                  </Link>
                  {item.dropdown && (
                    <div
                      role="menu"
                      aria-label={`${item.name} submenu`}
                      onFocus={() => openDesktopDropdown(item.name)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          scheduleCloseDesktopDropdown()
                        }
                      }}
                      className={`absolute top-full left-0 pt-2 w-52 z-50 transition-all duration-200
                        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                      <div className="bg-blue-950/95 border border-white/30 shadow-lg rounded-lg py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            role="menuitem"
                            className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
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
            aria-expanded={mobileMenuOpen}
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
                aria-label="Close menu"
              >
                <Icon name="close" color="white" size={36} />
              </button>
            </div>
            <nav className="px-6 overflow-y-auto max-h-[calc(100vh-100px)]">
              {navigation.map((item, index) => {
                const isDropdownOpen = mobileOpenDropdown === item.name
                return (
                  <div
                    key={item.name}
                    className={`border-b transition-all duration-300 ease-out
                      ${menuVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    style={{
                      borderColor: 'rgba(0, 90, 140, 0.3)',
                      transitionDelay: menuVisible ? `${200 + index * 60}ms` : '0ms',
                    }}
                  >
                    {item.dropdown ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="flex-1 block px-4 py-4 text-white font-medium text-lg hover:bg-[#6ab8d9] transition-all duration-200"
                            onClick={handleClose}
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => toggleMobileDropdown(item.name)}
                            className="px-4 py-4 text-white"
                            aria-label={`${isDropdownOpen ? 'Collapse' : 'Expand'} ${item.name} submenu`}
                            aria-expanded={isDropdownOpen}
                          >
                            <span
                              className={`inline-block transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            >
                              <Icon name="arrow_down" color="white" size={20} />
                            </span>
                          </button>
                        </div>
                        <div
                          role="menu"
                          aria-label={`${item.name} submenu`}
                          className={`overflow-hidden transition-all duration-300 ease-out
                            ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              role="menuitem"
                              className="block pl-8 pr-4 py-3 text-white/90 text-base hover:bg-[#6ab8d9] hover:pl-10 transition-all duration-200"
                              onClick={handleClose}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-4 text-white font-medium text-lg hover:bg-[#6ab8d9] hover:pl-6 transition-all duration-200"
                        onClick={handleClose}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                )
              })}
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
