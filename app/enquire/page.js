import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactCard from '../../components/ContactCard'
import GradeSelect from '../../components/GradeSelect'
import FormInput from '../../components/FormInput'
import FormSelect from '../../components/FormSelect'
import FormTextarea from '../../components/FormTextarea'
import InnerPageHero from '../../components/InnerPageHero'

export default function EnquirePage() {
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
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                  </ContactCard>
                  <ContactCard icon="email" title="Email">
                    <p className="text-gray-600">info@winsfordschools.com.ng</p>
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

                <GradeSelect required />

                <FormSelect 
                  label="How did you hear about us?" 
                  name="referral" 
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
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary bg-sky-blue hover:bg-sky-blue/90 text-white px-8 py-3 font-semibold"
                  >
                    Send Enquiry
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
