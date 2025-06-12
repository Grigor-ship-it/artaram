import React from 'react';
import './Navbar.css';
// import logo from '../assets/logo.svg'
import { ReactComponent as Logo } from '../assets/logo.svg';


const Navbar = () => (
    <nav className="navbar">
    <div className="navbar-content">
    {/* <h1>ArtAram</ h1> */}
    <Logo className="navbar-logo" />
      <ul className="nav-links">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#bio">Bio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  
);

export default Navbar;
