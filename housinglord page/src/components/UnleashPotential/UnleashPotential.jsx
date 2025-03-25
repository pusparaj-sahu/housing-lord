import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './UnleashPotential.css';

const UnleashPotential = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  return (
    <section className="unleash-potential">
      <div className="container">
        <div className="content-wrapper" data-aos="fade-up">
          <h2>Unleash Your Rental Potential</h2>
          <p>
            Unlock the door to your dream rental with our exceptional collection of properties. Combining
            unparalleled design, cutting-edge amenities, and personalized service, we empower you to
            find the perfect living space that elevates your lifestyle.
          </p>
          <button className="explore-btn">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default UnleashPotential; 