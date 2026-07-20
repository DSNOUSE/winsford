import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function SciencePage() {
  const curriculumItems = [
    {
      title: 'JSS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Biology</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Cells and organisation</li>
            <li>Human body systems</li>
            <li>Reproduction</li>
            <li>Environment and feeding relationships</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Chemistry</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Particles and their behaviour</li>
            <li>Atoms, elements and compounds</li>
            <li>Chemical reactions</li>
            <li>Acids and alkalis</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Physics</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Energy stores and transfers</li>
            <li>Forces and motion</li>
            <li>Electricity</li>
            <li>Waves</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 2',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Biology</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Photosynthesis and respiration</li>
            <li>Genetics and inheritance</li>
            <li>Health and disease</li>
            <li>Ecosystems</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Chemistry</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Periodic table</li>
            <li>Chemical bonding</li>
            <li>Reactivity series</li>
            <li>Separating techniques</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Physics</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Light and sound</li>
            <li>Heat transfer</li>
            <li>Pressure</li>
            <li>Space physics</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 3',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Biology</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Homeostasis</li>
            <li>Plant biology</li>
            <li>Microorganisms</li>
            <li>Biotechnology</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Chemistry</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Quantitative chemistry</li>
            <li>Chemical analysis</li>
            <li>Organic chemistry basics</li>
            <li>Chemical calculations</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Physics</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Electricity and circuits</li>
            <li>Magnetism and electromagnetism</li>
            <li>Energy resources</li>
            <li>Particle model of matter</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'SS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Biology</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Cell biology and transport</li>
            <li>Infection and response</li>
            <li>Bioenergetics</li>
            <li>Homeostasis and response</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Chemistry</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Atomic structure and bonding</li>
            <li>Energy changes</li>
            <li>Rate and extent of chemical change</li>
            <li>Organic chemistry</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Physics</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Forces and motion</li>
            <li>Waves in matter</li>
            <li>Electricity</li>
            <li>Magnetism and electromagnetism</li>
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
          title="Science"
          subtitle="Exploring the natural world through biology, chemistry and physics with practical investigation and scientific inquiry"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Science curriculum combines biology, chemistry and physics to develop scientific 
                  understanding and practical skills. Students learn through investigation, experimentation 
                  and theoretical study, preparing them for further scientific study.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Practical investigations and experiments</li>
                  <li>• Written examinations and tests</li>
                  <li>• Laboratory work and safety training</li>
                  <li>• Science fair projects</li>
                  <li>• Online simulations and resources</li>
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
