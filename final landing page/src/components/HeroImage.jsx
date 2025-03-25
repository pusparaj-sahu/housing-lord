import React from 'react';

const HeroImage = () => {
  return (
    <section className="hero-image-section w-full h-screen relative overflow-hidden m-0 p-0">
      <div className="hero-image-container w-full h-full relative m-0 p-0" data-aos="fade-up">
        <img 
          src="hero_image.jpeg" 
          alt="Luxury Housing" 
          className="hero-image w-full h-full object-cover transition-transform duration-300 block m-0 p-0 hover:scale-105"
        />
        <div className="hero-image-overlay absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white text-center p-5">
          <h2 className="text-[clamp(2rem,5vw,3rem)] mb-4 text-[#FFD700] uppercase leading-tight">
            Experience Luxury Living
          </h2>
          <p className="text-[clamp(1rem,2vw,1.5rem)] max-w-[800px] mx-auto leading-relaxed">
            Discover properties that redefine modern comfort and elegance
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage; 