import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

import Contact from './components/Contact'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/About" component={About} />

      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
