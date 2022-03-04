import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './views/home'
import { useSelector } from 'react-redux'

// import HomeTest from './views/homeTest'
// import HomeTest2 from './views/homeTest2'
// import HomeTest3 from './views/homeTest3'

// import './App.css'
import './sh3ck.css'
// import './main.css'

const App = () => {
    // const state = useSelector((state) => state.account )
    // console.log(state)
    return (
    //    <div className="App">

    //     </div> 
        <Router>
           <Home/> 
        </Router>
        
    )
}

export default App
