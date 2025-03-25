import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  const leftPoints = [
    { icon: '🚀', text: 'Fast & Transparent Rentals – No hidden fees, clear process' },
    { icon: '🤝', text: '65+ Happy House Owners – Trusted by property owners' },
    { icon: '🔍', text: 'Quick Tenant Placement – Verified listings & screening' }
  ];

  const rightPoints = [
    { icon: '📜', text: 'Legal Rental Agreements – Hassle-free documentation' },
    { icon: '💰', text: 'Affordable & Fixed Service Fee – Best rates guaranteed' },
    { icon: '☎️', text: 'Dedicated Customer Support – 24/7 assistance for seamless renting experience' }
  ];

  return (
    <section className="about" id="about-section">
      <h2 data-aos="fade-up">Why Choose Housing Lord?</h2>
      <div className="about-container">
        <div className="about-columns">
          <div className="about-left" data-aos="fade-right">
            {leftPoints.map((point, index) => (
              <div className="about-point" key={`left-${index}`}>
                <span className="icon">{point.icon}</span>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
          <div className="about-right" data-aos="fade-left">
            {rightPoints.map((point, index) => (
              <div className="about-point" key={`right-${index}`}>
                <span className="icon">{point.icon}</span>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-cta" data-aos="fade-up">
          <button className="cta-btn">
            Join Housing Lord – Simplify Your Rental Journey!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 