import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/pexels-monica-turlui-8704353.jpg'

function NavBar({user}) {
    
    const logout = () => {
        window.open('http://localhost:5000/auth/logout', '_self')
    }

     return (
        <div className="navBar">
            <span className="logo"><Link className="link" to="/">Lama App</Link>
            </span>
            {
            user ? (
            <ul className="list">
                <li className="listItem">
                    {/* <img src={user.photos[0].value} alt="avatar" className="avatar" /> */}
                </li>
                <li className="listItem">{user.displayName}</li>
                <li
                onClick={logout} 
                className="listItem">LogOut</li>
            </ul>

            ) : (
                <Link className="link" to="/login">Login</Link>
            )
        }
        </div>
    )
}

export default NavBar
