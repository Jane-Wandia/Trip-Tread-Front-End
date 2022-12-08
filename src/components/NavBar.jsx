import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';

import './CSS/NavBar.css'
// import logo from '../components/images/logo.jpg'
  
const Navbar = ({setUser}) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Nav className='navbar'>
        <NavMenu className='navList'>
         <h3 className='logo'>Trip Tread </h3>
          <div className='nav_links'>
            <NavLink to='/'>
              Home
            </NavLink>
            <NavLink onClick={handleLogoutClick}>
              Log Out
            </NavLink>
            <NavLink to='/components/About'>
              About Us
            </NavLink>
          </div>
        </NavMenu>
    </Nav>
  );
};
  
export default Navbar;