import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-black min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <h1 
        id="hero-title" 
        className="text-5xl text-[#FFD700] uppercase mb-4 opacity-0"
      >
        Find Your Dream Rental Home or List Your Property – Seamlessly & Securely!
      </h1>
      <p 
        id="hero-subtitle" 
        className="text-xl text-white mb-8 opacity-0"
      >
        Odisha's most trusted rental service connecting house owners with verified tenants. Simple, transparent, and hassle-free rentals!
      </p>
      <div className="hero-buttons flex gap-5 opacity-0">
        <button 
          id="find-home-btn" 
          className="hero-btn bg-[#FFD700] text-black px-6 py-3 rounded-full font-bold min-w-[200px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/30"
        >
          🔎 Find a Home
        </button>
        <button 
          id="list-property-btn" 
          className="hero-btn bg-[#FFD700] text-black px-6 py-3 rounded-full font-bold min-w-[200px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/30"
        >
          🏠 List Your Property
        </button>
      </div>
    </section>
  );
};

export default Hero; 