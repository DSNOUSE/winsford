import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import InnerPageHero from '../../../components/InnerPageHero'
import { newsItems, getNewsItem } from '../../../data/newsItems'

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }) {
  const item = getNewsItem(params.slug)
  if (!item) {
    return { title: 'News | Winsford Schools' }
  }

  return {
    title: `${item.title} | Winsford Schools`,
    description: item.content,
  }
}

export default function NewsArticlePage({ params }) {
  const item = getNewsItem(params.slug)
  if (!item) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <InnerPageHero title={item.title} containerClassName="max-w-4xl">
          <div className="flex items-center mb-4">
            <span className="bg-sky-blue text-white text-xs px-3 py-1 mr-3">
              {item.category}
            </span>
            <span className="text-sm text-gray-500">{item.date}</span>
          </div>
        </InnerPageHero>
        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{item.content}</p>
            <Link href="/news" className="text-sky-blue font-medium hover:underline">
              Back to News
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
