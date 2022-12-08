import React from "react";
import { NavLink } from "react-router-dom";

import "./CSS/NavBar.css";
// import logo from '../components/images/logo.jpg'
  
// const Navbar = ({setUser}) => {
//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }
//   return (
//     <Nav className='navbar'>
//         <NavMenu className='navList'>
//          <h3 className='logo'>Trip Tread </h3>
//           <div className='nav_links'>
//             <NavLink to='/'>
//               Home
//             </NavLink>
//             <NavLink onClick={handleLogoutClick}>
//               Log Out
//             </NavLink>
//             <NavLink to='/components/About'>
//               About Us
//             </NavLink>
//           </div>
//         </NavMenu>
//     </Nav>
//   );

const Navbar = ({setUser}) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
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
              <NavLink onClick={handleLogoutClick}>LogOut</NavLink>
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
