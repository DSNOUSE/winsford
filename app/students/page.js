import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import InnerPageHero from '../../components/InnerPageHero'

export default function StudentsPage() {
  return (
    <>
      <Header />

      <main>
        <InnerPageHero
          title="Students"
          subtitle="Choose what you want to do: access your student portal or submit your information for the school registry."
        />
        <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 uppercase">Student Portal</h2>
                <p className="text-gray-600 mb-6">
                  Existing students can login to view updates and student-related information.
                </p>
                <Link href="/student-portal" className="btn-primary inline-block">
                  Go to Student Portal
                </Link>
              </div>

              <div className="card p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 uppercase">Student Registry</h2>
                <p className="text-gray-600 mb-6">
                  Submit your student information to help us build a complete and accurate school database.
                </p>
                <Link href="/student-information" className="btn-red inline-block">
                  Go to Student Registry
                </Link>
              </div>

              <div className="card p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 uppercase">Student Database</h2>
                <p className="text-gray-600 mb-6">
                  Browse and search the complete student database with filtering by class and section.
                </p>
                <Link href="/students/database" className="btn-primary inline-block">
                  View Database
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
