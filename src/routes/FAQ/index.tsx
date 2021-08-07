import FAQs from "../../util/FAQs"
import FAQDetails from "../../components/FAQDetails"
import './index.scss'

const FAQRoute = () => {
  return (
    <div className='faq'>
      <section className='faq-section'>
        <h2>FAQ</h2>
        <p>You have questions, we have answers</p>
      </section>
      <main>
        <div className="container">
          {FAQs.map(faq => <FAQDetails title={faq.title} key={faq.id} desc={faq.body} /> )}
        </div>
      </main>
    </div>
  )
}

export default FAQRoute
