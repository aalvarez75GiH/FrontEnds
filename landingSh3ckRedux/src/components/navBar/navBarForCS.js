import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import { BiUser, BiUserCheck } from 'react-icons/bi'


const NavBarForCS = ({ toggleMainSideBar }) => {

    return (
        <>
            <nav 
            className="navMobilForCS" >
            <div className="navBarContainerMobil">
                <LinkR to="/" className="navLogoMobil">sh3ck</LinkR>
                <div className="mobileIconMobilForCS">
                    <BiUserCheck 
                    onClick={toggleMainSideBar}
                    className="faUserIcon"/> 
                </div>
            </div>
        </nav>
        </>
    )
}
    
export default NavBarForCS