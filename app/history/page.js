import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function HistoryPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Medieval England</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>The Norman Conquest</li>
            <li>Medieval society and life</li>
            <li>Castles and warfare</li>
            <li>Religion and the Church</li>
            <li>The Black Death</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Historical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Source analysis</li>
            <li>Cause and consequence</li>
            <li>Chronological understanding</li>
            <li>Historical enquiry</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Early Modern Period</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Tudor England</li>
            <li>The English Civil War</li>
            <li>Industrial Revolution</li>
            <li>British Empire</li>
            <li>Transatlantic slave trade</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Historical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Evidence evaluation</li>
            <li>Interpretation and significance</li>
            <li>Historical argument</li>
            <li>Research skills</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
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
      title: 'Year 10',
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
