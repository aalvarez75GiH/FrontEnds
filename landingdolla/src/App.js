import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/home'
import SignIn from './views/sigin'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" exact component={SignIn}/>
        </Switch>
      </Router>
  )
}

export default App;
