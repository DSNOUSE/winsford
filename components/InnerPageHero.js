import Link from 'next/link'
import RotatingHeaderImage from './RotatingHeaderImage'

export default function InnerPageHero({
  title,
  subtitle,
  cta,
  children,
  containerClassName = '',
  heroImages,
}) {
  return (
    <>
      <section className="relative h-[400px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <RotatingHeaderImage images={heroImages} />
          <div className="absolute inset-0 bg-[#002d5f]/45"></div>
        </div>
      </section>

      <section className="bg-white py-12 border-b-4 border-red">
        <div className={`container ${containerClassName}`}>
          {children}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#002d5f]">{title}</h1>
          {subtitle ? <p className="text-xl text-gray-700 max-w-3xl">{subtitle}</p> : null}
          {cta ? (
            <Link href={cta.href} className="inline-block mt-8 btn-primary">
              {cta.label}
            </Link>
          ) : null}
        </div>
      </section>
    </>
  )
}
