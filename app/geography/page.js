import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function GeographyPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Physical Geography</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Map skills and fieldwork</li>
            <li>Rivers and coasts</li>
            <li>Weather and climate</li>
            <li>Ecosystems</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Human Geography</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Population and settlement</li>
            <li>Urbanisation</li>
            <li>Economic activity</li>
            <li>Development issues</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Physical Geography</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Tectonic processes</li>
            <li>Weathering and erosion</li>
            <li>Climate change</li>
            <li>Water cycle</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Human Geography</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Globalisation</li>
            <li>Trade and development</li>
            <li>Migration</li>
            <li>Energy resources</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Physical Geography</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Glacial landscapes</li>
            <li>Coastal management</li>
            <li>Ecosystems and biodiversity</li>
            <li>Extreme weather</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Human Geography</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Urban challenges</li>
            <li>Resource management</li>
            <li>Development gap</li>
            <li>Geographical skills</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Geography</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Living with the physical environment</li>
            <li>Challenges in the human environment</li>
            <li>Geographical applications</li>
            <li>Fieldwork investigations</li>
            <li>UK geographical issues</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Geographical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cartographic skills</li>
            <li>Graphical and numerical skills</li>
            <li>Geographical fieldwork</li>
            <li>Statistical analysis</li>
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
          title="Geography"
          subtitle="Exploring the relationship between people and their environments through physical and human geography"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Geography curriculum develops students' understanding of the world around them. 
                  Through the study of physical and human geography, students learn about the complex 
                  relationships between people and their environments.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fieldwork investigations</li>
                  <li>• Map and atlas work</li>
                  <li>• GIS and digital mapping</li>
                  <li>• Case study analysis</li>
                  <li>• Environmental projects</li>
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
