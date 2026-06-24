import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function ComputingPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Computer Science</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Computational thinking</li>
            <li>Algorithms and flowcharts</li>
            <li>Basic programming (Python/Scratch)</li>
            <li>Hardware and software</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Digital Literacy</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>E-safety and cyber security</li>
            <li>Effective internet use</li>
            <li>Digital communication</li>
            <li>Office applications</li>
          </ul>
          
          <h4 className="font-semibold mb-3">IT Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Word processing</li>
            <li>Spreadsheets</li>
            <li>Presentation software</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Computer Science</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced programming</li>
            <li>Data representation</li>
            <li>Computer networks</li>
            <li>Binary and logic gates</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Digital Literacy</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced e-safety</li>
            <li>Social media awareness</li>
            <li>Digital footprint</li>
            <li>Online ethics</li>
          </ul>
          
          <h4 className="font-semibold mb-3">IT Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced office applications</li>
            <li>Data analysis</li>
            <li>Digital publishing</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Computer Science</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Object-oriented programming</li>
            <li>Web development basics</li>
            <li>Database fundamentals</li>
            <li>Systems architecture</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Digital Literacy</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Cyber security advanced</li>
            <li>Digital rights and responsibilities</li>
            <li>Online safety for life</li>
          </ul>
          
          <h4 className="font-semibold mb-3">IT Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Project management</li>
            <li>Multimedia production</li>
            <li>Advanced data handling</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Computer Science</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Computational thinking</li>
            <li>Programming fundamentals</li>
            <li>Data representation</li>
            <li>Computer systems</li>
            <li>Networks and security</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Practical Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Programming project (NEA)</li>
            <li>Algorithm design</li>
            <li>Problem-solving techniques</li>
            <li>Software development</li>
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
          title="Computing"
          subtitle="Developing digital literacy, programming skills and understanding of computer systems"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Computing curriculum develops students' digital literacy and programming skills. 
                  Through the study of computer science, digital safety and practical IT skills, students 
                  become confident users of technology and prepare for the digital world.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Programming assessments and projects</li>
                  <li>• Theory examinations</li>
                  <li>• Computer labs and software</li>
                  <li>• Online learning platforms</li>
                  <li>• Coding competitions and clubs</li>
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
