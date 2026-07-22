import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function HistoryPage() {
  const curriculumItems = [
    {
      title: 'JSS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Ancient Civilisations</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Early human societies and migrations</li>
            <li>Ancient Egyptian civilisation</li>
            <li>Nok culture and early West African societies</li>
            <li>Trade and trans-Saharan routes</li>
            <li>Introduction to historical enquiry</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Historical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Source analysis and evaluation</li>
            <li>Chronological understanding</li>
            <li>Cause and consequence</li>
            <li>Historical enquiry and research</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 2',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Pre-Colonial & Colonial Nigeria</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Early Nigerian kingdoms and empires (Benin, Oyo, Ife, Kanem-Bornu)</li>
            <li>Trade and migration patterns</li>
            <li>European contact and trade</li>
            <li>Transatlantic slave trade</li>
            <li>British colonial administration</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Historical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Evidence evaluation and interpretation</li>
            <li>Historical significance</li>
            <li>Constructing historical arguments</li>
            <li>Research and presentation skills</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 3',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Modern World History</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>World War I</li>
            <li>Inter-war period</li>
            <li>World War II</li>
            <li>Holocaust</li>
            <li>Cold War</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Historical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Source criticism</li>
            <li>Historical interpretations</li>
            <li>Causal analysis</li>
            <li>Extended writing</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'SS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE History</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Medicine through time</li>
            <li>Elizabethan England</li>
            <li>Superpower relations</li>
            <li>Germany 1890-1945</li>
            <li>Historical environment study</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Historical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Source analysis and evaluation</li>
            <li>Interpretation analysis</li>
            <li>Historical knowledge and understanding</li>
            <li>Exam technique</li>
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
          title="History"
          subtitle="Understanding the past to make sense of the present through the study of significant events and periods"
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
                  Our History curriculum develops students&apos; understanding of the past and its impact on 
                  the present. Through the study of different periods and events, students develop critical 
                  thinking, analysis skills and historical literacy.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Source-based assessments</li>
                  <li>• Extended writing tasks</li>
                  <li>• Historical investigations</li>
                  <li>• Museum visits and field trips</li>
                  <li>• Historical documentaries and archives</li>
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
