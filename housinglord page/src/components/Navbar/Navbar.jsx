import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
    <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
      <img 
        src="https://placehold.co/80x80/FFD700/000000?text=HL" 
        alt="Housing Lord Logo" 
        className={`logo ${isScrolled ? 'scrolled' : ''}`}
      />
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </button>
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/properties">Properties</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <button className="nav-button">
            Get Started
            <i className="fas fa-arrow-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;