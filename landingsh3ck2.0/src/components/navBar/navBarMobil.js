import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaRegUser } from 'react-icons/fa'

const NavBarMobil = ({ toggleSideBar, username, login, onLogin }) => {
    if (login){
        return(
        <>
            <nav className="navMobil" >
                <div className="navBarContainerMobil">
                    <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                    <div 
                    onClick={ toggleSideBar }
                    className="mobileIconMobil">
                        <FaBars/>
                    </div>
                </div>
                <div className="navMenuButtonsContainer">
                    <div className="navMenuButton1">
                        {/* <LinkS to="about" className="navLinksMobil" >Notifícame</LinkS> */}
                    </div>
                    <div className="navMenuButton2">
                        {/* <LinkS to="about" className="navLinksMobil" >Regístrate</LinkS> */}
                    </div>
                    <div className="navMenuButtons3">
                        {/* <LinkS to="about" className="navLinksMobil" >Chequea un producto</LinkS> */}
                    </div>
                    
                </div>
            </nav>
        </>
        )
    }else{
        return (
            <>
                <nav className="navMobil" >
                <div className="navBarContainerMobil">
                    <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                    <div 
                    onClick={ toggleSideBar }
                    className="mobileIconMobil">
                        <FaBars/>
                    </div>
                </div>
                <div className="navMenuButtonsContainer">
                    <div className="navMenuButton">
                        <LinkS to="about" className="navLinksMobil" >Notifícame</LinkS>
                    </div>
                    <div className="navMenuButton">
                        <LinkS to="about" className="navLinksMobil" >Regístrate</LinkS>
                    </div>
                    <div className="navMenuButton">
                        <LinkS to="about" className="navLinksMobil" >Chequea un producto</LinkS>
                    </div>
                    
                </div>
            </nav>
            </>
        )
    }
    
}
    
    
        


export default NavBarMobil