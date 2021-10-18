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


const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ login, setLogin ] = useState(false)
    const [ error, setError ] = useState(null) 
    const url_users = "http://localhost:5000/api/interestedUsers"
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    



    const handlingSubmitInterestedUser = async(fullName, email, city) => {
        try {
            const response = await axios.post(url_users, {
                fullName, 
                email,
                city
            })
            if (response.status === 201){
                console.log('Gracias por enviarnos tus datos, estaremos en contacto...')
            }
            // console.log(response.data)
            // setInfoSent()
            }catch(error) {
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
            />
        </>
    )
}

export default Home
