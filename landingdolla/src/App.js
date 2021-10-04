import React from 'react'
import './App.css'
import NavBar from './components/navBar/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <NavBar/>
      </Router>
  )
}

export default App;
