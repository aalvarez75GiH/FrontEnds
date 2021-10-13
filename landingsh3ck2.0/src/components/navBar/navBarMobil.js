import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaRegUser, FaSign, FaUserPlus } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'

import { FiUserPlus } from 'react-icons/fi'

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
                        <LinkS to="about" className="navLinksMobil" >
                            <div className="iconMobilContainer">
                                <FaSign className="faIcon"/>
                            </div>
                            Notificame
                        </LinkS>
                        {/* <LinkS to="about" className="navLinksMobil" >Notifícame</LinkS> */}
                    </div>
                    <div className="navMenuButton">
                        {/* <LinkS to="about" className="navLinksMobil" >Regístrate</LinkS> */}
                        <LinkS to="about" className="navLinksMobil" >
                        <div className="iconMobilContainer">
                                <FaUserPlus className="faIcon"/>
                        </div>
                        Registrate
                        </LinkS>
                    </div>
                    <div className="navMenuButton">
                        {/* <LinkS to="about" className="navLinksMobil" >Chequea un producto</LinkS> */}
                        <LinkS to="about" className="navLinksMobil" >
                        <div className="iconMobilContainer">
                                <IoMdCart className="faIcon"/>
                        </div>
                        Chequéa
                        </LinkS>
                    </div>
                    
                </div>
            </nav>
            </>
        )
    }
    
}
    
    
        


export default NavBarMobil