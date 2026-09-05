'use client'

import Link from 'next/link'
import { Icon } from './icons'

export default function TopNav() {
  return (
    <div className="bg-[#002d5f] text-white text-sm">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Left Section - Social Media */}
          <div className="bg-red flex items-center space-x-4 px-4 py-2 min-w-[200px] rounded-r-full">
            <span className="text-white/80 hidden sm:inline">Follow Us:</span>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/winsfordschools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sky-blue transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Icon name="facebook" color="white" size={18} />
              </a>
              <a 
                href="https://instagram.com/winsfordschools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sky-blue transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Icon name="instagram" color="white" size={18} />
              </a>
              <a 
                href="https://youtube.com/winsfordschools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sky-blue transition-colors duration-200"
                aria-label="Follow us on YouTube"
              >
                <Icon name="youtube" color="white" size={18} />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+2348123456789" 
              className="flex items-center space-x-2 hover:text-sky-blue transition-colors duration-200"
            >
              <Icon name="phone" color="white" size={16} />
              <span className="hidden md:inline">+234 812 345 6789</span>
            </a>
            <a 
              href="mailto:info@winsfordschools.com" 
              className="flex items-center space-x-2 hover:text-sky-blue transition-colors duration-200"
            >
              <Icon name="email" color="white" size={16} />
              <span className="hidden md:inline">info@winsfordschools.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
