import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950"
      id="contact"
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 relative">
            <span className="relative inline-block">
              Get In Touch
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-400/30"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mr-3">
                <i className="ri-information-line text-white"></i>
              </div>
              Contact Information
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/20 border border-gray-700/30">
                <div className="p-2 rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600">
                  <i className="ri-phone-line text-white"></i>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                  <a href="tel:03178386880" className="text-white hover:text-cyan-400 transition-colors text-base">
                    +92 317 8386880
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/20 border border-gray-700/30">
                <div className="p-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600">
                  <i className="ri-mail-line text-white"></i>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Email</h4>
                  <a href="mailto:alihuzaifa2nov2006@gmail.com" className="text-white hover:text-cyan-400 transition-colors text-base">
                    alihuzaifa2nov2006@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/20 border border-gray-700/30">
                <div className="p-2 rounded-md bg-gradient-to-r from-purple-500 to-purple-600">
                  <i className="ri-map-pin-line text-white"></i>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Location</h4>
                  <p className="text-white text-base">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700/30">
              <h4 className="text-sm font-medium text-gray-400 mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: "ri-instagram-fill", href: "https://www.instagram.com/alihuzaifa2112006/", color: "hover:text-rose-400", label: "Instagram" },
                  { icon: "ri-github-fill", href: "https://github.com/your-github-profile", color: "hover:text-white", label: "GitHub" },
                  { icon: "ri-linkedin-box-fill", href: "https://www.linkedin.com/in/ali-huzaifa-92137a292/", color: "hover:text-blue-400", label: "LinkedIn" },
                  { icon: "ri-twitter-x-fill", href: "#", color: "hover:text-cyan-400", label: "Twitter" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-gray-500 text-xl p-2 rounded-lg bg-gray-800/30 border border-gray-700/30 ${social.color} transition-all duration-300 hover:scale-110 hover:border-cyan-400/30`}
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-400/30"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center">
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 mr-3">
                <i className="ri-send-plane-line text-white"></i>
              </div>
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800/20 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800/20 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800/20 border border-gray-700/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium py-3 px-5 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="ri-send-plane-fill"></i>
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;