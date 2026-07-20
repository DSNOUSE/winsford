import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function MusicPage() {
  const curriculumItems = [
    {
      title: 'JSS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Performing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Singing techniques</li>
            <li>Instrumental skills (keyboard, guitar, percussion)</li>
            <li>Ensemble playing</li>
            <li>Basic music reading</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Composing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Basic composition techniques</li>
            <li>Melody writing</li>
            <li>Rhythm and pulse</li>
            <li>Using music technology</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Listening</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Musical elements</li>
            <li>Different musical styles</li>
            <li>World music introduction</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 2',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Performing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced instrumental techniques</li>
            <li>Solo and ensemble performance</li>
            <li>Music notation reading</li>
            <li>Performance practice</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Composing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Structuring compositions</li>
            <li>Harmony and accompaniment</li>
            <li>Music technology applications</li>
            <li>Genre-specific composition</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Listening</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Musical context and history</li>
            <li>Analysis of set works</li>
            <li>Comparative listening</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 3',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Performing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced performance skills</li>
            <li>Interpretation and expression</li>
            <li>Ensemble leadership</li>
            <li>Conducting basics</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Composing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced composition techniques</li>
            <li>Music theory application</li>
            <li>Professional music software</li>
            <li>Recording and production</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Listening</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Detailed musical analysis</li>
            <li>Historical and cultural context</li>
            <li>Critical evaluation</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'SS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Music</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Performance (solo and ensemble)</li>
            <li>Composition (to a brief and free composition)</li>
            <li>Listening and appraising</li>
            <li>Study of set works</li>
            <li>Music theory and harmony</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced performance techniques</li>
            <li>Composition and arrangement</li>
            <li>Musical analysis and evaluation</li>
            <li>Music technology skills</li>
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
          title="Music"
          subtitle="Developing musical creativity, performance skills and appreciation through practical and theoretical study"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Music curriculum develops students&apos; musical abilities through performing, composing 
                  and listening. Students learn to read music, play instruments, compose their own pieces 
                  and appreciate music from different cultures and periods.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Performance assessments and recordings</li>
                  <li>• Composition portfolios</li>
                  <li>• Music technology suite</li>
                  <li>• Practice rooms and instruments</li>
                  <li>• Concerts and performance opportunities</li>
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
