import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FormInput from '../../components/FormInput'
import FormSelect from '../../components/FormSelect'
import FormTextarea from '../../components/FormTextarea'
import FormCheckbox from '../../components/FormCheckbox'
import FormSection from '../../components/FormSection'
import InnerPageHero from '../../components/InnerPageHero'

export default function StudentInformationPage() {
  return (
    <>
      <Header />

      <main>
        <InnerPageHero
          title="Student Information Registry"
          subtitle="Students can submit their information so we can build an accurate school database."
        />
        <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sky-blue/10 p-6 mb-8 border border-sky-blue/20">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Before You Submit</h2>
              <p className="text-gray-700">
                Please provide accurate details. Include your current class or graduation year where applicable.
              </p>
            </div>

            <div className="bg-gray-50 p-8 border">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center uppercase">Student Information Form</h2>

              <form className="space-y-6">
                <FormSection title="Student Profile">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput label="First Name" name="firstName" required />
                    <FormInput label="Last Name" name="lastName" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <FormSelect
                      label="Student Type"
                      name="studentType"
                      required
                      placeholder="Select student type"
                      options={[
                        { value: 'current', label: 'Current Student' },
                        { value: 'alumni', label: 'Alumni' },
                      ]}
                    />
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
                    <FormInput label="Date of Birth" name="dateOfBirth" type="date" required />
                    <FormInput label="Admission Year" name="admissionYear" type="number" min="1990" max="2100" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <FormInput label="Current Class" name="currentClass" placeholder="e.g., SSS 2" />
                    <FormInput label="Graduation Year" name="graduationYear" type="number" min="1990" max="2100" placeholder="e.g., 2021" />
                  </div>
                </FormSection>

                <FormSection title="Contact Information">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput label="Email Address" name="email" type="email" required />
                    <FormInput label="Phone Number" name="phone" type="tel" required />
                  </div>

                  <div className="mt-6">
                    <FormTextarea label="Home Address" name="address" rows={2} required />
                  </div>
                </FormSection>

                <FormSection title="Academic Details">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput label="Last Class Completed" name="lastClassCompleted" required />
                    <FormInput label="State of Origin" name="stateOfOrigin" />
                  </div>

                  <div className="mt-6">
                    <FormTextarea
                      label="Achievements / Current Occupation"
                      name="achievementsOrOccupation"
                      rows={3}
                      placeholder="Share your achievements in school or your current occupation"
                    />
                  </div>
                </FormSection>

                <div className="bg-white p-6 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 uppercase">Consent</h3>
                  <div className="space-y-3">
                    <FormCheckbox
                      name="consentAccuracy"
                      required
                      label="I confirm that the information provided is accurate and up to date."
                    />
                    <FormCheckbox
                      name="consentContact"
                      required
                      label="I agree that Winsford Schools may contact me regarding this submission."
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    Submit Information
                  </button>
                  <p className="text-sm text-gray-600 mt-3">
                    Thank you for helping us build a complete student database.
                  </p>
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
