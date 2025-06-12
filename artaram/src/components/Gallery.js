// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

const artworks = [
    {
      title: "Boy",
      image: "/images/boy.jpg",
      medium: "Oil on Canvas",
      year: "2023"
    },
    {
      title: "Dog",
      image: "/images/dog.jpg",
      medium: "Acrylic",
      year: "2022"
    },
    {
      title: "Madonna",
      image: "/images/madonna.jpg",
      medium: "Mixed Media",
      year: "2024"
    },
    {
      title: "Woman",
      image: "/images/woman.jpg",
      medium: "Watercolor",
      year: "2021"
    },
    {
      title: "Rhino",
      image: "/images/rhino.jpg",
      medium: "Charcoal",
      year: "2020"
    },
    {
      title: "Van Gogh Tribute",
      image: "/images/vangogh.jpg",
      medium: "Digital",
      year: "2023"
    }
  ];
  
  
const Gallery = () => (
  <section id="gallery" className="gallery-section">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {artworks.map((art, index) => (
        <div className="art-card" key={index}>
          <img src={art.image} alt={art.title} />
          <div className="info">
            <h4>{art.title}</h4>
            <p>{art.medium} – {art.year}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
