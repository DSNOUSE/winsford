'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SectionHeading from '../../components/SectionHeading'
import InnerPageHero from '../../components/InnerPageHero'
import Link from 'next/link'
import Image from 'next/image'

export default function AdmissionsPage() {
  const [studentInfo, setStudentInfo] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: ''
  })
  const [showBankDetails, setShowBankDetails] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setStudentInfo({
      ...studentInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (studentInfo.studentName && studentInfo.email) {
      setShowBankDetails(true)
      setFormSubmitted(true)
    }
  }
  const admissionSteps = [
    {
      number: 1,
      title: 'Complete the Online Application',
      description: 'Prospective parents or guardians should complete the online admission form with the required details.',
      icon: '/images/icons/resume.png',
      action: 'Start Application',
      link: '/apply'
    },
    {
      number: 2,
      title: 'Pay the Admission Fee',
      description: 'A non-refundable fee of ₦5,000 covers the entrance examination and admission processing.',
      icon: '/images/icons/credit-card.png',
      details: [
        'Fee Amount: ₦5,000',
        'Non-refundable',
        'Covers entrance examination',
        'Covers admission processing'
      ]
    },
    {
      number: 3,
      title: 'Entrance Examination',
      description: 'Applicants will be invited to sit for an entrance examination at our school campus.',
      icon: '/images/icons/school.png',
      location: 'Winsford Group of Schools, No. 8–9 Awokeju Close, Igbogbo, Ikorodu, Lagos.',
      details: [
        'Examination date and time will be communicated after application submission',
        'Tests cover core subjects appropriate to the grade level',
        'Parents will receive notification via email and phone'
      ]
    },
    {
      number: 4,
      title: 'Assessment and Admission Decision',
      description: 'The entrance examination will be assessed, and successful candidates will be offered admission into the appropriate class.',
      icon: '/images/icons/decision.png',
      details: [
        'Thorough assessment of examination performance',
        'Consideration of previous academic records',
        'Admission decision communicated within 5-7 working days',
        'Successful candidates receive admission offer'
      ]
    },
    {
      number: 5,
      title: 'Admission Documentation',
      description: 'Successful applicants will receive comprehensive admission package.',
      icon: '/images/icons/documentation.png',
      documents: [
        'Admission letter',
        'School fee schedule',
        'List of required admission documents',
        'Information on uniforms, books, and other school requirements',
        'Guidelines for completing the admission process'
      ]
    },
    {
      number: 6,
      title: 'Acceptance and Payment',
      description: 'To secure the admission, parents or guardians will be required to complete payment requirements.',
      icon: '/images/icons/credit-card.png',
      payments: [
        'Pay the Acceptance Fee',
        'Pay the School Fees',
        'Pay for School Uniforms',
        'Pay for other required educational materials and school items'
      ]
    },
    {
      number: 7,
      title: 'Scholarship and Freebies',
      description: 'Applicants who qualify for any scholarships, discounts, or freebies will have these benefits applied during the admission process.',
      icon: '/images/icons/scholarship.png',
      details: [
        'Merit-based scholarships available',
        'Discounts for multiple siblings',
        'Early bird admission discounts',
        'All benefits applied before final enrollment'
      ]
    }
  ]

  const requirements = {
    basic: [
      'Age 10-18 years',
      'Completed previous grade level',
      'Birth certificate',
      'Previous school transcripts'
    ],
    documents: [
      'Completed application form',
      'Passport photographs (2)',
      'Medical report',
      'Parent/Guardian ID',
      'Last school result'
    ]
  }

  return (
    <>
      <Header />
      
      <main>
        <InnerPageHero
          title="Admission Process"
          subtitle="Join the Winsford Schools family through our comprehensive 7-step admission process designed to ensure the best fit for your child."
        />

        {/* Overview Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002d5f] mb-6">
                Your Journey to Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Winsford Group of Schools, we've designed a transparent and thorough admission process 
                to ensure every student finds their place in our community of learners. Our 7-step process 
                guides you from application to enrollment with clarity and support.
              </p>
              <div className="bg-red text-white p-6 rounded-lg inline-block">
                <p className="text-xl font-semibold mb-2">Welcome to Excellence</p>
                <p className="text-white/90">
                  We look forward to welcoming every successful applicant into the Winsford Group of Schools, 
                  where academic excellence, character development, and future leadership are nurtured.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Steps */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <SectionHeading
              title="7-Step Admission Process"
              subtitle="A clear pathway to joining our school community"
            />
            
            <div className="max-w-5xl mx-auto space-y-8">
              {admissionSteps.map((step) => (
                <div 
                  key={step.number} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Step Number & Icon */}
                    <div className="bg-[#002d5f] text-white p-6 md:w-48 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <Image
                          src={step.icon}
                          alt={`Step ${step.number} icon`}
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="text-3xl font-bold">Step {step.number}</div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-[#002d5f] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {step.description}
                      </p>
                      
                      {step.location && (
                        <div className="bg-sky-blue/10 p-4 rounded-lg mb-4">
                          <p className="font-semibold text-[#002d5f] mb-1">Examination Location:</p>
                          <p className="text-gray-700">{step.location}</p>
                        </div>
                      )}
                      
                      {step.details && (
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red mr-2 mt-1">•</span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {step.documents && (
                        <div className="mb-4">
                          <p className="font-semibold text-[#002d5f] mb-2">Documents Provided:</p>
                          <ul className="space-y-2">
                            {step.documents.map((doc, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red mr-2 mt-1">•</span>
                                <span className="text-gray-700">{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {step.payments && (
                        <div className="mb-4">
                          <p className="font-semibold text-[#002d5f] mb-2">Payment Requirements:</p>
                          <ul className="space-y-2">
                            {step.payments.map((payment, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red mr-2 mt-1">•</span>
                                <span className="text-gray-700">{payment}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {step.action && step.link && (
                        <Link 
                          href={step.link}
                          className="inline-block bg-red text-white px-6 py-3 font-semibold hover:bg-red/90 transition-colors duration-200 mt-4"
                        >
                          {step.action} →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <SectionHeading
              title="Admission Requirements"
              subtitle="What you need to prepare for your application"
            />
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#002d5f] mb-4">Basic Requirements</h3>
                <ul className="space-y-3">
                  {requirements.basic.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-red text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#002d5f] mb-4">Documents Needed</h3>
                <ul className="space-y-3">
                  {requirements.documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-red text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bank Details Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <SectionHeading
              title="Payment Information"
              subtitle="Provide your details to view bank account information for fee payment"
            />
            
            <div className="max-w-2xl mx-auto">
              {!formSubmitted ? (
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#002d5f] mb-6">Student Information</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Student Name <span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="studentName"
                          value={studentInfo.studentName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002d5f] focus:border-transparent"
                          placeholder="Enter student's full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Parent/Guardian Name
                        </label>
                        <input
                          type="text"
                          name="parentName"
                          value={studentInfo.parentName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002d5f] focus:border-transparent"
                          placeholder="Enter parent/guardian's name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={studentInfo.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002d5f] focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={studentInfo.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002d5f] focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-red text-white py-3 font-semibold rounded-lg hover:bg-red/90 transition-colors duration-200"
                      >
                        View Bank Details
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#002d5f] mb-2">Bank Account Details</h3>
                    <p className="text-gray-600">Use the following account details to make your payment</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Receiving Bank</p>
                      <p className="text-lg font-semibold text-[#002d5f]">First Bank</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Account Name</p>
                      <p className="text-lg font-semibold text-[#002d5f]">Winsford Comprehensive College</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Account Number</p>
                      <p className="text-lg font-semibold text-[#002d5f]">2015163370</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Payment Reference</p>
                      <p className="text-lg font-semibold text-[#002d5f]">{studentInfo.studentName} - {studentInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Please include the student's name as payment reference when making the transfer. 
                      Send payment confirmation to info@winsfordschools.com
                    </p>
                  </div>
                  
                  <button
                    onClick={() => {
                      setShowBankDetails(false)
                      setFormSubmitted(false)
                      setStudentInfo({
                        studentName: '',
                        parentName: '',
                        email: '',
                        phone: ''
                      })
                    }}
                    className="w-full mt-6 bg-[#002d5f] text-white py-3 font-semibold rounded-lg hover:bg-[#002d5f]/90 transition-colors duration-200"
                  >
                    Enter Different Information
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-red">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start your application today and take the first step toward academic excellence at Winsford Group of Schools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply" 
                className="bg-white text-red px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Application
              </Link>
              <Link 
                href="/enquire" 
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-red transition-colors duration-200"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
