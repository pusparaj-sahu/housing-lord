import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Showcase.css';

const Showcase = () => {
  const [isPricingSidebarOpen, setIsPricingSidebarOpen] = useState(false);
  const [isAboutSidebarOpen, setIsAboutSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <h2 data-aos="fade-up">Featured Properties</h2>
        <div className="property-grid">
          {/* Luxury Villa Card */}
          <div className="property-card" data-aos="fade-up">
            <div className="property-image">
              <img
                src="https://placehold.co/600x400/111111/FFD700?text=Luxury+Villa"
                alt="Luxury Villa"
              />
            </div>
            <div className="property-info">
              <h3>Luxury Villa</h3>
              <p>Experience the epitome of luxury living in our exclusive villa collection.</p>
              <button className="book-now">View Details</button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="property-card" data-aos="fade-up" data-aos-delay="100">
            <div className="property-image">
              <img
                src="https://placehold.co/600x400/111111/FFD700?text=Pricing"
                alt="Pricing Plans"
              />
            </div>
            <div className="property-info">
              <h3>Our Pricing</h3>
              <p>Transparent pricing plans tailored to your needs.</p>
              <button className="pricing-cta" onClick={() => setIsPricingSidebarOpen(true)}>
                View Pricing
              </button>
            </div>
          </div>

          {/* About Card */}
          <div className="property-card" data-aos="fade-up" data-aos-delay="200">
            <div className="property-image">
              <img
                src="https://placehold.co/600x400/111111/FFD700?text=About+Us"
                alt="About Us"
              />
            </div>
            <div className="property-info">
              <h3>About Us</h3>
              <p>Meet our dedicated team of real estate professionals.</p>
              <button className="about-cta" onClick={() => setIsAboutSidebarOpen(true)}>
                Meet the Team
              </button>
            </div>
          </div>

          {/* Interior Design Card */}
          <div className="property-card" data-aos="fade-up" data-aos-delay="300">
            <div className="property-image">
              <img
                src="https://placehold.co/600x400/111111/FFD700?text=Interior+Design"
                alt="Interior Design"
              />
            </div>
            <div className="property-info">
              <h3>Interior Design</h3>
              <p>Discover our curated collection of beautifully designed interiors.</p>
              <button className="book-now">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Sidebar */}
      <div className={`sidebar ${isPricingSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-content">
          <button className="close-btn" onClick={() => setIsPricingSidebarOpen(false)}>×</button>
          <h3>Our Pricing Plans</h3>
          <div className="detailed-section">
            <h4>Service Fees</h4>
            <ul>
              <li><span className="bullet">•</span> Property Listing: <span className="golden-text">$299</span></li>
              <li><span className="bullet">•</span> Featured Listing: <span className="golden-text">$499</span></li>
              <li><span className="bullet">•</span> Premium Listing: <span className="golden-text">$799</span></li>
            </ul>
          </div>
          <div className="detailed-section">
            <h4>Documentation Services</h4>
            <ul>
              <li><span className="bullet">•</span> Basic Package: <span className="golden-text">$199</span></li>
              <li><span className="bullet">•</span> Standard Package: <span className="golden-text">$299</span></li>
              <li><span className="bullet">•</span> Premium Package: <span className="golden-text">$499</span></li>
            </ul>
          </div>
          <div className="detailed-section">
            <h4>Verification Process</h4>
            <ul>
              <li><span className="bullet">•</span> Identity Verification</li>
              <li><span className="bullet">•</span> Property Inspection</li>
              <li><span className="bullet">•</span> Document Processing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Sidebar */}
      <div className={`sidebar ${isAboutSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-content">
          <button className="close-btn" onClick={() => setIsAboutSidebarOpen(false)}>×</button>
          <h3>Our Leadership Team</h3>
          <div className="founder-section">
            <div className="founder-card">
              <img
                src="https://placehold.co/150x150/111111/FFD700?text=CEO"
                alt="CEO"
                className="founder-img"
              />
              <h4>John Smith</h4>
              <p>CEO & Founder</p>
              <div className="contact-info">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="founder-card">
              <img
                src="https://placehold.co/150x150/111111/FFD700?text=CTO"
                alt="CTO"
                className="founder-img"
              />
              <h4>Sarah Johnson</h4>
              <p>CTO</p>
              <div className="contact-info">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase; 