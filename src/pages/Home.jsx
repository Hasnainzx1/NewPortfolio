import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="w-full min-h-screen text-white bg-gradient-to-br from-gray-900 via-black to-gray-950"
    >
      <div className="h-full container mx-auto px-4 lg:grid lg:grid-cols-[0.42fr_0.58fr]">
        
        {/* Left Side */}
        <div className="leftSide py-12 lg:py-0 lg:ml-12 flex flex-col justify-center items-start lg:px-6 gap-8 lg:gap-16 lg:sticky lg:top-0 lg:h-screen">
          
          <motion.div variants={fadeInUp} className="introText">
            <h1 className="MyName text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
              Ali Huzaifa
            </h1>
            <h2 className="MyJob font-bold text-sm md:text-base text-gray-400 hover:text-white transition duration-300 mt-3 group">
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                Front End Developer
              </span>
              <span className="mx-2 text-cyan-500">|</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                React Specialist
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full max-w-md bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 text-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-400/30"
          >
            <h3 className="text-white text-lg font-semibold mb-3 flex items-center">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Short Intro
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Front-End Developer specializing in React.js with a strong focus on UI Design, Tailwind CSS, and Material UI. Proficient in JavaScript, Node.js, and building responsive, modern web applications. Open to remote and on-site roles.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="icon_Buttons ml-1 flex gap-4 text-2xl">
            {[
              { icon: 'ri-instagram-fill', href: 'https://www.instagram.com/alihuzaifa2112006/', color: 'hover:text-rose-400', label: 'Instagram' },
              { icon: 'ri-github-fill', href: 'https://github.com/your-github-profile', color: 'hover:text-white', label: 'GitHub' },
              { icon: 'ri-linkedin-box-fill', href: 'https://www.linkedin.com/in/ali-huzaifa-92137a292/', color: 'hover:text-blue-400', label: 'LinkedIn' },
              { icon: 'ri-twitter-x-fill', href: '#', color: 'hover:text-cyan-400', label: 'Twitter' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target='_blank' 
                rel="noopener noreferrer"
                className={`text-gray-500 ${social.color} transition-all duration-300 hover:scale-110 p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30`}
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="rigthSide w-full flex items-start justify-center pb-12 lg:pb-0 lg:pt-20 lg:pr-10">
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-3xl bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 md:p-8 text-gray-300 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-cyan-400/30"
          >
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Meet Ali Huzaifa
            </h3>

            <div className="space-y-6">
              <p className="text-sm md:text-base leading-relaxed text-left">
                I'm Ali Huzaifa, a passionate Front-End Developer with over 2 years of experience. I've built modern web apps using React.js, Next.js, Tailwind CSS, and Node.js. I've worked at ITG UAE and collaborated with clients from Germany and Bangladesh.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-left">
                Alongside development, I'm skilled in UI/UX, graphics design (LRN certified), Photoshop, and Illustrator. I've also handled freelance projects, Amazon VA tasks, and led teams in call centers. I enjoy using GSAP, Framer Motion, and have basic knowledge of Three.js for interactive designs. Always open to remote opportunities and tech-driven teams.
              </p>
            </div>

            <div className="mt-8">
              <motion.button
                onClick={toggleDetails}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer flex items-center"
              >
                {showDetails ? (
                  <>
                    <i className="ri-arrow-up-s-line mr-2"></i>
                    Hide Details
                  </>
                ) : (
                  <>
                    <i className="ri-arrow-down-s-line mr-2"></i>
                    More Details
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {[
                        { title: "Name", value: "Ali Huzaifa", icon: "ri-user-3-line" },
                        { title: "Age", value: "19", icon: "ri-calendar-line" },
                        { title: "Qualification", value: "ICS + Diploma in MERN Stack", icon: "ri-graduation-cap-line" },
                        { title: "Date of Birth", value: "2nd November 2006", icon: "ri-cake-line" },
                        { title: "Goals", value: "To become a successful Software Engineer", icon: "ri-flag-line" },
                        { title: "Skills", value: "Web Development, Graphics Design", icon: "ri-code-box-line" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300"
                        >
                          <div className="flex items-center mb-2">
                            <i className={`${item.icon} text-cyan-400 mr-2`}></i>
                            <h4 className="font-bold text-white/90 text-xs uppercase tracking-wider">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm ml-6 text-white/80">{item.value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Page Links */}
            <div className="pageLinks mt-10">
              <ul className="UlofLinks flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  { name: "Home", icon: "ri-home-4-line" },
                  { name: "Skills", icon: "ri-code-line" },
                  { name: "Experiences", icon: "ri-briefcase-line" },
                  { name: "Projects", icon: "ri-folder-line" },
                  { name: "Contact", icon: "ri-contacts-line" }
                ].map((item, index) => (
                  <li key={index}>
                    <motion.a
                      href={`#${item.name.toLowerCase()}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block px-5 py-2.5 rounded-xl text-white text-sm font-medium 
                      bg-gradient-to-r from-cyan-600/80 to-blue-700/80 
                      hover:shadow-lg hover:shadow-cyan-500/20
                      transition-all duration-300 shadow-md border border-cyan-500/20"
                    >
                      <i className={`${item.icon} mr-2`}></i>
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;