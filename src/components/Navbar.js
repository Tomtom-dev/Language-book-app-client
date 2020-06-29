import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'



export default function Navbar() {
    return (
            <nav className="nav-wrapper grey darken-3">
                <ul>
                    <NavLink to="/" className="button">Home</NavLink>
                    <NavLink to="/findBook" className="button">Find a book</NavLink>
                    <NavLink to="/MyBooks" className="button">My books</NavLink>
                    <NavLink to="/login" className="button">Log in</NavLink>
                </ul>
            </nav>
    )
}
