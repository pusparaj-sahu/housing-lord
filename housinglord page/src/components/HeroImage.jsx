import React from 'react';
import heroImage from '../components/hero_image.jpeg';

const HeroImage = () => {
  return (
    <section className="hero-image-section">
      <div className="hero-image-container" data-aos="fade-up">
        <img src={heroImage} alt="Luxury Housing" className="hero-image" />
        <div className="hero-image-overlay">
          <h2>Experience Luxury Living</h2>
          <p>Discover properties that redefine modern comfort and elegance</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage; 