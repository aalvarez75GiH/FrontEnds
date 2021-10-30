import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
import LoginSideBar from '../components/loginSideBar/loginSideBar'
import LogoutSideBar from '../components/logoutSideBar/logoutSideBar'
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
import FooterSection from '../components/footerSection/footerSection'
// import DataSection from '../components/dataSection/dataSection'


const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [ loggedOut, setLoggedOut ] = useState(true)
    const [currentUser, setCurrentUser ] = useState('')
    const [ loginSideBarOpen, setLoginSideBarOpen ] = useState(false)
    const [ logoutSideBarOpen, setLogoutSideBarOpen ] = useState(false)
   
    
    
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
            setLoggedOut(true)
            
            
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
                setLoggedIn(true)
                setLoggedOut(false)
                console.log('Usuaurio encontrado y hace login')    
            } catch (error) {
                console.log(error)
            }
        
    }

    const handlingLogin = (user) => {
        console.log('handling Login...')
        handlingSubmitLoginUser(user)
        setLoginSideBarOpen(!loginSideBarOpen)
    }

    const handlingSubmitLogOutUser = () => {
        localStorage.removeItem('SH3CK_TOKEN')
        setLogoutSideBarOpen(!logoutSideBarOpen)
        setLoggedIn(false)
        setLoggedOut(true)
        
    }
 
    
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
        
    } 
    const toggleLoginSideBar = () => {
        setLoginSideBarOpen(!loginSideBarOpen)
    }
    const toggleLogoutSideBar = () => {
        setLogoutSideBarOpen(!logoutSideBarOpen)
    } 

  
    
    return (
        <>
            {/* {!loggedIn && loginSideBarOpen ? */}
            <LoginSideBar
            loginSideBarOpen={ loginSideBarOpen } 
            toggleLoginSideBar={ toggleLoginSideBar }
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            handlingLogin={handlingLogin}
            />
            {/* : null */}
            {/* } */}

            {/* {!loggedOut && logoutSideBarOpen ? */}
            <LogoutSideBar
            logoutSideBarOpen={logoutSideBarOpen}
            toggleLogoutSideBar={toggleLogoutSideBar}
            loggedIn={loggedIn}
            loggedOut={loggedOut}
            handlingSubmitLogOutUser={handlingSubmitLogOutUser}
            username={currentUser}
           
            />
            {/* : null */}
            {/* } */}
            
            
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            { mobil2.screenWidth <= 1098 || mobil ?  
                <NavBarMobil 
                toggleSideBar={ toggleSideBar }  
                username={currentUser}
                login={ loggedIn }
                // onLogin={ onLogin }
            /> : <NavBar
            toggleLoginSideBar={toggleLoginSideBar}
            toggleLogoutSideBar={toggleLogoutSideBar} 
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
            <FooterSection/>
            {/* <DataSection {...infoData} /> */}
        </>
    )
}

export default Home
