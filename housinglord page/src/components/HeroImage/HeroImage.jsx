import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeroImage.css';

const HeroImage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  return (
    <section className="hero-image-section">
      <div className="hero-image-container">
        <img
          src="https://placehold.co/1920x1080/111111/FFD700?text=Luxury+Living"
          alt="Luxury Living"
          className="hero-image"
          data-aos="fade-up"
        />
        <div className="hero-image-overlay" data-aos="fade-up" data-aos-delay="200">
          <h2>Discover Your Dream Home</h2>
          <p>Experience luxury living at its finest with our handpicked selection of premium properties</p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage; 