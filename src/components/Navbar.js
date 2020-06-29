import React from 'react'
import {BrowserRouter as Router,NavLink} from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
    return (
        <Router>
            <nav >
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/find-book">Find a book</NavLink>
                    <NavLink to="/My-books">My books</NavLink>
                    <NavLink to="/Log-in">Log in</NavLink>
                </ul>
            </nav>
        </Router>
      
      
    )
}
