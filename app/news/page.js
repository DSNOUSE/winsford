import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsCard from '../../components/NewsCard'
import InnerPageHero from '../../components/InnerPageHero'
import { newsItems } from '../../data/newsItems'

export const metadata = {
  title: 'News & Events | Winsford Schools',
  description: 'Latest stories, achievements, and announcements from Winsford Schools.',
}

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <InnerPageHero
          title="News & Events"
          subtitle="Stay updated on student achievements, academic milestones, and major school events."
        />
        <section className="section-padding bg-white">
          <div className="container grid lg:grid-cols-2 gap-8">
            {newsItems.map((news) => (
              <NewsCard
                key={news.slug}
                title={news.title}
                excerpt={news.excerpt}
                date={news.date}
                category={news.category}
                href={`/news/${news.slug}`}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
