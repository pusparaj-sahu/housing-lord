import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Showcase = () => {
  const [isPricingSidebarOpen, setIsPricingSidebarOpen] = useState(false);
  const [isAboutSidebarOpen, setIsAboutSidebarOpen] = useState(false);

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

  const togglePricingSidebar = () => {
    setIsPricingSidebarOpen(!isPricingSidebarOpen);
  };

  const toggleAboutSidebar = () => {
    setIsAboutSidebarOpen(!isAboutSidebarOpen);
  };

  return (
    <section className="showcase" id="properties">
      <div className="container">
        <div className="property-grid">
          {/* Luxury Modern Villa Card */}
          <div className="property-card" data-aos="fade-up">
            <div className="property-image">
              <img src="propertycard1.webp" alt="Modern House" />
              <button className="book-now">Book Now</button>
            </div>
            <div className="property-info">
              <h3>Luxury Modern Villa</h3>
              <p>Experience elegance with our meticulously curated rental properties. Elevate your living experience and find your perfect home.</p>
            </div>
          </div>

          {/* Pricing & Transparency Card */}
          <div className="property-card pricing-card" data-aos="fade-up" data-aos-delay="100">
            <div className="property-image pricing-header">
              <h3>Simple & Transparent Pricing</h3>
            </div>
            <div className="property-info">
              <div className="pricing-details">
                <h4>Service Fee Structure:</h4>
                <p style={{ color: '#FFD700' }}>One month's rent split as:</p>
                <ul>
                  <li>15 days' rent from tenant</li>
                  <li>15 days' rent from owner</li>
                </ul>
                
                <h4>Additional Services:</h4>
                <ul>
                  <li>📜 Rental Agreement Assistance</li>
                  <li>🔍 Police Verification</li>
                </ul>
              </div>
              <button className="pricing-cta" onClick={togglePricingSidebar}>
                No Hidden Costs – Just Professional Service!
              </button>
            </div>
          </div>

          {/* Pricing Sidebar */}
          <div className={`sidebar ${isPricingSidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-content">
              <button className="close-btn" onClick={togglePricingSidebar}>×</button>
              <h2>Detailed Pricing Information</h2>
              
              <div className="detailed-section">
                <h4>💰 Service Fee Breakdown</h4>
                <ul>
                  <li className="golden-text"><span className="bullet">►</span> One month's rent split as:</li>
                  <li><span className="bullet">►</span> 15 days' rent from tenant</li>
                  <li><span className="bullet">►</span> 15 days' rent from owner</li>
                  <li className="special"><span className="bullet">✓</span> No advance payment required</li>
                  <li className="special"><span className="bullet">✓</span> Pay only after successful match</li>
                </ul>
              </div>

              <div className="detailed-section">
                <h4>📝 Documentation Services</h4>
                <ul>
                  <li><span className="bullet">►</span> Professional rental agreement drafting</li>
                  <li><span className="bullet">►</span> Legal consultation included</li>
                  <li><span className="bullet">►</span> Digital document storage</li>
                  <li><span className="bullet">►</span> Document registration support</li>
                  <li><span className="bullet">►</span> Digital signature facility</li>
                </ul>
              </div>

              <div className="detailed-section">
                <h4>🔍 Verification Process</h4>
                <ul>
                  <li><span className="bullet">►</span> Document collection assistance</li>
                  <li><span className="bullet">►</span> Police verification processing</li>
                  <li><span className="bullet">►</span> Background verification</li>
                  <li><span className="bullet">►</span> Employment verification</li>
                  <li><span className="bullet">►</span> Previous rental history check</li>
                  <li><span className="bullet">►</span> Real-time status tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Video Tour Card */}
          <div className="property-card" data-aos="fade-up" data-aos-delay="200">
            <div className="video-container">
              <video autoPlay muted loop>
                <source src="property-tour.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* About Us Card */}
          <div className="property-card about-card" id="about-housing-lord" data-aos="fade-up" data-aos-delay="300">
            <div className="property-image about-header">
              <h3>About Housing Lord</h3>
              <div className="logo-container">
                <img 
                  style={{ width: '9rem', height: '9rem', position: 'relative', top: '-25px', backgroundColor: 'black' }} 
                  src="logo.jpg" 
                  alt="Housing Lord Logo" 
                  className="about-logo"
                />
              </div>
            </div>
            
            <div className="property-info">
              <div className="about-content">
                <h4 style={{ color: '#FFD700' }}>Who We Are?</h4>
                <p style={{ textAlign: 'left' }}>Housing Lord is Bhubaneswar's leading rental service, dedicated to making the rental process simple, professional, and stress-free for both tenants and property owners.</p>
                
                <div className="mission-statement">
                  <h4 style={{ color: '#FFD700' }}>Our Mission</h4>
                  <p>"Simplifying Rentals, Enhancing Living."</p>
                </div>
                
                <button className="about-cta" onClick={toggleAboutSidebar}>Know More About Our Team</button>
              </div>
            </div>
          </div>

          {/* About Sidebar */}
          <div className={`sidebar ${isAboutSidebarOpen ? 'active' : ''}`}>
            <div className="sidebar-content">
              <button className="close-btn" onClick={toggleAboutSidebar}>×</button>
              <h2>Our Leaders</h2>
              
              <div className="detailed-section founder-section">
                <div className="founder-card">
                  <img src="ranjit.jpg" alt="Ranjit Kumar Panda" className="founder-img" />
                  <h4>Ranjit Kumar Panda</h4>
                  <p>Real Estate & Hospitality Expert</p>
                  <div className="contact-info">
                    <a href="https://linkedin.com/in/ranjit-panda" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <p>📞 +91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="founder-card">
                  <img src="pavitra.jpg" alt="Pavitra Kumar Panda" className="founder-img" />
                  <h4>Pavitra Kumar Panda</h4>
                  <p>Finance & Pricing Specialist</p>
                  <div className="contact-info">
                    <a href="https://linkedin.com/in/pavitra-panda" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <p>📞 +91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="founder-card">
                  <img src="pusparaj.jpg" alt="Pusparaj Sahu" className="founder-img" />
                  <h4>Pusparaj Sahu</h4>
                  <p>Technology Expert</p>
                  <div className="contact-info">
                    <a href="https://linkedin.com/in/pusparaj-sahu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <p>📞 +91-XXXXXXXXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interior Card */}
          <div className="property-card" data-aos="fade-up" data-aos-delay="400">
            <div className="property-image">
              <img src="interior-1.jpg" alt="Luxury Interior" />
            </div>
            <div className="property-info">
              <h3>Uncompromising Quality</h3>
              <p>Elevate your living experience with our thoughtfully designed rental properties. Discover the perfect blend of modern amenities.</p>
              <button className="inquire-btn">Inquire Today</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase; 