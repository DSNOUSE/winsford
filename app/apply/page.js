'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FormInput from '../../components/FormInput'
import FormSelect from '../../components/FormSelect'
import FormTextarea from '../../components/FormTextarea'
import FormCheckbox from '../../components/FormCheckbox'
import FormSection from '../../components/FormSection'
import GradeSelect from '../../components/GradeSelect'
import InnerPageHero from '../../components/InnerPageHero'

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    grade: '',
    previousSchool: '',
    // Parent/Guardian Information
    parentName: '',
    relationship: '',
    email: '',
    phone: '',
    address: '',
    // Academic Information
    lastSchool: '',
    lastGrade: '',
    averageMarks: '',
    // Additional Information
    medical: '',
    interests: '',
    motivation: '',
    // Declaration
    declaration1: false,
    declaration2: false,
    declaration3: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.dob && 
               formData.gender && formData.grade
      case 2:
        return formData.parentName && formData.relationship && formData.email && 
               formData.phone && formData.address && formData.lastSchool && formData.lastGrade
      case 3:
        return formData.motivation && formData.declaration1 && 
               formData.declaration2 && formData.declaration3
      default:
        return false
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    } else {
      alert('Please fill in all required fields before proceeding.')
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep(3)) {
      console.log('Application submitted:', formData)
      alert('Application submitted successfully! You will receive a confirmation email within 24-48 hours.')
      // Here you would typically send the data to your backend
    } else {
      alert('Please complete all required fields and declarations.')
    }
  }

  const steps = [
    { number: 1, title: 'Student Information' },
    { number: 2, title: 'Parent & Academic Info' },
    { number: 3, title: 'Additional & Declaration' },
  ]

  return (
    <>
      <Header />
      
      <main>
        <InnerPageHero
          title="Apply for Admission"
          subtitle="Join the Winsford Schools family and embark on a journey of academic excellence and personal growth."
        />
        <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sky-blue/10 p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Admission Requirements</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Basic Requirements:</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Age 10-18 years</li>
                    <li>• Completed previous grade level</li>
                    <li>• Birth certificate</li>
                    <li>• Previous school transcripts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Documents Needed:</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Application form</li>
                    <li>• Passport photographs (2)</li>
                    <li>• Medical report</li>
                    <li>• Parent/Guardian ID</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Online Application Form</h2>
              
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  {steps.map((step) => (
                    <div key={step.number} className="flex-1 text-center">
                      <div className={`flex items-center justify-center w-10 h-10 mx-auto rounded-full border-2 font-semibold ${
                        currentStep >= step.number 
                          ? 'bg-blue-900 border-blue-900 text-white' 
                          : 'border-gray-300 text-gray-400'
                      }`}>
                        {step.number}
                      </div>
                      <p className={`mt-2 text-sm font-medium ${
                        currentStep >= step.number ? 'text-blue-900' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Student Information */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <FormSection title="Student Information">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput 
                          label="First Name" 
                          name="firstName" 
                          required 
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                        <FormInput 
                          label="Last Name" 
                          name="lastName" 
                          required 
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <FormInput 
                          label="Date of Birth" 
                          name="dob" 
                          type="date" 
                          required 
                          value={formData.dob}
                          onChange={handleInputChange}
                        />
                        <FormSelect
                          label="Gender"
                          name="gender"
                          required
                          placeholder="Select gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                          ]}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <GradeSelect 
                          label="Grade Applying For" 
                          required 
                          value={formData.grade}
                          onChange={handleInputChange}
                        />
                        <FormInput 
                          label="Previous School Attended" 
                          name="previousSchool"
                          value={formData.previousSchool}
                          onChange={handleInputChange}
                        />
                      </div>
                    </FormSection>
                  </div>
                )}

                {/* Step 2: Parent/Guardian & Academic Information */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <FormSection title="Parent/Guardian Information">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput 
                          label="Parent's Full Name" 
                          name="parentName" 
                          required 
                          value={formData.parentName}
                          onChange={handleInputChange}
                        />
                        <FormSelect
                          label="Relationship to Student"
                          name="relationship"
                          required
                          placeholder="Select relationship"
                          value={formData.relationship}
                          onChange={handleInputChange}
                          options={[
                            { value: 'father', label: 'Father' },
                            { value: 'mother', label: 'Mother' },
                            { value: 'guardian', label: 'Guardian' },
                          ]}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <FormInput 
                          label="Email Address" 
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

                      <div className="mt-6">
                        <FormTextarea 
                          label="Home Address" 
                          name="address" 
                          rows={2} 
                          required 
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </FormSection>

                    <FormSection title="Academic Information">
                      <div className="space-y-4">
                        <FormInput 
                          label="Last School Attended" 
                          name="lastSchool" 
                          required 
                          value={formData.lastSchool}
                          onChange={handleInputChange}
                        />
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormInput 
                            label="Last Grade Completed" 
                            name="lastGrade" 
                            required 
                            value={formData.lastGrade}
                            onChange={handleInputChange}
                          />
                          <FormInput 
                            label="Average Grade/Marks" 
                            name="averageMarks"
                            value={formData.averageMarks}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </FormSection>
                  </div>
                )}

                {/* Step 3: Additional Information & Declaration */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <FormSection title="Additional Information">
                      <div className="space-y-4">
                        <FormTextarea
                          label="Medical Conditions or Allergies"
                          name="medical"
                          rows={3}
                          placeholder="Please specify any medical conditions, allergies, or special needs we should be aware of"
                          value={formData.medical}
                          onChange={handleInputChange}
                        />
                        
                        <FormTextarea
                          label="Extracurricular Interests"
                          name="interests"
                          rows={3}
                          placeholder="Sports, clubs, hobbies, or other activities your child enjoys"
                          value={formData.interests}
                          onChange={handleInputChange}
                        />

                        <FormTextarea
                          label="Why do you want to join Winsford Schools?"
                          name="motivation"
                          rows={4}
                          required
                          placeholder="Tell us about your reasons for choosing Winsford Schools"
                          value={formData.motivation}
                          onChange={handleInputChange}
                        />
                      </div>
                    </FormSection>

                    <div className="bg-white p-6 border">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Declaration</h3>
                      <div className="space-y-3">
                        <FormCheckbox
                          name="declaration1"
                          required
                          checked={formData.declaration1}
                          onChange={handleInputChange}
                          label="I certify that all information provided in this application is true and correct to the best of my knowledge."
                        />
                        <FormCheckbox
                          name="declaration2"
                          required
                          checked={formData.declaration2}
                          onChange={handleInputChange}
                          label="I understand that any false information may result in the rejection of this application or dismissal if discovered later."
                        />
                        <FormCheckbox
                          name="declaration3"
                          required
                          checked={formData.declaration3}
                          onChange={handleInputChange}
                          label="I agree to abide by the rules and regulations of Winsford Schools."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="btn-secondary"
                    >
                      Previous
                    </button>
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-red bg-red hover:bg-red/90 text-white px-8 py-3 font-semibold ml-auto"
                    >
                      Submit Application
                    </button>
                  )}
                </div>

                {currentStep === 3 && (
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    You will receive a confirmation email within 24-48 hours.
                  </p>
                )}
              </form>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Our admissions team is here to assist you throughout the application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+234XXXXXXXXXX" className="btn-secondary">
                  Call Admissions
                </a>
                <a href="/enquire" className="btn-primary">
                  Send Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
