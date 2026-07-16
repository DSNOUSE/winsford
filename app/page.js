'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import NewsCard from '../components/NewsCard'
import { Icon } from '../components/icons'
import QuickLinks from '../components/QuickLinks'
import Link from 'next/link'
import Image from 'next/image'

const heroImages = [
  '/images/School Photos/hero-image.png',
  '/images/hero-image-2.png',
]

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])
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

  const curriculumSubjects = [
    { name: 'English', icon: '/images/icons/eng.png', link: '/english' },
    { name: 'Maths', icon: '/images/icons/maths.png', link: '/mathematics' },
    { name: 'Science', icon: '/images/icons/chemistry.png', link: '/science' },
    { name: 'History', icon: '/images/icons/history.png', link: '/history' },
    { name: 'Geography', icon: '/images/icons/geography.png', link: '/geography' },
    { name: 'Design & Technology', icon: '/images/icons/worker.png', link: '/design-technology' },
    { name: 'Languages', icon: '/images/icons/languages.png', link: '/languages' },
    { name: 'Drama', icon: '/images/icons/drama.png', link: '/drama' },
    { name: 'PE & Sport Sciences', icon: '/images/icons/healthy.png', link: '/pe-sport' },
    { name: 'Music', icon: '/images/icons/music.png', link: '/music' },
    { name: 'Religious', icon: '/images/icons/religious.png', link: '/religious-studies' },
    { name: 'Personal Development', icon: '/images/icons/personal-development.png', link: '/personal-development' },
    { name: 'Art', icon: '/images/icons/arts.png', link: '/art' },
    { name: 'Computing', icon: '/images/icons/computing.png', link: '/computing' },
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
      <QuickLinks />
      
      <main>
        {/* Hero Section with Full Width Landing Image */}
          <section className="relative h-[92vh] md:h-screen">
          {/* Background Images with Crossfade */}
          <div className="absolute inset-0">
            {heroImages.map((src, index) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
                style={{ opacity: currentImage === index ? 1 : 0 }}
              >
                <Image
                  src={src}
                  alt="Winsford Schools Campus"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            ))}
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative h-full flex items-center justify-center min-h-[80vh] border-b-4 border-red">
            <div className="text-white text-center px-4 sm:px-6 lg:px-8">
                
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                  
                  <Link href="/apply" className="btn-red bg-red hover:bg-red/90 text-white text-center">
                    Apply for Admission
                  </Link>
                </div>
            </div>
            <div className="absolute -bottom-3 left-0 right-0 text-white text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none uppercase">
                <span className="block">Knowledge</span>
                <span className="block -mt-2 sm:-mt-3 lg:-mt-4">Understanding •Wisdom</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#002d5f] mb-6">
                  Welcome to Winsford Schools
                </h2>
                <div className="w-20 h-1 bg-red mb-6"></div>
                
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Winsford Schools is a leading educational institution in Ikorodu, Lagos, built on 
                  co-operative values that shape everything we do.
                </p>
                
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Our mission is simple: to provide excellence for every student. We are committed to helping 
                  young people in our community achieve their aspirations and thrive in a supportive, 
                  ambitious environment.
                </p>

                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  At Winsford, our dedicated staff work together to ensure every child receives the guidance 
                  and opportunities they need to succeed. From the moment students join us, we set high 
                  expectations and foster a culture of progress, achievement, and personal growth.
                </p>

                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Central to this is our unwavering commitment to student welfare and safety. We prioritise 
                  the wellbeing and dignity of every student, creating an environment where young people 
                  feel secure, valued, and able to flourish. Our pastoral practices are robust, proactive, 
                  and embedded in daily school life.
                </p>

                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  We invite you to discover more about our community, our values, and how we can help your 
                  child succeed.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl text-[#002d5f] mb-4">
                    <span className="font-bold">Mr Yussuf Wasiu</span>
                    <br />
                    <span className="font-normal">Principal</span>
                  </h3>
                  <div className="relative w-40 h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/images/staff/principal.png"
                      alt="Principal Portrait"
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
              <div className="relative min-h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/images/school-gate.png"
                  alt="Winsford Schools Main Gate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <SectionHeading
              title="Why Choose Winsford?"
              subtitle="What sets us apart as a leading school in Ikorodu"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '/images/icons/success.png', title: '95% WASSCE Pass Rate', description: 'Consistently outstanding results in national examinations' },
                { icon: '/images/icons/teach.png', title: 'Qualified Teachers', description: 'Over 50 experienced and dedicated educators' },
                { icon: '/images/icons/worker.png', title: 'Safe Environment', description: 'Student welfare and safety are our top priorities' },
                { icon: '/images/icons/track-back.png', title: 'Proven Track Record', description: '25+ years of academic excellence and character building' },
                { icon: '/images/icons/computing.png', title: 'Modern Facilities', description: 'Well-equipped labs, library, and learning spaces' },
                { icon: '/images/icons/training.png', title: 'Small Class Sizes', description: 'Personalised attention for every student' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg border-blue-900 transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.3 }}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center text-blue-900">
                    <Image src={item.icon} alt={item.title} width={48} height={48} className={`brightness-0 mix-blend-multiply transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#002d5f] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Programmes */}
        <section className="section-padding bg-white">
          <div className="container">
            <SectionHeading
              title="Our Curriculum"
              subtitle="A comprehensive and balanced curriculum designed to develop well-rounded individuals"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {curriculumSubjects.map((subject, index) => (
                <Link key={index} href={subject.link} className="card p-6 bg-gray-100 border-b-4 border-blue-900 hover:bg-gray-200 transition-colors duration-200">
                  <div className="flex justify-center mb-4">
                    <Image src={subject.icon} alt={subject.name} width={80} height={80} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase text-left">{subject.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Our Facilities */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <SectionHeading
              title="Our Facilities"
              subtitle="Modern learning environments designed to inspire and support student success"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: '/images/School Photos/students-library.png', title: 'Library & Resource Centre', description: 'A well-stocked library for research and independent learning' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.51 PM (2).jpeg', title: 'Science Laboratories', description: 'Fully equipped labs for practical science experiments' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.44 PM.jpeg', title: 'Music & Arts Studios', description: 'Creative spaces for artistic expression and performance' },
                { src: '/images/School Photos/students-running.png', title: 'Sports Facilities', description: 'Running track, fields, and courts for physical education' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.39 PM.jpeg', title: 'Practical Workshops', description: 'Hands-on learning spaces for technical and vocational skills' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.48 PM.jpeg', title: 'Assembly & Events Hall', description: 'A spacious hall for ceremonies, events, and gatherings' },
              ].map((facility, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image src={facility.src} alt={facility.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#002d5f] mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Latest News */}
        <section className="section-padding relative">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/85"></div>
          </div>
          <div className="container relative">
            <SectionHeading
              title="Latest News"
              subtitle="Celebrating achievements and sharing our latest updates"
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

        {/* 7. Upcoming Events */}
        <section className="section-padding bg-white">
          <div className="container">
            <SectionHeading
              title="Upcoming Events"
              subtitle="Mark your calendar for these important dates"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { date: 'September 2026', title: 'New Session Begins', description: 'Welcome back! The new academic session starts for all students.' },
                { date: 'October 2026', title: 'Open Day', description: 'Visit our campus, meet our teachers, and see our facilities first-hand.' },
                { date: 'December 2026', title: 'Annual Prize Giving Day', description: 'Celebrating academic excellence and outstanding achievements.' },
              ].map((event, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm font-semibold text-red mb-2">{event.date}</p>
                  <h3 className="text-lg font-bold text-[#002d5f] mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Gallery */}
        <section className="section-padding bg-[#002d5f] overflow-hidden">
          <div className="container">
            <SectionHeading
              title="School Gallery"
              subtitle="A glimpse into life at Winsford Schools"
              dark
            />
          </div>
          <div className="mt-4 relative overflow-hidden">
            <div className="flex animate-scroll gap-6">
              {[
                { src: '/images/School Photos/students-library.png', alt: 'Students reading in the library' },
                { src: '/images/School Photos/students-running.png', alt: 'Students on the running track' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.39 PM.jpeg', alt: 'Hands-on practical activity' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.44 PM.jpeg', alt: 'Music class' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.48 PM.jpeg', alt: 'Graduation ceremony' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.51 PM (2).jpeg', alt: 'Science laboratory' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.53 PM (2).jpeg', alt: 'Sports achievement' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.50 PM (1).jpeg', alt: 'School assembly' },
              ].concat([
                { src: '/images/School Photos/students-library.png', alt: 'Students reading in the library' },
                { src: '/images/School Photos/students-running.png', alt: 'Students on the running track' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.39 PM.jpeg', alt: 'Hands-on practical activity' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.44 PM.jpeg', alt: 'Music class' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.48 PM.jpeg', alt: 'Graduation ceremony' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.51 PM (2).jpeg', alt: 'Science laboratory' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.53 PM (2).jpeg', alt: 'Sports achievement' },
                { src: '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.50 PM (1).jpeg', alt: 'School assembly' },
              ]).map((photo, index) => (
                <div key={index} className="relative flex-shrink-0 w-[400px] h-[280px] rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Testimonials */}
        <section className="section-padding bg-white">
          <div className="container">
            <SectionHeading
              title="What Parents Say"
              subtitle="Hear from families in the Winsford community"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: 'Winsford has transformed my child\'s confidence and academic performance. The teachers genuinely care.', name: 'Mrs. Adeyemi', role: 'Parent' },
                { quote: 'The discipline and values taught here are second to none. I\'m proud to be a Winsford parent.', name: 'Mr. Okafor', role: 'Parent' },
                { quote: 'My children have thrived at Winsford. The school provides a perfect balance of academics and character development.', name: 'Mrs. Balogun', role: 'Parent' },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <p className="text-gray-700 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-bold text-[#002d5f]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Admissions CTA */}
        <section className="section-padding bg-red">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Admissions Are Now Open</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Secure your child&apos;s place at Winsford Schools for the upcoming academic session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="bg-white text-red px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-200">
                Apply Now
              </Link>
              <Link href="/enquire" className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-red transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
