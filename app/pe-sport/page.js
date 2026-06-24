import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function PESportPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Physical Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Fundamental movement skills</li>
            <li>Team games (football, basketball, netball)</li>
            <li>Individual activities (athletics, gymnastics)</li>
            <li>Swimming and water safety</li>
            <li>Health-related fitness</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Theory</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Basic anatomy and physiology</li>
            <li>Importance of exercise</li>
            <li>Healthy lifestyle</li>
            <li>Safety in sport</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Physical Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced techniques in team sports</li>
            <li>Strategic play and tactics</li>
            <li>Individual sports development</li>
            <li>Outdoor and adventurous activities</li>
            <li>Leadership and officiating</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Theory</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Training principles</li>
            <li>Diet and nutrition</li>
            <li>Mental aspects of performance</li>
            <li>Injury prevention</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Physical Skills</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Specialised sport-specific skills</li>
            <li>Advanced tactical understanding</li>
            <li>Competition preparation</li>
            <li>Coaching and leadership</li>
            <li>Personal fitness programmes</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Theory</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sports psychology</li>
            <li>Biomechanics basics</li>
            <li>Sociology of sport</li>
            <li>Performance analysis</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE PE</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Applied anatomy and physiology</li>
            <li>Movement analysis</li>
            <li>Physical training</li>
            <li>Sports psychology</li>
            <li>Socio-cultural influences</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Practical Performance</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Team sports assessment</li>
            <li>Individual sports assessment</li>
            <li>Performance analysis</li>
            <li>Evaluation and improvement</li>
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
          title="PE & Sport Sciences"
          subtitle="Developing physical literacy, sporting skills and understanding of sports science"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our PE & Sport Sciences curriculum develops students' physical literacy and sporting 
                  abilities. Through practical activities and theoretical study, students learn about 
                  the importance of physical activity, health and sports science.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Practical performance assessments</li>
                  <li>• Fitness testing and monitoring</li>
                  <li>• Sports facilities and equipment</li>
                  <li>• Inter-school competitions</li>
                  <li>• Sports leadership opportunities</li>
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
