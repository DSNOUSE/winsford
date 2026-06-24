import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import InnerPageHero from './InnerPageHero'

export default function ContentPageLayout({
  title,
  subtitle,
  sections = [],
  cta,
  sectionsLayout = 'stack',
}) {
  const isTwoByTwoGrid = sectionsLayout === '2x2'

  return (
    <>
      <Header />
      <main>
        <InnerPageHero title={title} subtitle={subtitle} cta={cta} />
        <section className="section-padding bg-white">
          <div className={`container ${isTwoByTwoGrid ? 'grid md:grid-cols-2 gap-12' : 'space-y-12'}`}>
            {sections.map((section) => (
              <article
                key={section.id || section.heading}
                id={section.id}
                className={section.id ? 'scroll-mt-32' : undefined}
              >
                <h2 className="text-3xl font-semibold mb-4 text-[#002d5f]">
                  {section.heading}
                </h2>
                <p className={`text-lg ${isTwoByTwoGrid ? 'text-[#1f4e79]' : 'text-gray-600'}`}>
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
