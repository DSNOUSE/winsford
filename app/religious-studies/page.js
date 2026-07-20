import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Accordion from '../../components/Accordion'
import InnerPageHero from '../../components/InnerPageHero'

export default function ReligiousStudiesPage() {
  const curriculumItems = [
    {
      title: 'JSS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Introduction to Religion</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>What is religion?</li>
            <li>Beliefs and practices</li>
            <li>Places of worship</li>
            <li>Religious leaders</li>
            <li>Festivals and celebrations</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Christianity</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Life of Jesus</li>
            <li>Christian beliefs</li>
            <li>The Bible</li>
            <li>Christian practices</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 2',
      content: (
        <div>
          <h4 className="font-semibold mb-3">World Religions</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Islam - beliefs and practices</li>
            <li>Judaism - beliefs and practices</li>
            <li>Hinduism - beliefs and practices</li>
            <li>Sikhism - beliefs and practices</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Philosophical Questions</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Does God exist?</li>
            <li>Why do we suffer?</li>
            <li>What happens when we die?</li>
            <li>Moral decision-making</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'JSS 3',
      content: (
        <div>
          <h4 className="font-semibold mb-3">Ethical Issues</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Medical ethics</li>
            <li>Environmental ethics</li>
            <li>Human rights</li>
            <li>Peace and conflict</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Religion in the Modern World</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Religion and science</li>
            <li>Religion and media</li>
            <li>Interfaith dialogue</li>
            <li>Religious extremism</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'SS 1',
      content: (
        <div>
          <h4 className="font-semibold mb-3">GCSE Religious Studies</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Christian beliefs and practices</li>
            <li>Islamic beliefs and practices</li>
            <li>Religion, peace and conflict</li>
            <li>Religion, crime and punishment</li>
            <li>Religion and life issues</li>
          </ul>
          
          <h4 className="font-semibold mb-3">Skills</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Knowledge and understanding</li>
            <li>Analysis and evaluation</li>
            <li>Critical thinking</li>
            <li>Extended writing</li>
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
          title="Religious Studies"
          subtitle="Exploring religious beliefs, practices and ethical issues to develop understanding and respect"
        />
        
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Curriculum Overview</h2>
                <p className="text-gray-600 mb-6">
                  Our Religious Studies curriculum develops students&apos; understanding of different religious 
                  beliefs and practices. Through the study of world religions and ethical issues, students 
                  develop respect, tolerance and critical thinking skills.
                </p>
              </div>

              <Accordion items={curriculumItems} defaultOpen={0} />

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Written assessments and essays</li>
                  <li>• Class debates and discussions</li>
                  <li>• Visits to places of worship</li>
                  <li>• Guest speakers from different faiths</li>
                  <li>• Religious texts and resources</li>
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
