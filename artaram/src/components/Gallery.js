import React, { useState } from 'react';
import './Gallery.css';

import boy from '../assets/boy.jpg';
import image0 from '../assets/image0.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import background from '../assets/background.png';

const artworks = [
  { title: "Boy", image: boy, medium: "Oil on Canvas", year: "2023" },
  { title: "Pomegranate", image: image0, medium: "Acrylic", year: "2022" },
  { title: "Deers", image: image2, medium: "Mixed Media", year: "2024" },
  { title: "Blueberries", image: image3, medium: "Watercolor", year: "2021" },
  { title: "Crashing Waves", image: image7, medium: "Charcoal", year: "2020" },
  { title: "Waves", image: image1, medium: "Digital", year: "2023" },
  { title: "Cat", image: image5, medium: "Digital", year: "2023" },
  { title: "Elephants", image: image6, medium: "Digital", year: "2023" }
];

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <section
      id="gallery"
      className="gallery-section"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="gallery-overlay" style={{ background: 'transparent' }}>
      <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
          {artworks.map((art, index) => (
            <div
              className="art-card"
              key={index}
              style={{ '--i': index }}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={Math.floor(index / 2) * 300 + (index % 2 === 1 ? 100 : 0)}
              data-aos-offset="200"
              onClick={() => setSelectedArt(art)}
            >
              <img src={art.image} alt={art.title} />
              <div className="info">
                <h4>{art.title}</h4>
                <p>{art.medium} – {art.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedArt && (
        <div className="modal" onClick={() => setSelectedArt(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedArt.image} alt={selectedArt.title} />
            <h3>{selectedArt.title}</h3>
            <p>{selectedArt.medium} – {selectedArt.year}</p>
            <button className="close-btn" onClick={() => setSelectedArt(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
