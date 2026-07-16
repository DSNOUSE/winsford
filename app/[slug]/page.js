import { notFound } from 'next/navigation'
import ContentPageLayout from '../../components/ContentPageLayout'

const pageContent = {
  about: {
    title: 'About Winsford Schools',
    subtitle: 'A tradition of excellence in Nigerian education and character formation.',
    cta: { href: '/enquire', label: 'Speak with Admissions' },
    sectionsLayout: '2x2',
    heroImages: [
      '/images/School Photos/students-library.png',
      '/images/School Photos/students-running.png',
    ],
    sections: [
      {
        id: 'welcome',
        heading: 'Welcome from the Director',
        body: 'Thank you for considering Winsford Schools. Our team is committed to helping every learner achieve strong academic outcomes while growing in confidence, discipline, and service.',
      },
      {
        id: 'history',
        heading: 'Our History',
        body: 'Since 1999, Winsford Schools has served families in Ikorodu with a consistent focus on quality instruction, student wellbeing, and successful preparation for key examinations.',
      },
      {
        id: 'vision',
        heading: 'Vision & Mission',
        body: 'Our vision is to raise globally aware, values-driven graduates. Our mission is to provide a rigorous and supportive learning environment that nurtures intellectual, social, and moral growth.',
      },
      {
        id: 'team',
        heading: 'Leadership Team',
        body: 'Our leadership team works closely with teachers, parents, and students to maintain high standards, strengthen school culture, and continuously improve the learning experience.',
      },
    ],
  },
  academics: {
    title: 'Academics',
    subtitle: 'Structured pathways from foundational learning to senior secondary success.',
    cta: { href: '/apply', label: 'Start an Application' },
    sections: [
      {
        id: 'curriculum',
        heading: 'Curriculum Overview',
        body: 'We deliver a well-rounded Nigerian curriculum that combines core subjects, practical skills, and extracurricular development to build complete learners.',
      },
      {
        id: 'basic',
        heading: 'Basic Education',
        body: 'Our basic education program emphasizes strong literacy, numeracy, and study habits while helping students develop curiosity, responsibility, and teamwork.',
      },
      {
        id: 'senior',
        heading: 'Senior Secondary',
        body: 'At the senior level, students receive focused instruction, mentorship, and progress tracking to prepare confidently for tertiary pathways and career choices.',
      },
      {
        id: 'exams',
        heading: 'Examination Preparation',
        body: 'Dedicated BECE, WASSCE, and NECO support includes revision schedules, mock assessments, and data-informed interventions for steady improvement.',
      },
      {
        id: 'calendar',
        heading: 'Academic Calendar',
        body: 'Our calendar provides clear term timelines, assessment windows, and event dates to help students and parents plan effectively throughout the year.',
      },
    ],
  },
  admissions: {
    title: 'Admissions',
    subtitle: 'A transparent and supportive process for joining the Winsford community.',
    cta: { href: '/enquire', label: 'Request Admission Guidance' },
    sections: [
      {
        id: 'why',
        heading: 'Why Choose Winsford',
        body: 'Families choose Winsford for academic consistency, experienced teachers, a safe campus culture, and a clear track record in external examinations.',
      },
      {
        id: 'process',
        heading: 'Admission Process',
        body: 'The process includes enquiry, campus interaction, placement review, and formal offer. Our admissions team guides families at each stage.',
      },
      {
        id: 'fees',
        heading: 'Fees & Payments',
        body: 'Our fee structure is clearly communicated with defined payment timelines and channels. Financial guidance is available through the admissions office.',
      },
      {
        id: 'scholarships',
        heading: 'Scholarships',
        body: 'Merit and need-aware support options are periodically available. Qualification criteria and application timelines are communicated each session.',
      },
      {
        id: 'requirements',
        heading: 'Entry Requirements',
        body: 'Applicants provide prior records and complete age-appropriate placement checks to help us ensure the right learning fit and support level.',
      },
      {
        id: 'tours',
        heading: 'School Tours',
        body: 'Prospective families can schedule tours to view classrooms and facilities, ask questions, and understand student life before applying.',
      },
    ],
  },
  'school-life': {
    title: 'School Life',
    subtitle: 'Learning beyond the classroom through clubs, sports, and leadership opportunities.',
    cta: { href: '/visit', label: 'Plan a Campus Visit' },
    sections: [
      {
        id: 'students',
        heading: 'Student Experience',
        body: 'Students participate in a vibrant school environment with structured routines, enrichment activities, and mentoring that supports personal growth.',
      },
      {
        id: 'teachers',
        heading: 'Teachers and Mentors',
        body: 'Our teachers and mentors provide consistent academic guidance, classroom support, and character coaching to help every learner thrive.',
      },
      {
        heading: 'Sports and Wellness',
        body: 'Our sports and wellness programs encourage discipline, resilience, and healthy habits while promoting teamwork and school spirit.',
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'We are available to help with enquiries about admissions, programs, and school operations.',
    cta: { href: '/enquire', label: 'Send an Enquiry' },
    sections: [
      {
        heading: 'Visit Our Campus',
        body: 'Winsford Schools is located at 8/9 Awopeju Close, Igbogbo, Ikorodu, Lagos, Nigeria.',
      },
      {
        heading: 'Phone and Email',
        body: 'Call 0803 517 2002, 0803 402 7586, or 0703 579 7152, or email info@winsfordschools.com.ng for direct assistance from our school office.',
      },
      {
        heading: 'Office Hours',
        body: 'Administrative support is available during school working hours on weekdays, with updates shared for holidays and special schedules.',
      },
    ],
  },
  enquire: {
    title: 'Enquire',
    subtitle: 'Share your interest and our admissions team will respond with next steps.',
    cta: { href: '/apply', label: 'Proceed to Application' },
    sections: [
      {
        heading: 'How Enquiries Work',
        body: 'Submit your details and preferred class level. Our team will provide eligibility guidance, required documents, and available timelines.',
      },
      {
        heading: 'What to Include',
        body: 'Please include student age, current class, and intended entry term so we can provide accurate and timely support.',
      },
    ],
  },
  visit: {
    title: 'Visit Our School',
    subtitle: 'Experience our campus, meet our team, and learn how we support every learner.',
    cta: { href: '/enquire', label: 'Book a Visit' },
    sections: [
      {
        heading: 'Tour Experience',
        body: 'Campus visits include classroom observations, facilities walkthroughs, and discussion with staff to answer academic and admissions questions.',
      },
      {
        heading: 'Booking Information',
        body: 'Visits are arranged by appointment to ensure adequate support and a smooth experience for prospective families.',
      },
    ],
  },
  apply: {
    title: 'Apply for Admission',
    subtitle: 'Begin your application and join the Winsford learning community.',
    cta: { href: '/contact', label: 'Need Application Help?' },
    sections: [
      {
        heading: 'Application Steps',
        body: 'Complete the application form, provide student records, and attend required assessments or interviews based on the class level.',
      },
      {
        heading: 'After Submission',
        body: 'Our admissions unit reviews each application and shares status updates, placement outcomes, and enrollment guidance.',
      },
    ],
  },
  'parent-portal': {
    title: 'Parent Portal',
    subtitle: 'A dedicated touchpoint for communication, updates, and student progress.',
    sections: [
      {
        heading: 'Portal Access',
        body: 'Parents receive access instructions from the school office. Contact support if you need account recovery or onboarding help.',
      },
      {
        heading: 'Portal Features',
        body: 'The portal supports school communications, selected academic updates, and key notices for parents and guardians.',
      },
    ],
  },
  calendar: {
    title: 'School Calendar',
    subtitle: 'Term dates, events, and important milestones for students and families.',
    sections: [
      {
        heading: 'Academic Sessions',
        body: 'Calendar updates include opening and closing dates, mid-term breaks, exam periods, and school event schedules.',
      },
      {
        heading: 'Staying Updated',
        body: 'Families are encouraged to review calendar notices regularly for the latest schedule adjustments and announcements.',
      },
    ],
  },
  policies: {
    title: 'School Policies',
    subtitle: 'Guidelines that support a safe, respectful, and high-performing school environment.',
    sections: [
      {
        heading: 'Academic and Conduct Standards',
        body: 'Our policies define expectations for learning, behavior, attendance, and integrity to support student success and accountability.',
      },
      {
        heading: 'Safeguarding and Safety',
        body: 'We maintain safeguarding and operational standards that prioritize student wellbeing and responsible school-community engagement.',
      },
    ],
  },
  careers: {
    title: 'Careers',
    subtitle: 'Join our mission to deliver quality education and shape future leaders.',
    sections: [
      {
        heading: 'Current Opportunities',
        body: 'Vacancies are announced by the school as roles become available across teaching, administration, and support functions.',
      },
      {
        heading: 'How to Apply',
        body: 'Prospective candidates should submit relevant credentials and role-specific information through the school contact channels.',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Quick answers to common questions from parents and prospective students.',
    sections: [
      {
        heading: 'Admissions',
        body: 'Admission timelines, requirements, and class placement details are available through the admissions office and enquiry channels.',
      },
      {
        heading: 'Academics and Exams',
        body: 'Students follow structured programs aligned with BECE, WASSCE, and NECO standards, supported by continuous assessment and revision.',
      },
      {
        heading: 'Fees and Communication',
        body: 'Fee guidance and communication channels are shared directly with families through official school touchpoints.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How Winsford Schools handles personal information responsibly and securely.',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'We collect information needed for admissions, school administration, and communication with students, parents, and guardians.',
      },
      {
        heading: 'How Information Is Used',
        body: 'Data is used to provide educational services, maintain records, and support essential school operations and communication.',
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    subtitle: 'Guidelines for using school information and digital resources.',
    sections: [
      {
        heading: 'Use of Content',
        body: 'School materials and information are provided for lawful, educational, and informational purposes.',
      },
      {
        heading: 'General Provisions',
        body: 'Terms may be updated periodically. Continued use of school resources implies acceptance of current terms.',
      },
    ],
  },
  sitemap: {
    title: 'Sitemap',
    subtitle: 'Explore all main sections of the Winsford Schools website in one place.',
    sections: [
      {
        heading: 'Main Pages',
        body: 'Home, About, Academics, Admissions, School Life, News, Contact, Enquire, Visit, Apply, Parent Portal, Calendar, Policies, Careers, FAQ, Privacy, and Terms.',
      },
      {
        heading: 'Need Help Navigating?',
        body: 'If you need help finding a specific page or resource, please reach out through the Contact or Enquire pages.',
      },
    ],
  },
  legal: {
    title: 'Legal Information',
    subtitle: 'Privacy, terms of use, and other legal information for Winsford Schools.',
    sections: [
      {
        id: 'privacy',
        heading: 'Privacy Policy',
        body: 'We collect information needed for admissions, school administration, and communication with students, parents, and guardians. Data is used to provide educational services, maintain records, and support essential school operations and communication.',
      },
      {
        id: 'terms',
        heading: 'Terms of Use',
        body: 'School materials and information are provided for lawful, educational, and informational purposes. Terms may be updated periodically. Continued use of school resources implies acceptance of current terms.',
      },
      {
        id: 'sitemap',
        heading: 'Sitemap',
        body: 'Home, About, Academics, Admissions, School Life, News, Contact, Enquire, Visit, Apply, Parent Portal, Calendar, Policies, Careers, FAQ.',
      },
    ],
  },
}

// Routes that have dedicated page files and should not be generated here
const dedicatedRoutes = ['enquire', 'visit', 'apply']

export function generateStaticParams() {
  return Object.keys(pageContent)
    .filter((slug) => !dedicatedRoutes.includes(slug))
    .map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const page = pageContent[params.slug]
  if (!page) {
    return {
      title: 'Page Not Found | Winsford Schools',
    }
  }

  return {
    title: `${page.title} | Winsford Schools`,
    description: page.subtitle,
  }
}

export default function DynamicContentPage({ params }) {
  const page = pageContent[params.slug]
  if (!page) {
    notFound()
  }

  return (
    <ContentPageLayout
      title={page.title}
      subtitle={page.subtitle}
      sections={page.sections}
      cta={page.cta}
      sectionsLayout={page.sectionsLayout}
      heroImages={page.heroImages}
    />
  )
}
