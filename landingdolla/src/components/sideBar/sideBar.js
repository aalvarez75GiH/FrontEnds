import React from 'react'
import { 
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SideBarLink,
    SideBarMenu,
    SideBtnWrap,
    SideBarRoute 
} from './sideBarElements'

const Sidebar = ({ isOpen, toggleSideBar }) => {
    return (
        <SideBarContainer
        isOpen={isOpen}
        onClick={ toggleSideBar }
        >
            <Icon onClick={ toggleSideBar }>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink 
                    onClick={toggleSideBar}
                    to="about">
                        About
                    </SideBarLink>
                    <SideBarLink 
                    onClick={toggleSideBar}
                    to="discover">
                        Discover
                    </SideBarLink>
                    <SideBarLink 
                    onClick={toggleSideBar}
                    to="services">
                        Services
                    </SideBarLink>
                    <SideBarLink 
                    onClick={toggleSideBar}
                    to="signup">
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/signin">
                        Sign In
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
            
        </SideBarContainer>
    )
}

export default Sidebar
