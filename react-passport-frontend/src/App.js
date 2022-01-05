import React, { useState, useEffect } from 'react'

import NavBar from "./components/navBar"
import Home from "./pages/home"
import Post from "./pages/post"
import Login from "./pages/login"
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


const App = () => {
  const [ user, setUser ] = useState(null)
  
  useEffect(()=> {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      })
      .then((response) => {
        if (response.status === 200) return response.json()
        throw new Error('Authentication has failed...')
      })
      .then( resObject => {
        setUser(resObject.user)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    getUser()
  },[])

  console.log(user)

  return (
    <BrowserRouter>
    <div>
      <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/post/:id" element={user ? <Post/> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
  )
}

export default App;
