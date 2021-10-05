import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const NavBar = () => {
    return (
        <>
            <nav className="nav" >
                <div className="navBarContainer">
                    <LinkR to="/" className="navLogo">sh3ck</LinkR>
                    <div className="mobileIcon">
                        <FaBars/>
                    </div>
                    <ul className="navMenu"> 
                        <li className="navItem">
                            <LinkS to="about" className="navLinks" >¿Quieres saber más?</LinkS>
                        </li>
                        <li className="navItem">
                            <LinkS to="discover" className="navLinks" >¿Como funciona?</LinkS>
                        </li>
                        <li className="navItem">
                        <LinkS to="services" className="navLinks" >¿Quiéres ser parte?</LinkS>
                        </li>
                        {/* <li className="navItem">
                        <LinkS to="signup" className="navLinks" >Sign up</LinkS>
                        </li> */}
                    </ul>
                    <nav className="navBtn">
                        <LinkR to="/signin" className="navBtnLink">Inicio de Sesión</LinkR>
                    </nav>
                </div>
            </nav>
        </>
        
        
      
    )
}

export default NavBar
