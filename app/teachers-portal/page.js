import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import InnerPageHero from '../../components/InnerPageHero'

export default function TeachersPortalPage() {
  return (
    <>
      <Header />

      <main>
        <InnerPageHero
          title="Teacher's Portal"
          subtitle="Staff can use the teacher portal for academic records, communication, and school operations."
        />
        <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 border p-8">
              <p className="text-gray-700 mb-6">
                If you already have credentials, continue to portal access. For support, contact the school office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portal/signin" className="btn-primary">
                  Portal Login
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact School Office
                </Link>
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
