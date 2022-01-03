import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/pexels-monica-turlui-8704353.jpg'

function NavBar({user}) {
    return (
        <div className="navBar">
            <span className="logo"><Link className="link" to="/">Lama App</Link>
            </span>
            {
            user ? (
            <ul className="list">
                <li className="listItem">
                    <img src={image} alt="avatar" className="avatar" />
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">LogOut</li>
            </ul>

            ) : (
                <Link className="link" to="/login">Login</Link>
            )
        }
        </div>
    )
}

export default NavBar
