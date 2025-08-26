import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 via-black to-gray-950 border-t border-gray-700/30 py-10 md:py-14 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Left Section - Branding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              Ali Huzaifa
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Frontend Developer & UI/UX Enthusiast
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Crafting digital experiences with code and creativity
            </p>
          </motion.div>

          {/* Middle Section - Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Right Section - Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-5"
          >
            {[
              { icon: 'ri-github-fill', label: 'GitHub', href: 'https://github.com/yourusername', color: 'hover:text-white' },
              { icon: 'ri-linkedin-box-fill', label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', color: 'hover:text-blue-400' },
              { icon: 'ri-instagram-fill', label: 'Instagram', href: 'https://instagram.com/yourprofile', color: 'hover:text-rose-400' },
              { icon: 'ri-twitter-x-fill', label: 'Twitter', href: 'https://twitter.com/yourprofile', color: 'hover:text-gray-300' }
            ].map((social, index) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-gray-500 ${social.color} transition-all duration-300 text-xl md:text-2xl p-2 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 hover:scale-110`}
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-gray-700/30 text-center flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Ali Huzaifa. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Built with</span>
            <div className="flex gap-1">
              <i className="ri-reactjs-line text-cyan-400"></i>
              <i className="ri-tailwind-css-line text-blue-400"></i>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            Made with <i className="ri-heart-fill text-rose-500"></i> by Ali Huzaifa
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;