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
    const [ loadingUser, setLoadingUser ] = useState(false)
    const [ fullNameError, setFullNameError ] = useState(false)
    const [ emailError, setEmailError ] = useState(false)
    const [ cityError, setCityError ] = useState(false)
    const [ errorData, setErrorData ] = useState(null)

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
        setLoadingUser(true)
        setTimeout(async()=> {
            try {
                const response = await axios.post(url_users, interestedUser)
                console.log(response)
                if (response.status === 201){
                    setLoadingUser(false)
                    console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
                    return response.status
                } 
            }catch(error) {
                console.log(error.response)
                if (error.response.status === 400){
                    setErrorData(error.response.data)
                    setLoadingUser(false)
                    console.log(error.response.data)
                    
                    return error.response.data
                    // array = responseErrors
                    // console.log(array)
                    // const test = array.map((x) => {
                    //     if (x.message === "\"fullName\" is not allowed to be empty"){
                    //         console.log('pasa por fullNameError')
                    //         setFullNameError(true)
                    //     }
                    //     if (x.message === "\"email\" is not allowed to be empty"){
                    //         console.log('pasa por emailError')
                    //         setEmailError(true)
                    //     }
                    //     if (x.message === "\"city\" is not allowed to be empty"){
                    //         console.log('pasa por cityError')
                    //         setCityError(true)
                    //     }
                    //     if (x.message === "\"email\" must be a valid email"){
                    //         console.log('pasa por emailError 2')
                    //         setEmailError(true)
                    //     }
                    // })
                }
                console.error(error.response.data)
                showError(error.response.data)
                    
            }
        },3000)
        
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

    // console.log(fullNameError)
    // console.log(emailError)
    // console.log(cityError)

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
            loadingUser={loadingUser}
            errorData={errorData}
            />
        </>
    )
}

export default Home
