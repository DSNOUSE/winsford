import Link from 'next/link'

export default function NewsCard({ title, excerpt, date, category, href }) {
  return (
    <article className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <span className="bg-sky-blue text-white text-xs px-3 py-1 mr-3">
          {category}
        </span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        <Link href={href} className="hover:text-sky-blue transition-colors">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={href} className="text-sky-blue font-medium hover:underline">
        Read More →
      </Link>
    </article>
  )
}
