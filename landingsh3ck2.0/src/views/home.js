import React, { useState } from 'react'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
// import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const [ login, setLogin ] =useState(false)
    
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
        console.log('this is toggle...')
    } 
    const onLogin = () => {
        setLogin(!login)
        console.log(login)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggleSideBar={ toggleSideBar }/>
            <NavBar 
            toggleSideBar={ toggleSideBar } 
            username={'hola, arnoldo'} 
            login={ login }
            onLogin={ onLogin }
            />
            <HeroSection/>
        </>
    )
}

export default Home
