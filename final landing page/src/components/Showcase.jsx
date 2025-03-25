import React, { useState } from 'react';

const Showcase = () => {
  const [isPricingSidebarOpen, setIsPricingSidebarOpen] = useState(false);
  const [isAboutSidebarOpen, setIsAboutSidebarOpen] = useState(false);

  const togglePricingSidebar = () => setIsPricingSidebarOpen(!isPricingSidebarOpen);
  const toggleAboutSidebar = () => setIsAboutSidebarOpen(!isAboutSidebarOpen);

  return (
    <section className="showcase py-16 bg-black" id="properties">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="property-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Luxury Modern Villa Card */}
          <div className="property-card bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#FFD700]/20" data-aos="fade-up">
            <div className="property-image relative h-[250px] overflow-hidden">
              <img 
                src="/propertycard1.webp" 
                alt="Modern House" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button className="book-now absolute bottom-4 right-4 bg-[#FFD700] text-black px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/30">
                Book Now
              </button>
            </div>
            <div className="property-info p-6 bg-gradient-to-b from-[#1a1a1a] to-black">
              <h3 className="text-[#FFD700] mb-4 text-xl">Luxury Modern Villa</h3>
              <p className="text-gray-300">
                Experience elegance with our meticulously curated rental properties. Elevate your living experience and find your perfect home.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="property-card pricing-card bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing-header bg-gradient-to-r from-black to-[#222] p-8 text-center">
              <h3 className="text-[#FFD700] text-xl">Simple & Transparent Pricing</h3>
            </div>
            <div className="property-info p-6">
              <div className="pricing-details">
                <h4 className="text-[#FFD700] mb-4">Service Fee Structure:</h4>
                <p className="text-[#FFD700] mb-2">One month's rent split as:</p>
                <ul className="text-white space-y-2">
                  <li>15 days' rent from tenant</li>
                  <li>15 days' rent from owner</li>
                </ul>
                
                <h4 className="text-[#FFD700] mt-6 mb-4">Additional Services:</h4>
                <ul className="text-white space-y-2">
                  <li>📜 Rental Agreement Assistance</li>
                  <li>🔍 Police Verification</li>
                </ul>
              </div>
              <button 
                className="pricing-cta w-full bg-[#FFD700] text-black py-4 rounded-lg font-bold mt-6 transition-transform duration-300 hover:-translate-y-1"
                onClick={togglePricingSidebar}
              >
                No Hidden Costs – Just Professional Service!
              </button>
            </div>
          </div>

          {/* Video Tour Card */}
          <div className="property-card bg-[#1a1a1a] rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="video-container">
              <video autoPlay muted loop className="w-full h-[250px] object-cover">
                <source src="/property-tour.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* About Us Card */}
          <div className="property-card about-card bg-[#FFD700]/5 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="300">
            <div className="about-header bg-[#1a1a1a] p-8 text-center flex flex-col items-center gap-2">
              <h3 className="text-[#FFD700] text-xl">About Housing Lord</h3>
              <div className="logo-container">
                <img 
                  src="/logo.jpg" 
                  alt="Housing Lord Logo" 
                  className="w-36 h-36 rounded-full border-2 border-[#FFD700] shadow-lg shadow-[#FFD700]/30 transition-transform duration-300 hover:scale-105 hover:rotate-5"
                />
              </div>
            </div>
            <div className="property-info p-6">
              <div className="about-content">
                <h4 className="text-[#FFD700] mb-4">Who We Are?</h4>
                <p className="text-left text-gray-300 mb-6">
                  Housing Lord is Bhubaneswar's leading rental service, dedicated to making the rental process simple, professional, and stress-free for both tenants and property owners.
                </p>
                
                <div className="mission-statement mb-6 pl-4 border-l-4 border-[#FFD700] bg-[#FFD700]/10 p-4">
                  <h4 className="text-[#FFD700] mb-2">Our Mission</h4>
                  <p className="text-gray-300">"Simplifying Rentals, Enhancing Living."</p>
                </div>
                
                <button 
                  className="about-cta w-full bg-[#FFD700] text-black py-4 rounded-full font-bold transition-transform duration-300 hover:-translate-y-1"
                  onClick={toggleAboutSidebar}
                >
                  Know More About Our Team
                </button>
              </div>
            </div>
          </div>

          {/* Interior Card */}
          <div className="property-card bg-[#1a1a1a] rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="400">
            <div className="property-image relative h-[250px] overflow-hidden">
              <img 
                src="/interior-1.jpg" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="property-info p-6">
              <h3 className="text-[#FFD700] mb-4 text-xl">Uncompromising Quality</h3>
              <p className="text-gray-300 mb-6">
                Elevate your living experience with our thoughtfully designed rental properties. Discover the perfect blend of modern amenities.
              </p>
              <button className="inquire-btn w-full bg-[#FFD700] text-black py-4 rounded-full font-bold transition-transform duration-300 hover:-translate-y-1">
                Inquire Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Sidebar */}
      <div className={`sidebar fixed right-0 top-0 w-[400px] h-screen bg-[#1a1a1a] p-8 shadow-lg transition-transform duration-300 transform ${isPricingSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="sidebar-content text-white">
          <button 
            className="close-btn absolute right-4 top-4 text-4xl text-[#FFD700] cursor-pointer transition-transform duration-300 hover:rotate-90 hover:text-white"
            onClick={togglePricingSidebar}
          >
            ×
          </button>
          <h2 className="text-2xl text-[#FFD700] mb-8 pb-4 border-b-2 border-[#FFD700]/30">
            Detailed Pricing Information
          </h2>
          
          {/* Pricing Details */}
          <div className="detailed-section mb-8 p-6 bg-[#FFD700]/5 rounded-lg border border-[#FFD700]/10 transition-transform duration-300 hover:-translate-x-1 hover:bg-[#FFD700]/8 hover:border-[#FFD700]/20">
            <h4 className="text-[#FFD700] mb-6 text-xl flex items-center gap-2">
              <span>💰</span> Service Fee Breakdown
            </h4>
            <ul className="space-y-4">
              <li className="text-[#FFD700] font-bold text-lg">
                <span className="mr-2">►</span> One month's rent split as:
              </li>
              <li><span className="mr-2">►</span> 15 days' rent from tenant</li>
              <li><span className="mr-2">►</span> 15 days' rent from owner</li>
              <li className="text-[#98FB98]"><span className="mr-2">✓</span> No advance payment required</li>
              <li className="text-[#98FB98]"><span className="mr-2">✓</span> Pay only after successful match</li>
            </ul>
          </div>

          {/* Documentation Services */}
          <div className="detailed-section mb-8 p-6 bg-[#FFD700]/5 rounded-lg border border-[#FFD700]/10 transition-transform duration-300 hover:-translate-x-1 hover:bg-[#FFD700]/8 hover:border-[#FFD700]/20">
            <h4 className="text-[#FFD700] mb-6 text-xl flex items-center gap-2">
              <span>📝</span> Documentation Services
            </h4>
            <ul className="space-y-4">
              <li><span className="mr-2">►</span> Professional rental agreement drafting</li>
              <li><span className="mr-2">►</span> Legal consultation included</li>
              <li><span className="mr-2">►</span> Digital document storage</li>
              <li><span className="mr-2">►</span> Document registration support</li>
              <li><span className="mr-2">►</span> Digital signature facility</li>
            </ul>
          </div>

          {/* Verification Process */}
          <div className="detailed-section p-6 bg-[#FFD700]/5 rounded-lg border border-[#FFD700]/10 transition-transform duration-300 hover:-translate-x-1 hover:bg-[#FFD700]/8 hover:border-[#FFD700]/20">
            <h4 className="text-[#FFD700] mb-6 text-xl flex items-center gap-2">
              <span>🔍</span> Verification Process
            </h4>
            <ul className="space-y-4">
              <li><span className="mr-2">►</span> Document collection assistance</li>
              <li><span className="mr-2">►</span> Police verification processing</li>
              <li><span className="mr-2">►</span> Background verification</li>
              <li><span className="mr-2">►</span> Employment verification</li>
              <li><span className="mr-2">►</span> Previous rental history check</li>
              <li><span className="mr-2">►</span> Real-time status tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Sidebar */}
      <div className={`sidebar fixed right-0 top-0 w-[400px] h-screen bg-[#1a1a1a] p-8 shadow-lg transition-transform duration-300 transform ${isAboutSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="sidebar-content text-white">
          <button 
            className="close-btn absolute right-4 top-4 text-4xl text-[#FFD700] cursor-pointer transition-transform duration-300 hover:rotate-90 hover:text-white"
            onClick={toggleAboutSidebar}
          >
            ×
          </button>
          <h2 className="text-2xl text-[#FFD700] mb-8 pb-4 border-b-2 border-[#FFD700]/30">
            Our Leaders
          </h2>
          
          {/* Founder Cards */}
          <div className="founder-section space-y-8">
            {/* Ranjit Kumar Panda */}
            <div className="founder-card bg-[#FFD700]/10 p-6 rounded-lg text-center">
              <img 
                src="/ranjit.jpg" 
                alt="Ranjit Kumar Panda" 
                className="w-40 h-40 rounded-full border-3 border-[#FFD700] mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Ranjit Kumar Panda</h4>
              <p className="text-gray-300 mb-4">Real Estate & Hospitality Expert</p>
              <div className="contact-info">
                <a 
                  href="https://linkedin.com/in/ranjit-panda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FFD700] block mb-2 hover:underline"
                >
                  LinkedIn
                </a>
                <p>📞 +91-XXXXXXXXXX</p>
              </div>
            </div>

            {/* Pavitra Kumar Panda */}
            <div className="founder-card bg-[#FFD700]/10 p-6 rounded-lg text-center">
              <img 
                src="/pavitra.jpg" 
                alt="Pavitra Kumar Panda" 
                className="w-40 h-40 rounded-full border-3 border-[#FFD700] mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Pavitra Kumar Panda</h4>
              <p className="text-gray-300 mb-4">Finance & Pricing Specialist</p>
              <div className="contact-info">
                <a 
                  href="https://linkedin.com/in/pavitra-panda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FFD700] block mb-2 hover:underline"
                >
                  LinkedIn
                </a>
                <p>📞 +91-XXXXXXXXXX</p>
              </div>
            </div>

            {/* Pusparaj Sahu */}
            <div className="founder-card bg-[#FFD700]/10 p-6 rounded-lg text-center">
              <img 
                src="/pusparaj.jpg" 
                alt="Pusparaj Sahu" 
                className="w-40 h-40 rounded-full border-3 border-[#FFD700] mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Pusparaj Sahu</h4>
              <p className="text-gray-300 mb-4">Technology Expert</p>
              <div className="contact-info">
                <a 
                  href="https://linkedin.com/in/pusparaj-sahu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FFD700] block mb-2 hover:underline"
                >
                  LinkedIn
                </a>
                <p>📞 +91-XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase; 