'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function QuickLinks() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Calendar', href: '/calendar' },
    { name: 'Term Dates', href: '/term-dates' },
    { name: 'Report Absence', href: '/report-absence' },
    { name: 'Parent Pay', href: '/parent-pay' },
  ]

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 h-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-950 border-r-4 border-red h-full flex items-center transition-all duration-500 ease-in-out hover:bg-blue-800"
        style={{ width: isOpen ? '320px' : '64px' }}
      >
        <ul className={`flex flex-col h-full flex-1 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          {links.map((link) => (
            <li key={link.name} className="flex-1 border-b border-gray-700 last:border-b-0 flex items-center">
              <Link
                href={link.href}
                className="block text-white hover:text-red px-4 py-2 transition-colors duration-200 w-full"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-16 flex items-center justify-center flex-shrink-0">
          <div className="transform rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
            <span className="text-white text-sm font-bold tracking-widest">QUICK LINKS</span>
          </div>
        </div>
      </button>
    </div>
  )
}
