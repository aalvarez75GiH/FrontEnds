import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

const SideBar = () => {
    return (
        <aside className="sideBarContainer">
            <div className="sideBarIcon">
                <FaTimes
                className="closeIcon"
                />
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
                        Sign in
                    </LinkR>
                </div>

            </div>


        </aside>
    )
}

export default SideBar