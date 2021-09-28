import React from 'react'

const NavBar = () => {
    return (
<nav className="Nav">
        <ul className="Nav__links">
            <li>
                <a href="/" className="Nav__link">
                    sh3ck
                </a>
            </li>
            <li className="Nav__link-push">
                <a href="/" className="Nav__link">
                    ¿Quieres saber más?
                </a>
            
            </li>
            <li className="Nav__link-margin-left">
                <a href="/" className="Nav__link">
                Como funciona
                </a>
            </li>
            <li className="Nav__link-margin-left">
                <a href="/" className="Nav__link">
                ¿Quieres ser parte?
                </a>
            </li>
            <li className="Nav__link-margin-left">
                <a href="/" className="Nav__link">
                Notifícame
                </a>
            </li>
        </ul>
    </nav>
    )
    
}

export default NavBar
