import Image from 'next/image'

const heroImages = [
  '/images/fixed-hero1.png',
  '/images/fixed-hero2.png',
  '/images/fixed-hero3.png',
]

export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative h-[60vh] max-h-[450px] min-h-[400px] flex items-center justify-center">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{ 
              opacity: index === 0 ? 1 : 0,
              animation: `crossfade 6s ease-in-out infinite`,
              animationDelay: `${index * 2}s`
            }}
          >
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        ))}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <div className="w-20 h-1 bg-red mx-auto mb-6"></div>
        )}
        {subtitle && (
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}