import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your email sending logic here
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20 text-white" id="contact">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative inline-flex items-center gap-3">
            <i className="ri-contacts-line text-cyan-400"></i>
            <span className="relative">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70">Feel free to reach out for collaborations or just a friendly hello</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
              <i className="ri-information-line text-blue-400 mr-2"></i>
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <i className="ri-phone-line text-cyan-400 mt-1"></i>
                <div>
                  <h4 className="text-sm font-medium text-white/80">Phone</h4>
                  <a href="tel:03178386880" className="text-white hover:text-cyan-400 transition-colors">
                    +92 317 8386880
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="ri-mail-line text-cyan-400 mt-1"></i>
                <div>
                  <h4 className="text-sm font-medium text-white/80">Email</h4>
                  <a href="mailto:alihuzaifa2nov2006@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                    alihuzaifa2nov2006@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="ri-map-pin-line text-cyan-400 mt-1"></i>
                <div>
                  <h4 className="text-sm font-medium text-white/80">Location</h4>
                  <p className="text-white">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-white/80 mb-3">Connect with me</h4>
              <div className="flex gap-4 text-xl">
                <a href="https://www.instagram.com/alihuzaifa2112006/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-all">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
                  <i className="ri-github-fill"></i>
                </a>
                <a href="https://www.linkedin.com/in/ali-huzaifa-92137a292/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center">
              <i className="ri-send-plane-line text-blue-400 mr-2"></i>
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium py-2.5 px-5 rounded-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="ri-send-plane-fill"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;