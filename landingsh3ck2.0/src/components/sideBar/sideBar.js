import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const SideBar = ({ toggleSideBar, isOpen }) => {
    return (
        <aside
        className={`${isOpen ? "sideBarContainerOpen" : "sideBarContainer" }`} 
        //className="sideBarContainer"
        // style={{
        //     opacity: `${isOpen ? '100%' : '0'}`,
        //     top:`${isOpen ? '0' : '-100%'}` ,
        // }}
        >
            <div 
            className="sideBarIcon"
            onClick={ toggleSideBar }
            >
                <FaTimes className="closeIcon"/>
            </div>
            <div className="sideBarWrapper">
                <ul className="sideBarMenu">
                    <LinkS to="about" className="sideBarLink" >
                        ¿Quieres saber más?
                    </LinkS>
                    <LinkS to="discover" className="sideBarLink" >
                        ¿Como funciona?
                    </LinkS>
                    <LinkS to="services" className="sideBarLink" >
                        ¿Quiéres ser parte?
                    </LinkS>
                </ul>
                <div className="sideBtnWrap">
                    <LinkR
                    className="sideBarRoute" 
                    to="/signin">
                        Haz Login
                    </LinkR>
                </div>

            </div>


        </aside>
    )
}

export default SideBar