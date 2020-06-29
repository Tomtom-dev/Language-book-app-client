import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
    return (
        
            <nav >
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/findBook">Find a book</NavLink>
                    <NavLink to="/MyBooks">My books</NavLink>
                    <NavLink to="/login">Log in</NavLink>
                </ul>
            </nav>
        
    )
}
