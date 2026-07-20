import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function PersonalDevelopmentPage() {
  const curriculumItems = [
    {
      title: 'JSS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Personal Wellbeing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Transition to secondary school</li>
            <li>Building friendships</li>
            <li>Managing emotions</li>
            <li>Self-esteem and confidence</li>
            <li>Healthy lifestyle choices</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Social Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Communication skills</li>
            <li>Teamwork and collaboration</li>
            <li>Respect and tolerance</li>
            <li>Anti-bullying strategies</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 2',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Personal Wellbeing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Mental health awareness</li>
            <li>Stress management</li>
            <li>Goal setting and motivation</li>
            <li>Personal values and beliefs</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Social Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Conflict resolution</li>
            <li>Leadership skills</li>
            <li>Digital citizenship</li>
            <li>Relationships and consent</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 3',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Personal Wellbeing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Identity and self-discovery</li>
            <li>Resilience building</li>
            <li>Decision making</li>
            <li>Personal responsibility</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Social Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Community engagement</li>
            <li>Global citizenship</li>
            <li>Financial literacy basics</li>
            <li>Career exploration</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'SS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Personal Wellbeing</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced mental health strategies</li>
            <li>Work-life balance</li>
            <li>Personal development planning</li>
            <li>Emotional intelligence</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Social Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Career planning and guidance</li>
            <li>Interview skills</li>
            <li>Financial management</li>
            <li>Leadership and responsibility</li>
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
          title="Personal Development"
          subtitle="Developing emotional intelligence, social skills and wellbeing for personal and academic success"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Personal Development curriculum supports students&apos; emotional and social growth. 
                  Through the development of key life skills, students become confident, resilient 
                  individuals prepared for the challenges of modern life.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Self-reflection and goal-setting</li>
                  <li>• Personal development portfolios</li>
                  <li>• Mentoring and guidance</li>
                  <li>• Wellbeing workshops</li>
                  <li>• External speakers and programmes</li>
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
