import React, { useState, useEffect } from 'react'
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
import ContactSection from '../components/contactSection/contactSection'
// import DataSection from '../components/dataSection/dataSection'


const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [currentUser, setCurrentUser ] = useState('')
    
    
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    const url_userLogin = "http://localhost:5000/api/users/login"
    
    useEffect(() => {
        const getToken = async() => {
            const token = localStorage.getItem('SH3CK_TOKEN')
            if (token){
                const response = await axios.get('http://localhost:5000/api/users/me', {
                    headers:{
                        // 'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}` 
                    } 
                })
                console.log(response.data)
                setCurrentUser(response.data)
                return setLoggedIn(true)
            }
            setLoggedIn(false)
        }   
        getToken()

    },[])

    const handlingSubmitLoginUser = async(user) => {
            try {
                const { data } = await axios.post(url_userLogin, user)
                console.log(data)
                localStorage.setItem('SH3CK_TOKEN', data.token)
                // ******************************************
                const response = await axios.get('http://localhost:5000/api/users/me', {
                    headers:{
                        // 'Content-Type': 'application/json',
                        Authorization: `Bearer ${data.token}` 
                    } 
                })
                console.log(response.data)
                setCurrentUser(response.data)
                // ********************************************
                setLoggedIn(true) 
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
            }
        
    }

  
    
    const toggleSideBar = () => {
        console.log('this is toggle...')
        setIsOpen(!isOpen)
        
    } 
    const onLogin = (e) => {
        e.preventDefault()
        setLoggedIn(loggedIn)
    }

    
    return (
        <>
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            { mobil2.screenWidth <= 1098 || mobil ?  
                <NavBarMobil 
                toggleSideBar={ toggleSideBar }  
                username={currentUser}
                login={ loggedIn }
                onLogin={ onLogin }
            /> : <NavBar 
            toggleSideBar={ toggleSideBar }  
            username={currentUser}
            login={ loggedIn }
            onLogin={ onLogin }
        />
            }
            <HeroSection {...infoHero} />
            <VideoSection {...infoVideo}/>
            <HiwSection {...infoHiW}/>
            <ContactSection 
            {...infoData} 
            loggedIn={loggedIn}
            handlingSubmitLoginUser={ handlingSubmitLoginUser}
            />
            {/* <DataSection {...infoData} /> */}
        </>
    )
}

export default Home
