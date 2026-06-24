import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function MathematicsPage() {
  const curriculumItems = [
    {
      title: 'Year 7',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Number and Algebra</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Place value, ordering and rounding</li>
            <li>Integers, powers and roots</li>
            <li>Prime factors, HCF and LCM</li>
            <li>Sequences, functions and graphs</li>
            <li>Basic algebraic manipulation</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Geometry and Measures</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Angles and lines</li>
            <li>Properties of shapes</li>
            <li>Perimeter and area</li>
            <li>Transformations</li>
            <li>Constructions</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Statistics and Probability</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Data collection and presentation</li>
            <li>Averages and range</li>
            <li>Basic probability</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 8',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Number and Algebra</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Fractions, decimals and percentages</li>
            <li>Ratio and proportion</li>
            <li>Linear equations and inequalities</li>
            <li>Graphs of linear functions</li>
            <li>Algebraic expressions and formulae</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Geometry and Measures</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Circles and compound shapes</li>
            <li>Volume and surface area</li>
            <li>Pythagoras&apos; theorem</li>
            <li>Similarity and congruence</li>
            <li>3D shapes and their properties</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Statistics and Probability</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Statistical diagrams</li>
            <li>Scatter graphs and correlation</li>
            <li>Probability calculations</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 9',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Number and Algebra</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Standard form and indices</li>
            <li>Quadratic equations</li>
            <li>Simultaneous equations</li>
            <li>Graphs of quadratic functions</li>
            <li>Algebraic proof and reasoning</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Geometry and Measures</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Trigonometry basics</li>
            <li>Circle theorems</li>
            <li>Vectors</li>
            <li>Transformations and enlargements</li>
            <li>Loci and construction</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Statistics and Probability</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced statistical measures</li>
            <li>Probability trees</li>
            <li>Conditional probability</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Year 10',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Number and Algebra</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced algebraic manipulation</li>
            <li>Functions and graphs</li>
            <li>Exponential and logarithmic functions</li>
            <li>Calculus basics (differentiation)</li>
            <li>Advanced equations and inequalities</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Geometry and Measures</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Advanced trigonometry</li>
            <li>3D trigonometry</li>
            <li>Advanced circle theorems</li>
            <li>Coordinate geometry</li>
            <li>Advanced vectors</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Statistics and Probability</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Advanced probability</li>
            <li>Statistical hypothesis testing</li>
            <li>Data analysis and interpretation</li>
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
          title="Mathematics"
          subtitle="Developing mathematical reasoning and problem-solving skills through a comprehensive curriculum"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Mathematics curriculum is designed to build strong foundational skills while developing 
                  advanced mathematical thinking. Students progress through increasingly complex concepts, 
                  preparing them for examinations and further studies.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular assessments to track progress</li>
                  <li>• Homework assignments and projects</li>
                  <li>• Past paper practice for examination preparation</li>
                  <li>• Additional support sessions available</li>
                  <li>• Online resources and interactive learning tools</li>
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
