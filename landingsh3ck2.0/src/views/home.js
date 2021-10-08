import React, { useState } from 'react'
// import NavBar from '../components/navBar/navBar'
// import StyledNavBar from '../components/navBar/styledNavbar'
import SideBar from '../components/sideBar/sideBar'
import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'
import StyledNavBar from '../components/navBar/styledNavbar'
import StyledHeroSection from '../components/heroSection/styledHeroSection'

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ login, setLogin ] =useState(false)
    
    const toggleSideBar = () => {
        console.log('this is toggle...')
        setIsOpen(!isOpen)
        
    } 
    const onLogin = () => {
        setLogin(!login)
        console.log(login)
    }
    return (
        <>
            <StyledSideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/>
            <StyledNavBar toggleSideBar={ toggleSideBar }/>
            <StyledHeroSection/>
            {/* <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar }/> */}
            {/* <NavBar 
            toggleSideBar={ toggleSideBar } 
            username={'hola, arnoldo'} 
            login={ login }
            onLogin={ onLogin }
            /> */}
            {/* <HeroSection/> */}
        </>
    )
}

export default Home
