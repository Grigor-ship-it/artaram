// src/components/Hero.js
import React from 'react';
import './Hero.css';
import cover from '../assets/cover.jpg'; // 🖼️ Your landing image

const Hero = () => (
    <section className="hero">
    <img src={cover} alt="Cover artwork" className="hero-img" />
    <div className="hero-overlay">
    <h1 className="hero-title" data-aos="fade-up" data-aos-delay="300">ArtAram</h1>
      <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="300">Welcome to the Art of ArtAram</h2>
      <p className="hero-description" data-aos="fade-up" data-aos-delay="300">Discover a curated collection of expressive works</p>
    </div>
  </section>
  
);

export default Hero;
