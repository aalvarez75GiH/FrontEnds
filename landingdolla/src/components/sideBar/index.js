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

const Sidebar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about">
                        About
                    </SideBarLink>
                    <SideBarLink to="discover">
                        Discover
                    </SideBarLink>
                    <SideBarLink to="services">
                        Services
                    </SideBarLink>
                    <SideBarLink to="signup">
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
