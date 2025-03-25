import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section py-16 px-8 max-w-6xl mx-auto" data-aos="fade-up">
      <h2 className="text-center text-4xl text-[#FFD700] mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-[#FFD700]/5 rounded-lg shadow-lg shadow-[#FFD700]/10 border border-[#FFD700]/20 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#FFD700] mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#FFD700] mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-[#FFD700] mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#FFD700] mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg text-white focus:outline-none focus:border-[#FFD700]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFD700] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#FFD700]/90 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-[#FFD700]/5 rounded-lg shadow-lg shadow-[#FFD700]/10 border border-[#FFD700]/20 p-8">
          <h3 className="text-2xl text-[#FFD700] mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-[#FFD700] text-2xl">📍</div>
              <div>
                <h4 className="text-[#FFD700] font-semibold mb-1">Address</h4>
                <p className="text-white">123 Luxury Lane, Golden City, GC 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-[#FFD700] text-2xl">📞</div>
              <div>
                <h4 className="text-[#FFD700] font-semibold mb-1">Phone</h4>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-[#FFD700] text-2xl">✉️</div>
              <div>
                <h4 className="text-[#FFD700] font-semibold mb-1">Email</h4>
                <p className="text-white">info@housinglord.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-[#FFD700] text-2xl">⏰</div>
              <div>
                <h4 className="text-[#FFD700] font-semibold mb-1">Business Hours</h4>
                <p className="text-white">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 