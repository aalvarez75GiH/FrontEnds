import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
// import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'
// import StyledNavBar from '../components/navBar/styledNavbar'
// import StyledHeroSection from '../components/heroSection/styledHeroSection'
import VideoSection from '../components/videoSection/videoSection'
import HiwSection from '../components/hiwSection/hiwSection'
import { infoHero, infoVideo, infoData } from '../utils/data'
import { infoHiW  } from '../components/hiwSection/data'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'
import DataSection from '../components/dataSection/dataSection'
let array = []


const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ login, setLogin ] = useState(false)
    const [ error, setError ] = useState(null)
    
    
    const [ fullNameError, setFullNameError ] = useState(false)
    const [ emailError, setEmailError ] = useState(false)
    const [ cityError, setCityError ] = useState(false)

    const url_users = "http://localhost:5000/api/interestedUsers"
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    
    const toggleFullNameError = () => {
        setFullNameError(false)
    } 
    const toggleEmailError = () => {
        setEmailError(false)
    } 
    const toggleCityError = () => {
        setCityError(false)
    } 


    const handlingSubmitInterestedUser = async(interestedUser) => {
        try {
            const response = await axios.post(url_users, interestedUser)
            if (response.status === 201){
                console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                return response.status
                // setRegisteredUser(true)
            }
            
            }catch(error) {
                if (error.response.status === 400){
                    const responseErrors = error.response.data
                    console.log(responseErrors)
                    array = responseErrors
                    console.log(array)
                    const test = array.map((x) => {
                        if (x.message === "\"fullName\" is not allowed to be empty"){
                            setFullNameError(true)
                        }
                        if (x.message === "\"email\" is not allowed to be empty"){
                            setEmailError(true)
                            
                        }
                        if (x.message === "\"city\" is not allowed to be empty"){
                            setCityError(true)
                            
                        }
                        if (x.message === "\"email\" must be a valid email"){
                            setEmailError(true)
                            
                        }
                    })
                }
                console.error(error.response.data)
                showError(error.response.data)
                
            }
    }



    const showError = (message) => {
        setError(message)
        console.log(error)
    }

    const toggleSideBar = () => {
        console.log('this is toggle...')
        setIsOpen(!isOpen)
        
    } 
    const onLogin = (e) => {
        e.preventDefault()
        setLogin(!login)
    }

    console.log(fullNameError)
    console.log(emailError)
    console.log(cityError)

    return (
  
        <>
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            { mobil2.screenWidth <= 1098 || mobil ?  
                <NavBarMobil 
                toggleSideBar={ toggleSideBar }  
                username={'hola, arnoldo'}
                login={ login }
                onLogin={ onLogin }
            /> : <NavBar 
            toggleSideBar={ toggleSideBar }  
            username={'hola, arnoldo'}
            login={ login }
            onLogin={ onLogin }
        />
            }
            <HeroSection {...infoHero} />
            <VideoSection {...infoVideo}/>
            <HiwSection {...infoHiW}/>
            <DataSection 
            {...infoData} 
            showError={showError}
            handlingSubmitInterestedUser={handlingSubmitInterestedUser}
            fullNameError={fullNameError}
            emailError={emailError}
            cityError={cityError}
            toggleFullNameError={toggleFullNameError}
            toggleEmailError={toggleEmailError}
            toggleCityError={toggleCityError}
            />
        </>
    )
}

export default Home
