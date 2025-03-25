import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-[#FFD700] text-2xl font-bold">
              Housing Lord
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#how-it-works" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                How It Works
              </a>
              <a href="#about" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                About
              </a>
              <a href="#showcase" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                Showcase
              </a>
              <a href="#faq" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                FAQ
              </a>
              <a href="#contact" className="text-white hover:text-[#FFD700] transition-colors duration-300">
                Contact
              </a>
              <button className="bg-[#FFD700] text-black px-6 py-2 rounded-lg hover:bg-[#FFD700]/90 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
          <a href="#how-it-works" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300">
            How It Works
          </a>
          <a href="#about" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300">
            About
          </a>
          <a href="#showcase" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300">
            Showcase
          </a>
          <a href="#faq" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300">
            FAQ
          </a>
          <a href="#contact" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300">
            Contact
          </a>
          <button className="w-full mt-4 bg-[#FFD700] text-black px-6 py-2 rounded-lg hover:bg-[#FFD700]/90 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 