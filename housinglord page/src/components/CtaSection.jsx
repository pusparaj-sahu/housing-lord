import React from 'react';

const CtaSection = () => {
  return (
    <div className="cta-section text-center py-16 px-8 bg-gradient-to-r from-black to-[#1a1a1a] rounded-lg mx-auto max-w-5xl my-8" data-aos="fade-up">
      <h2 className="text-4xl text-[#FFD700] mb-6">Unleash Your Rental Potential</h2>
      <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
        Unlock the door to your dream rental with our exceptional collection of properties. Combining unparalleled design, cutting-edge amenities, and personalized service, we empower you to find the perfect living space that elevates your lifestyle.
      </p>
      <button className="explore-btn bg-[#FFD700] text-black px-8 py-4 rounded-full font-bold transition-transform duration-300 hover:-translate-y-1">
        Explore Now
      </button>
    </div>
  );
};

export default CtaSection; 