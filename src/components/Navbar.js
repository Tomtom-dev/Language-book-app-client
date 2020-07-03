import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'
import { useSelector,useDispatch } from "react-redux";
import {getUserInfos} from "../store/user/selector"
import {logOut} from '../store/user/action'




export default function Navbar() {

    const dispatch = useDispatch();
    const userId = useSelector(getUserInfos).id
    
    

    return (
        <nav className="nav-wrapper grey darken-3">
            <ul>
                <NavLink to="/" className="button-navbar">Home</NavLink>
                <NavLink to="/findBook" className="button-navbar">Find a book</NavLink>
                {userId?( <NavLink to="/MyBooks" className="button-navbar">My books</NavLink>)
                :(null)}
                {userId?(<NavLink to="/homepage" onClick={() => dispatch(logOut())} className="button-navbar">Log out</NavLink>)
                :(<NavLink to="/login" className="button-navbar">Log in</NavLink>)}
                
                
            </ul>
        </nav>
    )
}
