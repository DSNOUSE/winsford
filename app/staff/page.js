'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import PageHero from '../../components/PageHero'

export default function StaffPage() {
  const staff = [
    { name: 'Staff Member 1', role: 'Teacher', subject: 'English', image: '/images/staff/principal.png' },
    { name: 'Staff Member 2', role: 'Teacher', subject: 'Mathematics', image: '/images/staff/vp-academics.png' },
    { name: 'Staff Member 3', role: 'Teacher', subject: 'Science', image: '/images/staff/vp-admin.png' },
    { name: 'Staff Member 4', role: 'Teacher', subject: 'History', image: '/images/staff/assistant headteacher primary.png' },
    { name: 'Staff Member 5', role: 'Teacher', subject: 'Geography', image: '/images/placeholder.png' },
    { name: 'Staff Member 6', role: 'Teacher', subject: 'Physics', image: '/images/placeholder.png' },
    { name: 'Staff Member 7', role: 'Teacher', subject: 'Chemistry', image: '/images/placeholder.png' },
    { name: 'Staff Member 8', role: 'Teacher', subject: 'Biology', image: '/images/placeholder.png' },
    { name: 'Staff Member 9', role: 'Teacher', subject: 'Computer Science', image: '/images/placeholder.png' },
    { name: 'Staff Member 10', role: 'Teacher', subject: 'Art', image: '/images/placeholder.png' },
    { name: 'Staff Member 11', role: 'Teacher', subject: 'Music', image: '/images/placeholder.png' },
    { name: 'Staff Member 12', role: 'Teacher', subject: 'Physical Education', image: '/images/placeholder.png' },
  ]

  return (
    <>
      <Header />
      
      <main>
        <PageHero 
          title="Our Staff" 
          subtitle="Meet our dedicated team of educators who are committed to nurturing excellence and inspiring young minds at Winsford Schools."
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002d5f] mb-4">Our Staff</h1>
            <div className="w-20 h-1 bg-red mb-12"></div>
            
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Meet our dedicated team of educators who are committed to nurturing excellence and inspiring young minds at Winsford Schools.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {staff.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    {/* Light blue arch background */}
                    <div className="absolute inset-0 bg-sky-blue/20 rounded-t-full rounded-b-3xl"></div>
                    {/* Circular photo with white border */}
                    <div className="absolute inset-4 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center top' }}
                        sizes="128px"
                      />
                    </div>
                  </div>
                  {/* Name in dark blue/black */}
                  <h3 className="text-lg font-bold text-[#002d5f] mb-1">{member.name}</h3>
                  {/* Role in light blue */}
                  <p className="text-sky-blue text-sm mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.subject}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}