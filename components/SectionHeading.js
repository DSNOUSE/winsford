export default function SectionHeading({ title, subtitle, className = '', dark = false }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className={`text-3xl font-bold mb-4 ${dark ? 'text-white' : 'text-[#002d5f]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl max-w-3xl mx-auto ${dark ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
