import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Showcase from './components/Showcase/Showcase';
import UnleashPotential from './components/UnleashPotential/UnleashPotential';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    // Initialize AOS with the same settings as the original HTML
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 768
    });

    // Add scroll to top button functionality
    const backToTop = document.querySelector('.back-to-top');
    let scrollTimeout;

    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        if (window.pageYOffset > 300) {
          backToTop?.classList.add('visible');
        } else {
          backToTop?.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <HowItWorks />
          <Showcase />
          <UnleashPotential />
          <FAQ />
        </main>
        <Footer />
        <button 
          className="back-to-top" 
          onClick={scrollToTop} 
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </Router>
  );
};

export default App;
