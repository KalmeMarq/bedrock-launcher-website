import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Releases from './routes/Releases'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Releases} path='/releases' />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
