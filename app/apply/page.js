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
              <form className="space-y-6">
                {/* Student Information */}
                <FormSection title="Student Information">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput label="First Name" name="firstName" required />
                    <FormInput label="Last Name" name="lastName" required />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <FormInput label="Date of Birth" name="dob" type="date" required />
                    <FormSelect
                      label="Gender"
                      name="gender"
                      required
                      placeholder="Select gender"
                      options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                      ]}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <GradeSelect label="Grade Applying For" required />
                    <FormInput label="Previous School Attended" name="previousSchool" />
                  </div>
                </FormSection>

                {/* Parent/Guardian Information */}
                <FormSection title="Parent/Guardian Information">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput label="Parent's Full Name" name="parentName" required />
                    <FormSelect
                      label="Relationship to Student"
                      name="relationship"
                      required
                      placeholder="Select relationship"
                      options={[
                        { value: 'father', label: 'Father' },
                        { value: 'mother', label: 'Mother' },
                        { value: 'guardian', label: 'Guardian' },
                      ]}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <FormInput label="Email Address" name="email" type="email" required />
                    <FormInput label="Phone Number" name="phone" type="tel" required />
                  </div>

                  <div className="mt-6">
                    <FormTextarea label="Home Address" name="address" rows={2} required />
                  </div>
                </FormSection>

                {/* Academic Information */}
                <FormSection title="Academic Information">
                  <div className="space-y-4">
                    <FormInput label="Last School Attended" name="lastSchool" required />
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput label="Last Grade Completed" name="lastGrade" required />
                      <FormInput label="Average Grade/Marks" name="averageMarks" />
                    </div>
                  </div>
                </FormSection>

                {/* Additional Information */}
                <FormSection title="Additional Information">
                  <div className="space-y-4">
                    <FormTextarea
                      label="Medical Conditions or Allergies"
                      name="medical"
                      rows={3}
                      placeholder="Please specify any medical conditions, allergies, or special needs we should be aware of"
                    />
                    
                    <FormTextarea
                      label="Extracurricular Interests"
                      name="interests"
                      rows={3}
                      placeholder="Sports, clubs, hobbies, or other activities your child enjoys"
                    />

                    <FormTextarea
                      label="Why do you want to join Winsford Schools?"
                      name="motivation"
                      rows={4}
                      required
                      placeholder="Tell us about your reasons for choosing Winsford Schools"
                    />
                  </div>
                </FormSection>

                {/* Declaration */}
                <div className="bg-white p-6 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Declaration</h3>
                  <div className="space-y-3">
                    <FormCheckbox
                      name="declaration1"
                      required
                      label="I certify that all information provided in this application is true and correct to the best of my knowledge."
                    />
                    <FormCheckbox
                      name="declaration2"
                      required
                      label="I understand that any false information may result in the rejection of this application or dismissal if discovered later."
                    />
                    <FormCheckbox
                      name="declaration3"
                      required
                      label="I agree to abide by the rules and regulations of Winsford Schools."
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-red bg-red hover:bg-red/90 text-white px-8 py-3 font-semibold"
                  >
                    Submit Application
                  </button>
                  <p className="text-sm text-gray-600 mt-3">
                    You will receive a confirmation email within 24-48 hours.
                  </p>
                </div>
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
