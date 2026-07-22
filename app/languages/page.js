import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function LanguagesPage() {
  const curriculumItems = [
    {
      title: 'JSS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Language Basics</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Alphabet and pronunciation</li>
            <li>Basic greetings and introductions</li>
            <li>Numbers and dates</li>
            <li>Family and personal information</li>
            <li>School and daily routine</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Grammar</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Present tense verbs</li>
            <li>Articles and gender</li>
            <li>Basic sentence structure</li>
            <li>Question formation</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 2',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Language Development</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Food and drink</li>
            <li>Free time and hobbies</li>
            <li>Travel and transport</li>
            <li>Weather and seasons</li>
            <li>Health and lifestyle</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Grammar</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Past and future tenses</li>
            <li>Adjective agreements</li>
            <li>Prepositions</li>
            <li>Pronouns and object pronouns</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 3',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Advanced Topics</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Environment and global issues</li>
            <li>Media and technology</li>
            <li>Cultural topics</li>
            <li>Future plans and aspirations</li>
            <li>Social issues</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Grammar</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Complex tenses</li>
            <li>Subjunctive mood</li>
            <li>Conditional structures</li>
            <li>Advanced sentence patterns</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'SS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Language</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Theme 1: Identity and culture</li>
            <li>Theme 2: Local, national, international areas</li>
            <li>Theme 3: Current and future study</li>
            <li>Theme 4: Future aspirations</li>
            <li>Literary texts and translations</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Listening comprehension</li>
            <li>Reading comprehension</li>
            <li>Speaking - role play and conversation</li>
            <li>Writing - translation and composition</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <>
      <Header />
      
      <main>
        <InnerPageHero
          title="Languages"
          subtitle="Developing linguistic competence and cultural understanding through modern foreign languages"
          heroImages={[
            '/images/School Photos/the-library.jpg',
          ]}
        
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Languages curriculum develops students&apos; ability to communicate effectively in 
                  foreign languages while fostering cultural understanding. Through the study of 
                  vocabulary, grammar and culture, students become confident global citizens.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular vocabulary and grammar tests</li>
                  <li>• Speaking and listening assessments</li>
                  <li>• Reading and writing tasks</li>
                  <li>• Language labs and audio resources</li>
                  <li>• Cultural exchanges and trips</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
