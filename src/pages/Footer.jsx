import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-900 border-t border-white/10 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Branding */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Ali Huzaifa
            </h2>
            <p className="text-white/70 mt-1 text-sm">
              Frontend Developer | React Specialist
            </p>
          </div>

          {/* Middle Section - Navigation */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/80 hover:text-cyan-400 transition-colors text-sm md:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section - Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors text-xl"
              aria-label="GitHub"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-400 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a 
              href="https://instagram.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-rose-500 transition-colors text-xl"
              aria-label="Instagram"
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Ali Huzaifa. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;