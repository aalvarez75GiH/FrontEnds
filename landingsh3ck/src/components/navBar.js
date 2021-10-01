import React from 'react' 
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul className="NavBar__links">
            <Link
            className="NavBar__link"
            activeClass="active"
            to="section-2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
             ¿Quieres saber más?   
            </Link>
            <Link
            className="NavBar__link"
            activeClass="active"
            to="section-3"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
             ¿Como funciona?   
            </Link>
            <Link
            className="NavBar__link"
            activeClass="active"
            to="section-4"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
             ¿Quieres ser parte?   
            </Link>
                
            </ul>
        </div>
    )
}

export default NavBar

