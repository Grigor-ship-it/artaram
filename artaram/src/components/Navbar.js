// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Artaram</div>
    <ul className="nav-links">
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#bio">Bio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
