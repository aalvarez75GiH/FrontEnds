import React from 'react'
import { FaBars,FaSign, FaUserPlus } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { IoMdCart } from 'react-icons/io'
import { BiUser, BiUserCheck } from 'react-icons/bi'


const NavBarMobil = ({ 
    toggleSideBar, 
    username, 
    login, 
    toggleLoginSideBar,
    toggleLogoutSideBar 
}) => {
    if (login){
        return(
        <>
            <nav className="navMobil" >
                <div className="navBarContainerMobil">
                    <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                    <div 
                    className="mobileIconMobil">
                        <BiUserCheck 
                        onClick={toggleLogoutSideBar}
                        className="faUserIcon"/>
                        <FaBars 
                        onClick={toggleSideBar}
                        className="faBarsIcon"/>
                    </div>
                </div>
                <div className="navMenuButtonsContainer">
                    <div className="navMenuButton1">
                        <LinkS to="about" className="navLinksMobil" >
                            <div className="iconMobilContainer">
                                <FaSign className="faIcon"/>
                            </div>
                            Notificame
                        </LinkS>
                    </div>
                    <div className="navMenuButton2">
                        <LinkS to="about" className="navLinksMobil" >
                            <div className="iconMobilContainer">
                                    <FaUserPlus className="faIcon"/>
                            </div>
                            Registrate
                        </LinkS>
                    </div>
                    <div className="navMenuButtons3">
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
    }else{
        return (
            <>
                <nav className="navMobil" >
                <div className="navBarContainerMobil">
                    <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                    <div 
                    // onClick={ toggleSideBar }
                    className="mobileIconMobil">
                        {/* <FaRegUser className="faIcon"/> */}
                        <BiUser 
                        onClick={toggleLoginSideBar}
                        
                        className="faUserIcon" />
                        <FaBars 
                        onClick={toggleSideBar}
                        className="faBarsIcon"/>
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