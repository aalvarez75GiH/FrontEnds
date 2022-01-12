import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'


import './App.css'
import Home from './components/home' 
import Header from './components/header'
import Profile from './components/profile'
import { fetchUserAction } from './actions/myActions'


const App = (props) => {

useEffect(()=> {
  props.fetchUser()
},[])

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route  path="/" element={<Home/>}></Route>
          <Route  path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(fetchUserAction())
    }
  }
}
export default connect(null, mapDispatchToProps)(App)
