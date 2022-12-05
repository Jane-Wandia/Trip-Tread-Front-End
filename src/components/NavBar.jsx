import React from 'react';
import './CSS/NavBar.css'
// import logo from '../components/images/logo.jpg'
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu className='navList'>
        <header>
        <div className="container container-flex">
            {/* <div className="logoContainer">
                <img src={logo} alt ="logo" className='logo'/>
            </div> */}
        </div>
        </header>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/components/Login'>
            Login
          </NavLink>
          <NavLink to='/components/About'>
            About Us
          </NavLink>
          <NavLink to='/components/Reviews'>
            Reviews
          </NavLink>
          <NavLink to='/components/Contact'>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;