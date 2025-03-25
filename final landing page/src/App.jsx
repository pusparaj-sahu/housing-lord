import { useEffect } from 'react';
import Hero from './components/Hero';
import HeroImage from './components/HeroImage';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Showcase from './components/Showcase';
import CtaSection from './components/CtaSection';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 768
    });

    // GSAP animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });
    
    tl.to(["#hero-title", "#hero-subtitle", ".hero-buttons"], {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.5
    });

    gsap.from("#about-section", {
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1.5
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <HeroImage />
      <HowItWorks />
      <About />
      <Showcase />
      <CtaSection />
      <Faq />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
