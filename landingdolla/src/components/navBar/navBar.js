import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
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

    const [ scrollNav, setScrollnav ] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollnav(true)
        }else{
            setScrollnav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <IconContext.Provider value={{color: '#ffffff'}} >
            <React.Fragment>
               <Nav
               scrollNav={scrollNav}
               >
                   <NavBarContainer>
                       <NavLogo 
                       onClick={toggleHome}
                       to="/">dolla</NavLogo>
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
                            offset={-80}
                            duration={500}
                            to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            to="team">Teams</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            activeClass="active"
                            // spy={true}
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
        </IconContext.Provider>
       
    )
}

export default NavBar