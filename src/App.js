import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './templates/Home'
import About from './templates/About'
import Detail from './templates/Detail'
import Error from './templates/Error'
import Other from './templates/Other'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Router  path='/about'>
          <About/>
        </Router>
        {/* <Router path='/detail/:id'>
          <Detail />
        </Router> */}
        <Router path='/other'>
          <Other/>
        </Router>
        <Router path="*">
          <Error />
        </Router>
      </Switch>
    </Router>
  )
}

export default App
