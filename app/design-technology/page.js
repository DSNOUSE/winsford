import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function DesignTechnologyPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Design Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Design principles and processes</li>
            <li>Sketching and drawing techniques</li>
            <li>3D modelling basics</li>
            <li>Research and analysis</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Making Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Workshop safety and tools</li>
            <li>Materials and properties</li>
            <li>Basic construction techniques</li>
            <li>Electronics introduction</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Evaluation</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Testing and evaluation</li>
            <li>Product analysis</li>
            <li>User feedback</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Design Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced design techniques</li>
            <li>CAD/CAM introduction</li>
            <li>Design movements and styles</li>
            <li>Sustainability in design</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Making Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced manufacturing</li>
            <li>Material selection and processing</li>
            <li>Mechanical systems</li>
            <li>Circuit construction</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Evaluation</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Performance testing</li>
            <li>Quality control</li>
            <li>Design iteration</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Design Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Professional design practice</li>
            <li>Advanced CAD modelling</li>
            <li>Design for manufacture</li>
            <li>Environmental impact assessment</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Making Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Complex manufacturing</li>
            <li>Smart materials</li>
            <li>Systems and control</li>
            <li>Programming basics</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Evaluation</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Comprehensive evaluation</li>
            <li>Market analysis</li>
            <li>Cost analysis</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Design Technology</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Core technical principles</li>
            <li>Specialist technical principles</li>
            <li>Designing and making principles</li>
            <li>NEA project work</li>
            <li>Mathematical and scientific principles</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Practical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced CAD/CAM</li>
            <li>Industrial manufacturing processes</li>
            <li>Material science</li>
            <li>Systems and control</li>
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
          title="Design & Technology"
          subtitle="Developing creativity and practical skills through design, making and evaluation"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Design & Technology curriculum develops students&apos; creativity and practical skills. 
                  Through designing and making products, students learn about materials, processes, 
                  and the impact of technology on society.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Practical projects and portfolios</li>
                  <li>• Design folders and documentation</li>
                  <li>• Workshop facilities and equipment</li>
                  <li>• CAD/CAM software</li>
                  <li>• Design competitions and exhibitions</li>
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
