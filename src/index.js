import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home1 from './views/home1'
import Home from './views/home'
import Portfolio from './views/portfolio'
import Contact from './views/contact'
import Propos from './views/propos'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home1} exact path="/home1" />
        <Route component={Home} exact path="/" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Propos} exact path="/propos" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
