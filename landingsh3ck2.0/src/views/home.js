import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
import LoginSideBar from '../components/loginSideBar/loginSideBar'
// import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'
// import StyledNavBar from '../components/navBar/styledNavbar'
// import StyledHeroSection from '../components/heroSection/styledHeroSection'
import VideoSection from '../components/videoSection/videoSection'
import HiwSection from '../components/hiwSection/hiwSection'
import { infoHero, infoVideo, infoHIW, infoContact  } from '../utils/data'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'
import ContactSection from '../components/contactSection/contactSection'
// import DataSection from '../components/dataSection/dataSection'


const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [currentUser, setCurrentUser ] = useState('')
    const [ sideBarOpen, setSideBarOpen ] = useState(false)
    
    
    
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
                setSideBarOpen(false)
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
            }
        
    }

    const handlingSubmitLogOutUser = () => {
        localStorage.removeItem('SH3CK_TOKEN')
        setLoggedIn(false)
        setSideBarOpen(false)
    }

    
    const toggleSideBar = () => {
        console.log('this is toggle...')
        setIsOpen(!isOpen)
        
    } 
    const toggleLoginSideBar = () => {
        console.log('this is toggle on LoginSideBar...')
        setSideBarOpen(!sideBarOpen)
        
    } 
    // const onLogin = (e) => {
    //     e.preventDefault()
    //     setLoggedIn(loggedIn)
    // }

    
    return (
        <>
            <LoginSideBar
            handlingSubmitLoginUser={handlingSubmitLoginUser} 
            sideBarOpen={ sideBarOpen } 
            toggleLoginSideBar={ toggleLoginSideBar }
            loggedIn={loggedIn}
            handlingSubmitLogOutUser={handlingSubmitLogOutUser}
            
            />
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            { mobil2.screenWidth <= 1098 || mobil ?  
                <NavBarMobil 
                toggleSideBar={ toggleSideBar }  
                username={currentUser}
                login={ loggedIn }
                // onLogin={ onLogin }
            /> : <NavBar
            toggleLoginSideBar={toggleLoginSideBar}
            // toggleSideBar={ toggleSideBar }  
            username={currentUser}
            login={ loggedIn }
            // onLogin={ onLogin }
        />
            }
            <HeroSection {...infoHero} />
            <VideoSection {...infoVideo}/>
            <HiwSection {...infoHIW}/>
            <ContactSection 
            {...infoContact} 
            loggedIn={loggedIn}
            handlingSubmitLoginUser={ handlingSubmitLoginUser}
            />
            {/* <DataSection {...infoData} /> */}
        </>
    )
}

export default Home
