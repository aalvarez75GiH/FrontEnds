import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './components/header'
import MyProfile from './components/myProfile'
import Login from './components/login'
import './App.css'


const MyApp = () => {

const [ googleUser, setGoogleUser ] = useState('')   

useEffect(() => {
    const fetchingCurrentUser = async() => {
        try {
           const  response = await axios.get("http://localhost:5000/api/current_user") 
           console.log(response) 
        } catch (error) {
            console.log(error)
        }
    }
    fetchingCurrentUser()
},[])

const handlingGUser = async() => {
    console.log(' i am handlingGUser')
    window.open("http://localhost:5000/auth/google", "_self")
}

  return (
    <>
    <Header/>
    <Login handlingGUser={handlingGUser}/>
    <MyProfile/>
    </>
  )
}

export default MyApp