import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function EnglishPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Reading</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Novel study and analysis</li>
            <li>Poetry appreciation</li>
            <li>Comprehension skills</li>
            <li>Media text analysis</li>
            <li>Reading for pleasure</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Writing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Creative writing</li>
            <li>Descriptive writing</li>
            <li>Letter and email writing</li>
            <li>Story structure and planning</li>
            <li>Grammar and punctuation</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Speaking & Listening</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Group discussions</li>
            <li>Presentations</li>
            <li>Drama and role-play</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Reading</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Shakespeare introduction</li>
            <li>Pre-1914 literature</li>
            <li>Non-fiction texts</li>
            <li>Comparative analysis</li>
            <li>Critical reading skills</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Writing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Persuasive writing</li>
            <li>Argumentative essays</li>
            <li>Report writing</li>
            <li>Advanced grammar</li>
            <li>Spelling strategies</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Speaking & Listening</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Debating skills</li>
            <li>Public speaking</li>
            <li>Drama performance</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Reading</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Shakespeare in depth</li>
            <li>Modern drama</li>
            <li>Poetry from different cultures</li>
            <li>Literary heritage</li>
            <li>Textual analysis</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Writing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Creative writing portfolio</li>
            <li>Transactional writing</li>
            <li>Essay structure and development</li>
            <li>Advanced vocabulary</li>
            <li>Sentence variety</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Speaking & Listening</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Individual presentations</li>
            <li>Group performance</li>
            <li>Evaluation skills</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Reading</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>GCSE set texts</li>
            <li>Unseen poetry analysis</li>
            <li>Non-fiction comparison</li>
            <li>Contextual understanding</li>
            <li>Critical evaluation</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Writing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>GCSE writing tasks</li>
            <li>Descriptive and narrative writing</li>
            <li>Transactional writing</li>
            <li>Technical accuracy</li>
            <li>Structural devices</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Speaking & Listening</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Spoken language endorsement</li>
            <li>Individual presentations</li>
            <li>Formal speaking skills</li>
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
          title="English"
          subtitle="Developing literacy, communication skills and literary appreciation through reading, writing and spoken language"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our English curriculum develops students&apos; ability to read, write and communicate effectively. 
                  Through the study of literature, students develop critical thinking and analytical skills 
                  while fostering a love for reading and creative expression.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular reading and writing assessments</li>
                  <li>• Literature study guides and resources</li>
                  <li>• Creative writing workshops</li>
                  <li>• Drama and performance opportunities</li>
                  <li>• Library and reading programs</li>
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
