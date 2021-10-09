import React, { useState } from 'react'
import SideBar from '../components/sideBar/sideBar'
import NavBar from '../components/navBar/navBar'
import HeroSection from '../components/heroSection' 
import InfoSection from '../components/infoSection/infoSection'
import { homeObjOne } from '../components/infoSection/data'

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
        </>
    )
}

export default Home
