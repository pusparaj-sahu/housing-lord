import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HowItWorks.css';

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  const tenantSteps = [
    { icon: '🏡', title: 'Step 1', description: 'Browse verified properties' },
    { icon: '📞', title: 'Step 2', description: 'Connect with property owners' },
    { icon: '✅', title: 'Step 3', description: 'Complete legal formalities' },
    { icon: '🎉', title: 'Step 4', description: 'Move in stress-free' }
  ];

  const ownerSteps = [
    { icon: '📌', title: 'Step 1', description: 'List your property' },
    { icon: '🔍', title: 'Step 2', description: 'Get tenant verification' },
    { icon: '💰', title: 'Step 3', description: 'Set the best rental price' },
    { icon: '🤝', title: 'Step 4', description: 'Rent out stress-free' }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">How It Works?</h2>
        
        <div className="process-map">
          <div className="tenant-path">
            <h3>For Tenants</h3>
            <div className="steps">
              {tenantSteps.map((step, index) => (
                <div 
                  className="step" 
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  key={`tenant-${index}`}
                >
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {index < tenantSteps.length - 1 && <div className="connector"></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="owner-path">
            <h3>For Owners</h3>
            <div className="steps">
              {ownerSteps.map((step, index) => (
                <div 
                  className="step" 
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  key={`owner-${index}`}
                >
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {index < ownerSteps.length - 1 && <div className="connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cta-button" data-aos="fade-up">
          <button className="start-journey-btn">Start Your Journey Today!</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 