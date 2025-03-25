import React from 'react';
import './Hero.css';
import logo from '../../assets/logo.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src={logo} alt="Housing Lord Logo" className="logo" />
      <div className="hero-content">
        <h1 data-aos="fade-up">EXPERIENCE LUXURY LIVING</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Discover properties that redefine modern comfort and elegance
        </p>
      </div>
    </section>
  );
};

export default Hero; 