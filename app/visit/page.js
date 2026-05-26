import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactCard from '../../components/ContactCard'
import CheckList from '../../components/CheckList'
import GradeSelect from '../../components/GradeSelect'
import FormInput from '../../components/FormInput'
import FormTextarea from '../../components/FormTextarea'
import FormSelect from '../../components/FormSelect'
import FormCheckbox from '../../components/FormCheckbox'
import InnerPageHero from '../../components/InnerPageHero'

export default function VisitPage() {
  return (
    <>
      <Header />
      
      <main>
        <InnerPageHero
          title="Schedule a School Visit"
          subtitle="Come experience the Winsford difference firsthand. Tour our facilities, meet our dedicated staff, and see our students in action."
        />
        <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="card">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect</h2>
                <CheckList
                  items={[
                    'Guided tour of our modern facilities',
                    'Meet with our Principal or Head Teacher',
                    'Observe classes in session (by appointment)',
                    'Learn about our curriculum and programs',
                    'Q&A session with academic staff',
                  ]}
                />
              </div>

              <div className="card">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visit Information</h2>
                <div className="space-y-4">
                  <ContactCard icon="schedule" title="Duration">
                    <p className="text-gray-600">Approximately 1-2 hours</p>
                  </ContactCard>
                  <ContactCard icon="calendar_today" title="Best Times">
                    <p className="text-gray-600">Monday - Friday, 9:00 AM - 2:00 PM</p>
                  </ContactCard>
                  <ContactCard icon="people" title="Who Should Attend">
                    <p className="text-gray-600">Parents and prospective students</p>
                  </ContactCard>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Schedule Your Visit</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Parent's Name" 
                    name="parentName" 
                    required 
                  />
                  <FormInput 
                    label="Student's Name" 
                    name="studentName" 
                    required 
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Email" 
                    name="email" 
                    type="email" 
                    required 
                  />
                  <FormInput 
                    label="Phone Number" 
                    name="phone" 
                    type="tel" 
                    required 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Preferred Date" 
                    name="date" 
                    type="date" 
                    required 
                  />
                  <FormSelect 
                    label="Preferred Time" 
                    name="time" 
                    required 
                    options={[
                      { value: '9:00', label: '9:00 AM' },
                      { value: '10:00', label: '10:00 AM' },
                      { value: '11:00', label: '11:00 AM' },
                      { value: '12:00', label: '12:00 PM' },
                      { value: '13:00', label: '1:00 PM' },
                      { value: '14:00', label: '2:00 PM' },
                    ]}
                  />
                </div>

                <GradeSelect required />

                <FormSelect 
                  label="Number of Attendees" 
                  name="attendees" 
                  required 
                  options={[
                    { value: '1', label: '1 person' },
                    { value: '2', label: '2 people' },
                    { value: '3', label: '3 people' },
                    { value: '4', label: '4 people' },
                    { value: '5+', label: '5+ people' },
                  ]}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Areas of Interest
                  </label>
                  <div className="space-y-2">
                    <FormCheckbox name="interests" value="academic" label="Academic Facilities" />
                    <FormCheckbox name="interests" value="science" label="Science Laboratories" />
                    <FormCheckbox name="interests" value="computer" label="Computer Laboratory" />
                    <FormCheckbox name="interests" value="sports" label="Sports Facilities" />
                    <FormCheckbox name="interests" value="library" label="Library" />
                  </div>
                </div>

                <FormTextarea 
                  label="Additional Comments or Questions" 
                  name="comments" 
                  placeholder="Any specific questions or areas you'd like to focus on during your visit?"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary bg-sky-blue hover:bg-sky-blue/90 text-white px-8 py-3 font-semibold"
                  >
                    Schedule Visit
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Can&apos;t Make It In Person?</h2>
              <p className="text-gray-600 mb-6">
                We also offer virtual school tours via video call. Contact us to arrange a digital visit.
              </p>
              <a href="tel:+234XXXXXXXXXX" className="btn-secondary">
                Call for Virtual Tour
              </a>
            </div>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
