import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';

import './CSS/NavBar.css'
// import logo from '../components/images/logo.jpg'
  
const Navbar = () => {
  return (
    <Nav className='navbar'>
        <NavMenu className='navList'>
         <h3 className='logo'>Trip Tread </h3>
          <div className='nav_links'>
            <NavLink to='/'>
              Home
            </NavLink>
            <NavLink to='/components/Login'>
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