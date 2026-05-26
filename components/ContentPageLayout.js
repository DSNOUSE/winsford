import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import InnerPageHero from './InnerPageHero'

export default function ContentPageLayout({ title, subtitle, sections = [], cta }) {
  return (
    <>
      <Header />
      <main>
        <InnerPageHero title={title} subtitle={subtitle} cta={cta} />
        <section className="section-padding bg-white">
          <div className="container space-y-12">
            {sections.map((section) => (
              <article
                key={section.id || section.heading}
                id={section.id}
                className={section.id ? 'scroll-mt-32' : ''}
              >
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{section.heading}</h2>
                <p className="text-lg text-gray-600">{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
