import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/home'

const App = () => {
  return (
      <Router>
        <Home/>
      </Router>
  )
}

export default App;
