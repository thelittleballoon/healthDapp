import {} from "./app/stylesheets/app.css"
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import MedicalRegister from './modules/MedicalRegister'
import Prescription from './modules/Prescription'


// render(<App/>, document.getElementById('app'))
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {}
    <Route path="/medicalregister" component={MedicalRegister}/>
    <Route path="/prescription" component={Prescription}/>
  </Router>
), document.getElementById('app'))