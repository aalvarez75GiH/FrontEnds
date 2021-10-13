import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaSign, FaUserPlus } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'


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
                        
                    </div>
                    <div className="navMenuButton2">
                  
                    </div>
                    <div className="navMenuButtons3">
                  
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
                        
                    </div>
                    <div className="navMenuButton">
                        <LinkS to="about" className="navLinksMobil" >
                        <div className="iconMobilContainer">
                                <FaUserPlus className="faIcon"/>
                        </div>
                        Registrate
                        </LinkS>
                    </div>
                    <div className="navMenuButton">
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