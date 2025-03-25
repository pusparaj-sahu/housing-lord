import { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });
    
    tl.to(["#hero-title", "#hero-subtitle", ".hero-buttons"], {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.5
    });
  }, []);

  return (
    <section className="hero" id="home">
      <h1 id="hero-title">Find Your Dream Rental Home or List Your Property – Seamlessly & Securely!</h1>
      <p id="hero-subtitle">Odisha's most trusted rental service connecting house owners with verified tenants. Simple, transparent, and hassle-free rentals!</p>
      <div className="hero-buttons">
        <button id="find-home-btn" className="hero-btn">🔎 Find a Home</button>
        <button id="list-property-btn" className="hero-btn">🏠 List Your Property</button>
      </div>
    </section>
  );
};

export default Hero; 