import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function DramaPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Drama Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Basic drama techniques</li>
            <li>Mime and movement</li>
            <li>Voice and speech</li>
            <li>Improvisation basics</li>
            <li>Group work and collaboration</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Performance</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Character development</li>
            <li>Simple script work</li>
            <li>Devising performances</li>
            <li>Audience awareness</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Drama Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced techniques</li>
            <li>Physical theatre</li>
            <li>Stage combat basics</li>
            <li>Directing skills</li>
            <li>Script analysis</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Performance</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scene study</li>
            <li>Monologue work</li>
            <li>Ensemble performance</li>
            <li>Technical theatre basics</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Drama Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced improvisation</li>
            <li>Theatre styles and genres</li>
            <li>Devising and adaptation</li>
            <li>Directing and producing</li>
            <li>Critical analysis</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Performance</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full production work</li>
            <li>Contemporary theatre</li>
            <li>Classical theatre basics</li>
            <li>Technical design</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Drama</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Devising drama</li>
            <li>Performance from text</li>
            <li>Theatre makers in practice</li>
            <li>Live theatre evaluation</li>
            <li>Performance skills development</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Practical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced character work</li>
            <li>Vocal and physical techniques</li>
            <li>Design skills (lighting, sound, costume)</li>
            <li>Directing and stage management</li>
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
          title="Drama"
          subtitle="Developing creativity, confidence and communication skills through performance and theatrical study"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Drama curriculum develops students&apos; creativity, confidence and communication skills. 
                  Through practical performance and theoretical study, students learn about theatrical 
                  techniques, performance skills and the art of storytelling.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Practical performance assessments</li>
                  <li>• Written evaluations and portfolio</li>
                  <li>• School productions and performances</li>
                  <li>• Theatre visits and workshops</li>
                  <li>• Drama studio and performance space</li>
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
