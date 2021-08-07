import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Releases from './routes/Releases'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FAQRoute from './routes/FAQ'

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Home} path='/bedrock-launcher-website' />
          <Route component={Releases} path='/releases' />
          <Route component={FAQRoute} path='/faq' />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
