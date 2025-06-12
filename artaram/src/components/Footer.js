// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer" data-aos="fade-up">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} [ArtAram]. All rights reserved.</p>
      <p>
        <a href="mailto:youruncle@email.com">ArtAram@email.com</a>
      </p>
    </div>
  </footer>
);

export default Footer;
