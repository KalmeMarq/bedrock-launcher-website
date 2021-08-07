import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Releases from './routes/Releases'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import FAQRoute from './routes/FAQ'
import FAQCategory from './routes/FAQ/FAQCategory'

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/releases'>
            <Releases />
          </Route>
          <Route path='/releases/:category'>
            <FAQCategory />
          </Route>
          <Route exact path='/faq'>
            <FAQRoute />
          </Route>
          <Route path='/faq/:category'>
            <FAQCategory />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
