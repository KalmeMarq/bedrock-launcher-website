import FAQs from "../../util/FAQs"
import Accordion from "../../components/Accordion"
import './index.scss'
import { Link } from "react-router-dom"
import banner0 from '../../assets/images/banners/1.13_technically_updated_java.jpg'
import banner1 from '../../assets/images/banners/1.09_combat_update_java.jpg'
import banner2 from '../../assets/images/banners/other_early_console_era.jpg'
import banner3 from '../../assets/images/banners/1.08_cats_and_pandas.jpg'

const FAQRoute = () => {
  const handleScrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <div className='faq'>
      <section className='faq-section'>
        <h2>FAQ</h2>
        <p>You have questions, we have answers</p>
      </section>
      <main>
        <div className="container">
          <div className='cat-selection'>
            <Link to='/faq/data' className='cat-link' onClick={handleScrollTop}>
              <img src={banner0} alt="" />
              <h4>Your Data</h4>
              <p>Issues with your Minecraft worlds, settings, etc?</p>
            </Link>
            <Link to='/faq/accounts' className='cat-link' onClick={handleScrollTop}>
              <img src={banner1} alt="" />
              <h4>Minecraft Accounts</h4>
              <p>Questions about managing Minecraft accounts?</p>
            </Link>
            <Link to='/faq/versions' className='cat-link' onClick={handleScrollTop}>
              <img src={banner2} alt="" />
              <h4>Versions</h4>
              <p>Need help with Minecraft versions?</p>
            </Link>
            <Link to='/faq/misc' className='cat-link' onClick={handleScrollTop}>
              <img src={banner3} alt="" />
              <h4>Miscellaneous</h4>
              <p>Can't find what you're looking for, try looking here.</p>
            </Link>
          </div>
          <hr />
          {FAQs.map(faq => <Accordion title={faq.title} key={faq.id} desc={faq.body} /> )}
        </div>
      </main>
    </div>
  )
}

export default FAQRoute
