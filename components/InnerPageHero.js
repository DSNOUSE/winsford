import Image from 'next/image'
import Link from 'next/link'

export default function InnerPageHero({
  title,
  subtitle,
  cta,
  children,
  containerClassName = '',
}) {
  return (
    <section
      className="relative pt-36 pb-20 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/school-gate.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/school-gate.png"
          alt="Winsford Schools"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#002d5f]/45"></div>
      </div>

      <div className={`relative container ${containerClassName}`}>
        {children}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle ? <p className="text-xl text-gray-200 max-w-3xl">{subtitle}</p> : null}
        {cta ? (
          <Link href={cta.href} className="inline-block mt-8 btn-primary">
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  )
}
