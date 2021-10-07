import React, { useState } from 'react'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
// import StyledSideBar from '../components/sideBar/styledSideBar'
import HeroSection from '../components/heroSection/heroSection'

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    
    const toggleSideBar = (e) => {
        setIsOpen(!isOpen)
        console.log('this is toggle...')
    } 
    
    return (
        <>
            <SideBar isOpen={isOpen} toggleSideBar={ toggleSideBar }/>
            <NavBar toggleSideBar={ toggleSideBar }/>
            <HeroSection/>
        </>
    )
}

export default Home
