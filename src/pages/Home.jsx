import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';

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
      className="w-full min-h-screen text-white"
    >
      <div className="h-full container mx-auto px-4 lg:grid lg:grid-cols-[0.42fr_0.58fr]">
        
        {/* Left Side */}
        <div className="leftSide py-12 lg:py-0 lg:ml-12 flex flex-col justify-center items-start lg:px-6 gap-8 lg:gap-16 lg:sticky lg:top-0 lg:h-screen">
          
          <motion.div variants={fadeInUp} className="introText">
            <h1 className="MyName text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
              Ali Huzaifa
            </h1>
            <h2 className="MyJob font-roboto font-bold text-sm md:text-base text-white/80 hover:text-white transition duration-300 mt-3 group">
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                Front End Developer
              </span>
              <span className="mx-2">|</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                React Js
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-6 text-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <h3 className="text-white/80 text-lg font-semibold mb-3 flex items-center">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Short Intro
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Front-End Developer specializing in React.js with a strong focus on UI Design, Tailwind CSS, and Material UI. Proficient in JavaScript, Node.js, and building responsive, modern web applications. Open to remote and on-site roles.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="icon_Buttons ml-1 flex gap-4 text-white/80 text-2xl">
            <a href="https://www.instagram.com/alihuzaifa2112006/" target='_blank' rel="noopener noreferrer" className="hover:text-rose-500 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://github.com/your-github-profile" target='_blank' rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/ali-huzaifa-92137a292/" target='_blank' rel="noopener noreferrer" className="hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="rigthSide w-full flex items-start justify-center pb-12 lg:pb-0 lg:pt-20 lg:pr-10">
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-3xl bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 text-white/80 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-xl lg:hover:brightness-110"
          >
            <h3 className="text-white/80 text-xl md:text-2xl font-semibold mb-6 flex items-center">
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
                className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white text-sm px-5 py-2.5 rounded-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-lg hover:brightness-110 cursor-pointer flex items-center"
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-3">
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
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300"
                        >
                          <div className="flex items-center mb-2">
                            <i className={`${item.icon} text-cyan-400 mr-2`}></i>
                            <h4 className="font-bold text-white/90 text-xs uppercase tracking-wider">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm ml-6">{item.value}</p>
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
                {["Home", "Skills", "Experiences", "Projects", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-5 py-2.5 rounded-lg text-white text-sm font-medium 
                      bg-gradient-to-br from-cyan-600/80 to-blue-700/80 
                      hover:scale-105 hover:brightness-110 hover:shadow-md
                      transition-all duration-300 shadow-sm items-center"
                    >
                      {index === 0 && <i className="ri-home-4-line mr-2"></i>}
                      {index === 1 && <i className="ri-code-line mr-2"></i>}
                      {index === 2 && <i className="ri-briefcase-line mr-2"></i>}
                      {index === 3 && <i className="ri-folder-line mr-2"></i>}
                      {index === 4 && <i className="ri-contacts-line mr-2"></i>}
                      {item}
                    </a>
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
