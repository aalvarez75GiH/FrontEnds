import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaRegUser } from 'react-icons/fa'

const NavBar = ({ toggleSideBar, username, login, onLogin }) => {
    if (login){
        return(
        <>
            <nav className="nav" >
                <div className="navBarContainer">
                    <LinkR to="/" className="navLogo">sh3ck</LinkR>
                    <div 
                    onClick={ toggleSideBar }
                    className="mobileIcon">
                        <FaBars/>
                    </div>
                    <ul className="navMenu"> 
                        <li className="navItem">
                            <LinkS to="about" className="navLinks" >Notifícame</LinkS>
                        </li>
                        <li className="navItem">
                            <LinkS to="discover" className="navLinks" >Regí</LinkS>
                        </li>
                        <li className="navItem">
                        <LinkS to="services" className="navLinks" >Chequéa</LinkS>
                        </li>
                        {/* <li className="navItem">
                        <LinkS to="signup" className="navLinks" >Sign up</LinkS>
                        </li> */}
                    </ul>
                    <div
                    onClick={ onLogin }
                    className="navBtn">
                        <LinkR 
                        to="/signin" 
                        className="navBtnLink">{username}
                        </LinkR>
                    </div>
                </div>
            </nav>
        </>
        )
        

    }else{
        return (
            <>
                <nav className="nav" >
                    <div className="navBarContainer">
                        <LinkR to="/" className="navLogo">sh3ck</LinkR>
                        <div 
                        onClick={ toggleSideBar }
                        className="mobileIcon">
                            <FaBars/>
                        </div>
                        <ul className="navMenu"> 
                            <li className="navItem">
                                <LinkS to="about" className="navLinks" >Notifícame</LinkS>
                            </li>
                            <li className="navItem">
                                <LinkS to="discover" className="navLinks" >Regístrate</LinkS>
                            </li>
                            <li className="navItem">
                                <LinkS to="services" className="navLinks" >Chequéa</LinkS>
                            </li>
                            {/* <li className="navItem">
                            <LinkS to="signup" className="navLinks" >Sign up</LinkS>
                            </li> */}
                        </ul>
                        <nav 
                        onClick={ onLogin }
                        className="navBtn">
                            <LinkR to="/signin" className="navBtnLink">
                                <FaRegUser className="userIcon"/>
                                Inicio de Sesión
                            </LinkR>
                        </nav>
                    </div>
                </nav>
            </>
        )
    }
        
}

export default NavBar
