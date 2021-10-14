import React, { useState } from 'react'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
// import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'
// import StyledNavBar from '../components/navBar/styledNavbar'
// import StyledHeroSection from '../components/heroSection/styledHeroSection'
import VideoSection from '../components/videoSection/videoSection'
import { infoHero, infoVideo } from '../utils/data'
import useMobilDetection from '../utils/mobilDetection'
import useMobilDetect from '../utils/mobilHook'
import NavBarMobil from '../components/navBar/navBarMobil'



const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ login, setLogin ] =useState(false)
    const mobil = useMobilDetect()
    const mobil2 = useMobilDetection()
    
    
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
            {/* <StyledSideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            <StyledNavBar
            login={ login }
            onLogin={ onLogin }
            username={'hola, arnoldo'} 
            toggleSideBar={ toggleSideBar }/>
            <StyledHeroSection/> */}
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
            
        </>
    )
}

export default Home
