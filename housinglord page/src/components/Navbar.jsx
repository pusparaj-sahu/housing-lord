import React, { useState, useEffect } from 'react';
import logo from '../components/logo.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest('.main-nav') && !e.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', closeMenu);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <>
      <img src={logo} alt="Housing Lord Logo" className={`logo ${isScrolled ? 'scrolled' : ''}`} />
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </button>

      <nav className={`main-nav ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <ul className="nav-list">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about-housing-lord" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#properties" onClick={toggleMenu}>Properties</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          <li>
            <button className="nav-button" onClick={toggleMenu}>
              Book Now
              <i className="fas fa-arrow-right"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar; 