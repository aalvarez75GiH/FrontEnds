import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="nav" >
                <div className="navBarContainer">
                    <a href="/" className="navLogo">dolla</a>
                    <div className="mobileIcon">
                        {/* <FaBars/> */}
                    </div>
                    <ul className="navMenu"> 
                        <li className="navItem">
                            <a href="about" className="navLinks" >About</a>
                        </li>
                        <li className="navItem">
                            <a href="discover" className="navLinks" >Discover</a>
                        </li>
                        <li className="navItem">
                        <a href="services" className="navLinks" >Services</a>
                        </li>
                        <li className="navItem">
                        <a href="signup" className="navLinks" >Sign up</a>
                        </li>
                    </ul>
                    <nav className="navBtn">
                        <a href="/signin" className="navBtnLink">Sign in</a>
                    </nav>
                </div>
            </nav>
        </>
        
        
      
    )
}

export default NavBar
