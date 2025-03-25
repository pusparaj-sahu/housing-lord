import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "❓ What is Housing Lord?",
      answer: "💡 A trusted rental platform connecting tenants with verified property owners."
    },
    {
      question: "❓ What are the service fees?",
      answer: "💰 One month's rent split between tenant & owner."
    },
    {
      question: "❓ How do I list my property?",
      answer: "🏡 Register on our platform, add details, and let us do the rest!"
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-16 px-8 max-w-4xl mx-auto bg-[#FFD700]/5 rounded-lg shadow-lg shadow-[#FFD700]/10 border border-[#FFD700]/20" data-aos="fade-up">
      <h2 className="text-center text-4xl text-[#FFD700] mb-8">Frequently Asked Questions</h2>
      <div className="faq-container space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className={`faq-item bg-[#FFD700]/8 border border-[#FFD700]/30 rounded-lg overflow-hidden transition-transform duration-300 hover:translate-x-1 hover:bg-[#FFD700]/12`}
          >
            <div 
              className="faq-question p-6 cursor-pointer flex justify-between items-center transition-all duration-300 hover:bg-[#FFD700]/10"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-[#FFD700] text-lg m-0">{item.question}</h3>
              <span className={`arrow text-[#FFD700] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
            <div 
              className={`faq-answer max-h-0 overflow-hidden transition-max-height duration-300 ${
                activeIndex === index ? 'max-h-[200px]' : ''
              }`}
            >
              <p className="m-0 p-6 pt-0 text-white">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq; 