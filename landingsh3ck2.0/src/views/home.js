import React, { useState } from 'react'
import NavBar from '../components/navBar/navBar'
import SideBar from '../components/sideBar/sideBar'
import StyledSideBar from '../components/sideBar/styledSideBar'

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    
    const toggleSideBar = (e) => {
        setIsOpen(!isOpen)
        console.log('this is toggle...')
    } 
    
    return (
        <>
            <StyledSideBar
            isOpen={ isOpen } 
            toggleSideBar={ toggleSideBar }
            />
            {/* <SideBar isOpen={isOpen} toggleSideBar={ toggleSideBar }/> */}
            <NavBar toggleSideBar={ toggleSideBar }/>
        </>
    )
}

export default Home
