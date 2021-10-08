import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './views/home'
import './App.css'

const App = () => {
    return (
        <Router>
           <Home/> 
        </Router>
        
    )
}

export default App
