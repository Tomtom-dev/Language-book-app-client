import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfos } from "../store/user/selector";
import { logOut } from "../store/user/action";

export default function Navbar() {
  const dispatch = useDispatch();
  const userId = useSelector(getUserInfos).id;

    
    
    
  return (
    <nav className='gray containe highlightTextIn'>
      <ul>
        <NavLink exact to='/' className='button'>
          Home
        </NavLink>
        <NavLink to='/findBook' className='button'>
          Find a book
        </NavLink>
        {userId ? (
          <NavLink to='/MyBooks' className='button'>
            My books
          </NavLink>
        ) : null}
        {userId ? (
          <NavLink className="button" to='/homepage' onClick={() => dispatch(logOut())}>
            Log out
          </NavLink>
        ) : (
          <NavLink to='/login' className='button'>
            Log in
          </NavLink>
        )}
      </ul>
    </nav>
  );
}
