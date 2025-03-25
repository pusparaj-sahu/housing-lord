import React from 'react';

const About = () => {
  const aboutPoints = [
    {
      icon: "🚀",
      text: "Fast & Transparent Rentals – No hidden fees, clear process"
    },
    {
      icon: "🤝",
      text: "65+ Happy House Owners – Trusted by property owners"
    },
    {
      icon: "🔍",
      text: "Quick Tenant Placement – Verified listings & screening"
    },
    {
      icon: "📜",
      text: "Legal Rental Agreements – Hassle-free documentation"
    },
    {
      icon: "💰",
      text: "Affordable & Fixed Service Fee – Best rates guaranteed"
    },
    {
      icon: "☎️",
      text: "Dedicated Customer Support – 24/7 assistance for seamless renting experience"
    }
  ];

  return (
    <section className="about py-16 bg-[#111111] text-white" id="about-section">
      <h2 className="text-center text-4xl text-[#FFD700] mb-12 bg-[#1a1a1a] py-4 rounded-lg w-4/5 mx-auto shadow-lg shadow-[#FFD700]/10">
        Why Choose Housing Lord?
      </h2>
      <div className="about-container max-w-7xl mx-auto px-4">
        <div className="about-columns flex justify-between gap-16 mb-12">
          <div className="about-left flex-1" data-aos="fade-right">
            {aboutPoints.slice(0, 3).map((point, index) => (
              <div 
                key={index}
                className="about-point flex items-center mb-8 p-4 bg-[#FFD700]/10 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:bg-[#FFD700]/20"
              >
                <span className="text-4xl mr-4">{point.icon}</span>
                <p className="text-lg leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
          <div className="about-right flex-1" data-aos="fade-left">
            {aboutPoints.slice(3).map((point, index) => (
              <div 
                key={index}
                className="about-point flex items-center mb-8 p-4 bg-[#FFD700]/10 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:bg-[#FFD700]/20"
              >
                <span className="text-4xl mr-4">{point.icon}</span>
                <p className="text-lg leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-cta text-center" data-aos="fade-up">
          <button className="cta-btn bg-[#FFD700] text-black px-8 py-4 text-xl rounded-full cursor-pointer transition-transform duration-300 hover:-translate-y-1">
            Join Housing Lord – Simplify Your Rental Journey!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 