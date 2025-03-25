import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Housing Lord?",
      answer: "A trusted rental platform connecting tenants with verified property owners."
    },
    {
      question: "What are the service fees?",
      answer: "One month's rent split between tenant & owner."
    },
    {
      question: "How do I list my property?",
      answer: "Register on our platform, add details, and let us do the rest!"
    }
  ];

  return (
    <section className="faq-section" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>❓ {faq.question}</h3>
              <span className="arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>💡 {faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 