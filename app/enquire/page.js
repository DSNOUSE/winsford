'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactCard from '../../components/ContactCard'
import GradeSelect from '../../components/GradeSelect'
import FormInput from '../../components/FormInput'
import FormSelect from '../../components/FormSelect'
import FormTextarea from '../../components/FormTextarea'
import InnerPageHero from '../../components/InnerPageHero'

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: '',
    referral: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/thank-you'
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      
      <main>
        <InnerPageHero
          title="Enquire About Winsford Schools"
          subtitle="We're here to answer your questions and help you discover if Winsford Schools is the right fit for your child's educational journey."
        />
        <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <ContactCard icon="location_on" title="Address">
                    <p className="text-gray-600">8/9 Awopeju Close, Igbogbo, Ikorodu, Lagos, Nigeria</p>
                  </ContactCard>
                  <ContactCard icon="phone" title="Phone">
                    <p className="text-gray-600">0803 517 2002 / 0803 402 7586 / 0703 579 7152</p>
                  </ContactCard>
                  <ContactCard icon="email" title="Email">
                    <p className="text-gray-600">winsfordoffice@gmail.com</p>
                  </ContactCard>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Office Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-center">
                    Thank you for your enquiry! We will get back to you within 24-48 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-center">
                    An error occurred. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Parent's Name" 
                    name="parentName" 
                    required 
                    value={formData.parentName}
                    onChange={handleInputChange}
                  />
                  <FormInput 
                    label="Student's Name" 
                    name="studentName" 
                    required 
                    value={formData.studentName}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Email" 
                    name="email" 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <FormInput 
                    label="Phone Number" 
                    name="phone" 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <GradeSelect 
                  required 
                  value={formData.grade}
                  onChange={handleInputChange}
                />

                <FormSelect 
                  label="How did you hear about us?" 
                  name="referral" 
                  value={formData.referral}
                  onChange={handleInputChange}
                  options={[
                    { value: 'referral', label: 'Parent Referral' },
                    { value: 'social', label: 'Social Media' },
                    { value: 'website', label: 'Website Search' },
                    { value: 'advertisement', label: 'Advertisement' },
                    { value: 'event', label: 'School Event' },
                    { value: 'other', label: 'Other' },
                  ]}
                />

                <FormTextarea 
                  label="Message" 
                  name="message" 
                  required 
                  placeholder="Tell us about your interest in Winsford Schools..."
                  value={formData.message}
                  onChange={handleInputChange}
                />

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary bg-sky-blue hover:bg-sky-blue/90 text-white px-8 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
