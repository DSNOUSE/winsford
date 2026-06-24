import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function ArtPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Drawing and Painting</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Basic drawing techniques</li>
            <li>Shading and tone</li>
            <li>Colour theory basics</li>
            <li>Painting skills</li>
            <li>Observational drawing</li>
          </ul>
          
          <h4 className="font-semibold mb-3">3D Work</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Clay modelling</li>
            <li>Basic sculpture</li>
            <li>Recycled art</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Art History</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Introduction to famous artists</li>
            <li>Art movements</li>
            <li>Cultural art</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Drawing and Painting</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced drawing techniques</li>
            <li>Composition and layout</li>
            <li>Colour mixing and application</li>
            <li>Different painting media</li>
          </ul>
          
          <h4 className="font-semibold mb-3">3D Work</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced sculpture techniques</li>
            <li>Wire and mixed media</li>
            <li>Textile art</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Art History</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Specific artists study</li>
            <li>Art analysis</li>
            <li>Contemporary art</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Drawing and Painting</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Personal style development</li>
            <li>Experimental techniques</li>
            <li>Portfolio development</li>
            <li>Large-scale work</li>
          </ul>
          
          <h4 className="font-semibold mb-3">3D Work</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Specialist 3D techniques</li>
            <li>Installation art</li>
            <li>Collaborative projects</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Art History</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Thematic art history</li>
            <li>Critical analysis</li>
            <li>Cultural context</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Art</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Portfolio development</li>
            <li>Personal investigation</li>
            <li>Externally set assignment</li>
            <li>Artist research and analysis</li>
            <li>Final outcome creation</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced techniques across media</li>
            <li>Critical and contextual studies</li>
            <li>Sketchbook development</li>
            <li>Final piece creation</li>
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
          title="Art"
          subtitle="Developing creativity, artistic skills and visual literacy through practical and theoretical study"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Art curriculum develops students&apos; creativity and artistic skills. Through practical 
                  work and art history study, students learn to express themselves visually and develop 
                  their understanding of art from different cultures and periods.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Portfolio assessment</li>
                  <li>• Sketchbook evaluation</li>
                  <li>• Art studio and facilities</li>
                  <li>• Gallery visits and exhibitions</li>
                  <li>• Art competitions and displays</li>
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
