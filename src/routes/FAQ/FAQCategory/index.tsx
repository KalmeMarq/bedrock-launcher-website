import { useParams } from 'react-router'
import Accordion from '../../../components/Accordion'
import FAQs from '../../../util/FAQs'
import '../index.scss'
import { ReactComponent as LeftArrow } from '../../../assets/images/icons/left_arrow.svg'
import { Link } from 'react-router-dom'

const FAQCategory = () => {
  const { category } = useParams<{ category: string }>()

  return (
    <div className='faq'>
      <section className='faq-section'>
        <h2>FAQ</h2>
        <p>You have questions, we have answers</p>
      </section>
      <main>
        <div className="container">
          <Link to='./' className='go-back' onClick={() => window.scroll(0, 0)}>
            <LeftArrow />
            Go Back
          </Link>
          {FAQs.filter(faq => faq.tag === category).map(faq => <Accordion title={faq.title} key={faq.id} desc={faq.body} /> )}
        </div>
      </main>
  </div>
  )
}

export default FAQCategory
