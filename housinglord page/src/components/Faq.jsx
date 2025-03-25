import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 768
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes Housing Lord different from other rental services?",
      answer: "Housing Lord stands out with our commitment to transparency, professional service, and customer satisfaction. We offer a streamlined process with no hidden costs, dedicated support, and a focus on quality properties."
    },
    {
      question: "How does the rental process work?",
      answer: "Our process is simple: 1) Browse our curated properties, 2) Schedule a viewing, 3) Submit your application, 4) Complete verification, 5) Sign the agreement and move in. We handle all the paperwork and verification processes."
    },
    {
      question: "What documents do I need to rent a property?",
      answer: "You'll need: 1) Valid ID proof (Aadhar/PAN), 2) Address proof, 3) Employment proof, 4) Bank statements, 5) Previous rental history (if applicable). We'll guide you through the document collection process."
    },
    {
      question: "How long does the rental process take?",
      answer: "Typically, the entire process from application to move-in takes 3-5 working days, depending on document verification and agreement finalization. We work efficiently to minimize delays."
    },
    {
      question: "What happens if I need to break the lease?",
      answer: "We understand that circumstances change. Our flexible lease terms and dedicated support team will help you navigate the process smoothly. Contact us to discuss your situation."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className={`toggle-icon ${openIndex === index ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 