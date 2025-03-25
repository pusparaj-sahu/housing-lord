import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faPhone,
  faFileSignature,
  faCheck,
  faSearch,
  faUserCheck,
  faCoins,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  const tenantSteps = [
    {
      icon: faHome,
      step: "Step 1",
      title: "Browse verified properties",
      color: "#4CAF50"
    },
    {
      icon: faPhone,
      step: "Step 2",
      title: "Connect with property owners",
      color: "#FF4081"
    },
    {
      icon: faFileSignature,
      step: "Step 3",
      title: "Complete legal formalities",
      color: "#00BCD4"
    },
    {
      icon: faCheck,
      step: "Step 4",
      title: "Move in stress-free",
      color: "#FFD700"
    }
  ];

  const ownerSteps = [
    {
      icon: faSearch,
      step: "Step 1",
      title: "List your property",
      color: "#FF5722"
    },
    {
      icon: faUserCheck,
      step: "Step 2",
      title: "Get tenant verification",
      color: "#2196F3"
    },
    {
      icon: faCoins,
      step: "Step 3",
      title: "Set the best rental price",
      color: "#FFC107"
    },
    {
      icon: faHandshake,
      step: "Step 4",
      title: "Rent out stress-free",
      color: "#4CAF50"
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">How It Works</h2>
        
        <div className="timeline-container">
          <div className="timeline-section" data-aos="fade-right">
            <h3 className="timeline-title">For Tenants</h3>
            <div className="timeline">
              {tenantSteps.map((step, index) => (
                <div 
                  className="timeline-item" 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-icon" style={{ backgroundColor: `${step.color}15` }}>
                    <FontAwesomeIcon 
                      icon={step.icon} 
                      style={{ color: step.color }}
                    />
                  </div>
                  <div className="timeline-content">
                    <h4 className="step-number" style={{ color: step.color }}>{step.step}</h4>
                    <p className="step-title">{step.title}</p>
                  </div>
                  {index < tenantSteps.length - 1 && <div className="timeline-line" />}
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-section" data-aos="fade-left">
            <h3 className="timeline-title">For Owners</h3>
            <div className="timeline">
              {ownerSteps.map((step, index) => (
                <div 
                  className="timeline-item" 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-icon" style={{ backgroundColor: `${step.color}15` }}>
                    <FontAwesomeIcon 
                      icon={step.icon} 
                      style={{ color: step.color }}
                    />
                  </div>
                  <div className="timeline-content">
                    <h4 className="step-number" style={{ color: step.color }}>{step.step}</h4>
                    <p className="step-title">{step.title}</p>
                  </div>
                  {index < ownerSteps.length - 1 && <div className="timeline-line" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 