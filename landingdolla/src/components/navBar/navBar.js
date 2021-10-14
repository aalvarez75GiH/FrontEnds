import React from 'react'
import { 
    Nav, 
    NavBarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    NavBtnLink,
    NavBtn  
} from './navBarElements'
import { FaBars } from 'react-icons/fa'
const NavBar = ({ toggleSideBar }) => {
    return (
       <React.Fragment>
           <Nav>
               <NavBarContainer>
                   <NavLogo to="/">dolla</NavLogo>
                   <MobileIcon
                   onClick={(e) => toggleSideBar(e) }
                   >
                       <FaBars/>
                   </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to="team">Teams</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        to="signup">Sign Up</NavLinks>
                    </NavItem>
                 </NavMenu>
                 <NavBtn>
                     <NavBtnLink to="/signin">
                        Sign In
                     </NavBtnLink>
                 </NavBtn>
                </NavBarContainer>
           </Nav>
       </React.Fragment>
    )
}

export default NavBar