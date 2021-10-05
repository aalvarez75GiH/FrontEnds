import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navBar'
import StyleNavBar from './components/styledNavbar'
import SideBar from './components/sideBar/sideBar'
import './App.css'

const App = () => {
    return (
        <Router>
            <SideBar/>
            <StyleNavBar/>
            {/* <NavBar/> */}
        </Router>
        
    )
}

export default App
