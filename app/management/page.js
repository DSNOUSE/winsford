'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import PageHero from '../../components/PageHero'

export default function ManagementPage() {
  const management = [
    { name: 'Mr Yussuf Wasiu', role: 'Principal', image: '/images/staff/principal.png' },
    { name: 'Ehiwuogu Emmanuel', role: 'Vice Principal\nAdministration', image: '/images/staff/vp-admin.png' },
    { name: 'Mrs Samuel', role: 'Assistant Head Teacher\nPrimary', image: '/images/staff/assistant headteacher primary.png' },
    { name: 'Oyenekan Adeyemi Paul', role: 'Vice Principal\nAcademics', image: '/images/staff/vp-academics.png' },
  ]

  return (
    <>
      <Header />
      
      <main>
        <PageHero 
          title="Management Team" 
          subtitle="Meet our dedicated management team who lead Winsford Schools with vision, expertise, and commitment to excellence."
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002d5f] mb-4">Management Team</h1>
            <div className="w-20 h-1 bg-red mb-12"></div>
            
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Meet our dedicated management team who lead Winsford Schools with vision, expertise, and commitment to excellence.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {management.map((person, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-64 h-64 mx-auto mb-4">
                    {/* Light blue arch background */}
                    <div className="absolute inset-0 bg-sky-blue/20 rounded-t-full rounded-b-3xl"></div>
                    {/* Circular photo with white border */}
                    <div className="absolute inset-4 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center top' }}
                        sizes="224px"
                      />
                    </div>
                  </div>
                  {/* Name in dark blue/black */}
                  <h3 className="text-lg font-bold text-[#002d5f] mb-2">{person.name}</h3>
                  {/* Role in light blue */}
                  <p className="text-sky-blue text-sm whitespace-pre-line">{person.role}</p>
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