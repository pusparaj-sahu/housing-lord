import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2>Housing Lord</h2>
          <p>Your trusted partner in finding the perfect home in Bhubaneswar. We provide comprehensive real estate solutions with a focus on quality and customer satisfaction.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/services/rental">Rental Services</Link></li>
            <li><Link to="/services/property-listing">Property Listing</Link></li>
            <li><Link to="/services/tenant-verification">Tenant Verification</Link></li>
            <li><Link to="/services/documentation">Documentation</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Housing Lord, Bhubaneswar, Odisha</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 1234567890</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>contact@housinglord.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <span>Mon-Sun: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Housing Lord | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 