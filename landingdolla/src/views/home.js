import React, { useState } from 'react'
import SideBar from '../components/sideBar/sideBar'
import NavBar from '../components/navBar/navBar'

const Home = () => {
    
    const [ isOpen, setIsOpen ] = useState(false) 
    
    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    } 

    return (
        <>
            <SideBar isOpen={ isOpen } toggleSideBar={ toggleSideBar } />
            <NavBar toggleSideBar={ toggleSideBar }/>
        </>
    )
}

export default Home
