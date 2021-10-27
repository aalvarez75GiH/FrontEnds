import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaRegUser } from 'react-icons/fa'

const NavBar = ({ 
    toggleSideBar, 
    username, 
    login, 
    toggleLoginSideBar,
    toggleLogoutSideBar
    

}) => {
    
    
    const [scrollNav, setScrollNav ] = useState(false)

    const changeNavStyle = () => {
        if (window.scrollY >= 80 ){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    
    useEffect(()=> {
        window.addEventListener('scroll', changeNavStyle)
    },[])

      
    if (login){
        return(
        <>
            <nav 
            style={{ backgroundColor: `${ scrollNav ? '#010606' : 'transparent'}`}}
            className="nav">           
                <div className="navBarContainer">
                    <LinkR to="/" className="navLogo">sh3ck</LinkR>
                    <ul className="navMenu"> 
                        <li className="navItem">
                            <LinkS
                            style={{
                                color: `${scrollNav ? '#ffffff' : 'transparent'}`
                            }} 
                            to="about" 
                            className="navLinks" >Notifícame</LinkS>
                        </li>
                        <li className="navItem">
                            <LinkS
                            style={{
                                color: `${scrollNav ? '#ffffff' : 'transparent'}`
                            }} 
                            to="discover" 
                            className="navLinks" >Regístrate</LinkS>
                        </li>
                        <li className="navItem">
                        <LinkS
                        style={{
                            color: `${scrollNav ? '#ffffff' : 'transparent'}`
                        }} 
                        to="services" 
                        className="navLinks" >Chequéa</LinkS>
                        </li>
                    </ul>
                    <nav
                    onClick={toggleLogoutSideBar}
                    className="navBtn">
                        <LinkR 
                        to="/signin" 
                        className="navBtnLink">{username}
                        </LinkR>
                    </nav>
                </div>
            </nav>
        </>
        )
        

    }else{
        return (
            <>
                <nav 
                style={{ backgroundColor: `${ scrollNav ? '#010606' : 'transparent'}`}}
                className="nav">
                    <div className="navBarContainer">
                        <LinkR to="/" className="navLogo">sh3ck</LinkR>
                        <ul className="navMenu"> 
                            <li className="navItem">
                                <LinkS 
                                style={{
                                    color: `${scrollNav ? '#ffffff' : 'transparent'}`
                                }}
                                to="about" 
                                className="navLinks" >Notifícame</LinkS>
                            </li>
                            <li className="navItem">
                                <LinkS 
                                style={{
                                    color: `${scrollNav ? '#ffffff' : 'transparent'}`
                                }}
                                to="discover" 
                                className="navLinks" >Regístrate</LinkS>
                            </li>
                            <li className="navItem">
                                <LinkS 
                                style={{
                                    color: `${scrollNav ? '#ffffff' : 'transparent'}`
                                }}
                                to="services" 
                                className="navLinks" >Chequéa</LinkS>
                            </li>
                        </ul>
                        <nav 
                        className="navBtn">
                            <LinkS
                            onClick={toggleLoginSideBar} 
                            style={{
                                border: `${scrollNav ? '2px solid #ffffff' : 'none'}`
                            }} 
                            className="navBtnLink">
                                <FaRegUser className="userIcon"/>
                                Inicio de Sesión
                            </LinkS>
                        </nav>
                    </div>
                </nav>
            </>
        )
    }
        
}

export default NavBar
