import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import NewsCard from '../components/NewsCard'
import { Icon } from '../components/icons'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const statistics = [
    { label: 'Years of Excellence', value: '25+', icon: 'star' },
    { label: 'Students Enrolled', value: '1000+', icon: 'people' },
    { label: 'WASSCE Pass Rate', value: '95%', icon: 'grade' },
    { label: 'Qualified Teachers', value: '50+', icon: 'school' },
  ]

  const coreValues = [
    {
      title: 'Academic Excellence',
      description: 'Rigorous curriculum with proven results in national examinations',
      image: '/images/academic-excellence-senior.png',
    },
    {
      title: 'Character Development',
      description: 'Building leaders with integrity and moral values',
      image: '/images/character-development.png',
    },
    {
      title: 'Innovation in Learning',
      description: 'Modern teaching methodologies and technology integration',
      image: '/images/senior-innovation.png',
    },
    {
      title: 'Community Spirit',
      description: 'Fostering collaboration, respect, and social responsibility',
      image: '/images/community-spirit.png',
    },
    {
      title: 'Global Readiness',
      description: 'Preparing students for tomorrow\'s challenges and opportunities',
      image: '/images/global-readiness.png',
    },
  ]

  const programs = [
    {
      title: 'Basic Education',
      subtitle: 'Years 1-9',
      description: 'Foundation for excellence with comprehensive Nigerian curriculum',
      features: ['BECE Preparation', 'Holistic Development', 'Modern Facilities'],
      icon: 'school',
    },
    {
      title: 'Senior Secondary',
      subtitle: 'Years 10-12',
      description: 'Advanced preparation for tertiary education and career success',
      features: ['WASSCE Preparation', 'Career Guidance', 'Leadership Programs'],
      icon: 'assignment',
    },
    {
      title: 'Examination Success',
      subtitle: 'BECE, WASSCE, NECO',
      description: 'Specialized preparation programs for national examinations',
      features: ['Mock Exams', 'Expert Teachers', 'Proven Results'],
      icon: 'emoji_events',
    },
  ]

  const newsItems = [
    {
      title: 'WASSCE 2024 Results: 95% Pass Rate',
      excerpt: 'Our students achieve outstanding results in the West African Senior School Certificate Examination...',
      date: 'November 2024',
      category: 'Academics',
    },
    {
      title: 'Student Wins National Science Competition',
      excerpt: 'Congratulations to our student for winning first place in the National Science Competition...',
      date: 'October 2024',
      category: 'Achievements',
    },
    {
      title: 'New Computer Laboratory Commissioned',
      excerpt: 'We are excited to announce the opening of our new state-of-the-art computer laboratory...',
      date: 'September 2024',
      category: 'Facilities',
    },
    {
      title: 'Annual Sports Day Success',
      excerpt: 'Another successful sports day with amazing performances from all our students...',
      date: 'August 2024',
      category: 'Events',
    },
  ]

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section with Full Width Landing Image */}
        <section className="relative h-[92vh] md:h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt="Winsford Schools Campus"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative h-full flex items-center justify-center min-h-[80vh]">
            <div className="text-white text-center px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/logo-outline.png"
                    alt="Winsford Schools Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight uppercase">
                  Winsford Schools
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                  <Link href="/visit" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900 text-center">
                    Visit Our School
                  </Link>
                  <Link href="/apply" className="btn-red bg-red hover:bg-red/90 text-white text-center">
                    Apply for Admission
                  </Link>
                </div>
            </div>
            <div className="absolute -bottom-3 left-0 right-0 text-white text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none uppercase">
                <span className="block">Aiming Higher</span>
                <span className="block -mt-2 sm:-mt-3 lg:-mt-4">Together</span>
              </h2>
            </div>
          </div>
        </section>

        
        {/* Core Values Section */}
        <section className="section-padding relative">
          <div className="absolute inset-0">
            <Image
              src="/images/about-bg.png"
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-blue-900/90"></div>
          </div>
          <div className="relative container">
            <SectionHeading
              title="The Winsford Way"
              subtitle="Our core values guide everything we do, ensuring every student receives the best education possible"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="card text-center lg:min-h-[200px] overflow-hidden">
                  <div className="relative h-44 -mx-6 -mt-6 mb-6">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#002d5f] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
              <div className="flex items-center justify-center lg:min-h-[200px]">
                <Image
                  src="/images/logo-outline.png"
                  alt="Winsford Schools Logo"
                  width={200}
                  height={200}
                  className="opacity-30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Educational Programs Section */}
        <section className="section-padding bg-blue-950">
          <div className="container">
            <SectionHeading
              title="Our Educational Pathways"
              subtitle="Comprehensive programs designed to nurture academic excellence and personal growth"
              dark
            />
            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/card-image.png"
                      alt="Background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/60 to-sky-blue/30"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-full translate-y-0 group-hover:-translate-y-1/4 opacity-30 group-hover:opacity-20 transition-all duration-500 flex items-center justify-center">
                    <Image
                      src="/images/logo-outline.png"
                      alt="Winsford Schools Logo"
                      fill
                      className="object-contain scale-200"
                    />
                  </div>
                  <div className="relative z-10 p-6">
                    <div className="text-center mb-4 mt-16">
                      <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                      <p className="text-white font-medium">{program.subtitle}</p>
                    </div>
                                                          </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Achievements Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <SectionHeading
              title="Recent Winsford Stories"
              subtitle="Celebrating achievements and sharing our latest news"
            />
            <div className="grid lg:grid-cols-2 gap-8">
              {newsItems.map((news, index) => (
                <NewsCard
                  key={index}
                  title={news.title}
                  excerpt={news.excerpt}
                  date={news.date}
                  category={news.category}
                  href={`/news/${index}`}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/news" className="btn-primary">
                View All News
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section-padding bg-gradient-to-r from-sky-blue to-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Winsford Family</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience education that transforms lives. Schedule a visit to see our facilities 
              and meet our dedicated team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/visit" className="bg-white text-sky-blue px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-200">
                Schedule a Visit
              </Link>
              <Link href="/enquire" className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-sky-blue transition-colors duration-200">
                Request Information
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
