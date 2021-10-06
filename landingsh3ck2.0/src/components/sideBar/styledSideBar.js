import React from 'react'
import SideBar from './sideBar'
import {
    SideBarContainer,
    SideBarIcon,
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
    SideBtnWrap,
    SideBarRoute

} from '../sideBar/styledSideBarElements.js'

const StyledSideBar = () => {
    return (
        <SideBarContainer>
            <SideBarIcon>
                <CloseIcon/>
            </SideBarIcon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink>
                        ¿Quieres saber más?
                    </SideBarLink>
                    <SideBarLink>
                        ¿Como funciona?
                    </SideBarLink>
                    <SideBarLink>
                        ¿Quiéres ser parte?
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute>
                        Haz Login aquí
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>

        </SideBarContainer>
    )

}

export default StyledSideBar


{/* <aside className="sideBarContainer">
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


</aside> */}