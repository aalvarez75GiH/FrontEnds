import React from 'react' 
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <div className="NavBar">
            {/* <ul className="NavBar__links"> */}
            <Link
            activeClass="active"
            to="section-2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
             ¿Quieres saber más?   
            </Link>
            <Link
            activeClass="active"
            to="section-3"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
             ¿Como funciona?   
            </Link>
            <Link
            activeClass="active"
            to="section-4"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
             ¿Quieres ser parte?   
            </Link>
                
            {/* </ul> */}
        </div>
    )
}

export default NavBar

{/* <li className="NavBar__link">
                ¿Quieres saber más?
                </li> */}
                {/* <li className="NavBar__link">
                Como funciona
                </li>
                <li className="NavBar__link">
                ¿Quieres ser parte?
                </li>
                <li className="NavBar__link">
                Notifícame
                </li> */}