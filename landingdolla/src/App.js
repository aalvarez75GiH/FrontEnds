import React from 'react'
import './App.css'
import NavBar from './components/navBar/index'
import SideBar from './components/sideBar/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
      <Router>
        <SideBar/>
        <NavBar/>
      </Router>
  )
}

export default App;
