'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from './icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()



  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Logo & Name */}
              <div className="flex flex-col items-center lg:items-start mb-8">
                <Image
                  src="/images/logo-outline.png"
                  alt="Winsford Schools Logo"
                  width={80}
                  height={80}
                  className="h-20 w-auto mb-3"
                />
                <h3 className="text-xl font-bold">Contact Us</h3>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 flex flex-col items-center lg:items-start mb-8">
                <div className="flex items-center text-gray-300">
                  <Icon name="location_on" color="sky-blue" className="mr-3" />
                  <span>8/9 Awopeju Close, Igbogbo, Ikorodu, Lagos, Nigeria</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon name="phone" color="sky-blue" className="mr-3" />
                  <span>0803 517 2002 / 0803 402 7586 / 0703 579 7152</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon name="email" color="sky-blue" className="mr-3" />
                  <span>info@winsfordschools.com.ng</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-blue transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} className="icon-white" size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Google Map */}
            <div className="rounded-lg overflow-hidden h-80 lg:min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d3.3208761!3d6.669298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b96bf3b55faeb%3A0x7357213f4c38a47d!2sWINSFORD%20COMPREHENSIVE%20COLLEGE!5e0!3m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Winsford Schools Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left text-sm text-gray-400 space-y-2 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <span>© {currentYear} Winsford Schools</span>
              <span>·</span>
              <Link href="/legal" className="text-sky-blue hover:text-sky-blue/80 transition-colors duration-200">
                Legal Information
              </Link>
            </div>
            <div>
              Website design by{' '}
              <a href="https://dsnouse.co.uk" target="_blank" rel="noopener noreferrer" className="text-sky-blue hover:text-sky-blue/80 transition-colors duration-200">
                Digital Design House Limited
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-[#3498DB] text-white p-3 rounded-full shadow-lg hover:bg-[#2F89C5] transition-colors duration-200 z-40"
        aria-label="Back to top"
      >
        <Icon name="arrow_up" className="icon-white" />
      </button>
    </footer>
  )
}
