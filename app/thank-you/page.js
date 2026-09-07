import Header from '../../components/Header'
import Footer from '../../components/Footer'
import InnerPageHero from '../../components/InnerPageHero'
import Image from 'next/image'

export default function ThankYouPage() {
  return (
    <>
      <Header />
      
      <main>
        <InnerPageHero
          title="Thank You"
          subtitle="Your submission has been received"
        />
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <Image 
                  src="/images/logo.png" 
                  alt="Winsford Schools Logo" 
                  width={200} 
                  height={200}
                  className="mx-auto"
                />
              </div>
              
              <h1 className="text-4xl font-bold text-[#002d5f] mb-6">
                We look forward to seeing you soon
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in Winsford Schools. Our team will review your submission and get back to you within 24-48 hours.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-[#002d5f] mb-4">What happens next?</h2>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• Our admissions team will review your submission</li>
                  <li>• You will receive a confirmation email shortly</li>
                  <li>• We will contact you to discuss the next steps</li>
                  <li>• Feel free to reach out if you have any questions</li>
                </ul>
              </div>
              
              <div className="space-x-4">
                <a 
                  href="/" 
                  className="inline-block bg-[#002d5f] hover:bg-[#002d5f]/90 text-white px-6 py-3 rounded font-semibold transition-colors"
                >
                  Return to Homepage
                </a>
                <a 
                  href="/enquire" 
                  className="inline-block border-2 border-[#002d5f] text-[#002d5f] hover:bg-[#002d5f] hover:text-white px-6 py-3 rounded font-semibold transition-colors"
                >
                  Contact Us
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
