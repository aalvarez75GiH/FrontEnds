import React, { useState } from 'react'
import SideBar from '../components/sideBar/sideBar'
import NavBar from '../components/navBar/navBar'
import HeroSection from '../components/heroSection' 
import InfoSection from '../components/infoSection/infoSection'
import ServicesSection from '../components/services/servicesSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/infoSection/data'

const Home = () => {
    
    const [ isOpen, setIsOpen ] = useState(false) 
    
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    } 

    return (
        <>
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar } />
            <NavBar toggleSideBar={ toggleSideBar }/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <ServicesSection {...homeObjThree}/>
            <InfoSection  {...homeObjFour}/>
        </>
    )
}

export default Home
