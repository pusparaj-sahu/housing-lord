import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faFileContract,
  faHandshakeSimple,
  faCoins,
  faMagnifyingGlass,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

const WhyChoose = () => {
  const features = [
    {
      icon: faRocket,
      title: "Fast & Transparent Rentals",
      description: "No hidden fees, clear process",
      color: "#FF5722"
    },
    {
      icon: faFileContract,
      title: "Legal Rental Agreements",
      description: "Hassle-free documentation",
      color: "#4CAF50"
    },
    {
      icon: faHandshakeSimple,
      title: "65+ Happy House Owners",
      description: "Trusted by property owners",
      color: "#FFC107"
    },
    {
      icon: faCoins,
      title: "Affordable & Fixed Service Fee",
      description: "Best rates guaranteed",
      color: "#2196F3"
    },
    {
      icon: faMagnifyingGlass,
      title: "Quick Tenant Placement",
      description: "Verified listings & screening",
      color: "#9C27B0"
    },
    {
      icon: faHeadset,
      title: "Dedicated Customer Support",
      description: "24/7 assistance for seamless renting experience",
      color: "#E91E63"
    }
  ];

  return (
    <section className="why-choose-section" id="why-choose">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Why Choose Housing Lord?
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon-wrapper" style={{ backgroundColor: `${feature.color}15` }}>
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className="feature-icon"
                  style={{ color: feature.color }}
                />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container" data-aos="fade-up">
          <button className="cta-button">
            Join Housing Lord – Simplify Your Rental Journey!
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose; 