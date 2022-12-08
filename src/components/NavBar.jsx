import React from "react";
import { NavLink } from "react-router-dom";

import "./CSS/NavBar.css";
// import logo from '../components/images/logo.jpg'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>
          Trip<span>Tread</span>
        </h2>
      </div>

      <div className="navbar-nav">
        <ul id="my-nav-links" className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/logOut">LogOut</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
        </ul>
      </div>
    </nav>
    </>
 
  )
};

export default Navbar;
