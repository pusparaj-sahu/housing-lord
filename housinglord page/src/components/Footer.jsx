import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
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
    <footer className="footer" data-aos="fade-up">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="logo.jpg" alt="Housing Lord Logo" />
            </div>
            <p>Simplifying Rentals, Enhancing Living</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Property Management</li>
              <li>Tenant Screening</li>
              <li>Legal Documentation</li>
              <li>Maintenance Support</li>
              <li>24/7 Customer Service</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                123 Main Street, Bhubaneswar, Odisha
              </li>
              <li>
                <i className="fas fa-phone"></i>
                +91-XXXXXXXXXX
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                info@housinglord.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Housing Lord. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 