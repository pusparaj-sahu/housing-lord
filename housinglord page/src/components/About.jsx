import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 768
    });
  }, []);

  return (
    <section className="about" id="about-section">
      <h2>Why Choose Housing Lord? </h2>
      <div className="about-container">
        <div className="about-columns">
          <div className="about-left" data-aos="fade-right">
            <div className="about-point">
              <span className="icon">🚀</span>
              <p>Fast & Transparent Rentals – No hidden fees, clear process</p>
            </div>
            <div className="about-point">
              <span className="icon">🤝</span>
              <p>65+ Happy House Owners – Trusted by property owners</p>
            </div>
            <div className="about-point">
              <span className="icon">🔍</span>
              <p>Quick Tenant Placement – Verified listings & screening</p>
            </div>
          </div>
          <div className="about-right" data-aos="fade-left">
            <div className="about-point">
              <span className="icon">📜</span>
              <p>Legal Rental Agreements – Hassle-free documentation</p>
            </div>
            <div className="about-point">
              <span className="icon">💰</span>
              <p>Affordable & Fixed Service Fee – Best rates guaranteed</p>
            </div>
            <div className="about-point">
              <span className="icon">☎️</span>
              <p>Dedicated Customer Support – 24/7 assistance for seamless renting experience</p>
            </div>
          </div>
        </div>
        <div className="about-cta" data-aos="fade-up">
          <button className="cta-btn">Join Housing Lord – Simplify Your Rental Journey!</button>
        </div>
      </div>
    </section>
  );
};

export default About; 