import React from 'react';
import { motion } from 'framer-motion';

const categorizedSkills = {
  Languages: [
    { name: 'HTML', level: 95, icon: 'ri-html5-line', color: 'from-orange-500 to-orange-700' },
    { name: 'CSS', level: 90, icon: 'ri-css3-line', color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', level: 85, icon: 'ri-javascript-line', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Dart', level: 70, icon: 'ri-flutter-line', color: 'from-blue-400 to-cyan-600' },
  ],
  Frameworks: [
    { name: 'React.js', level: 85, icon: 'ri-reactjs-line', color: 'from-cyan-400 to-blue-600' },
    { name: 'Next.js', level: 75, icon: 'ri-nextjs-line', color: 'from-gray-800 to-gray-600' },
  ],
  Libraries: [
    { name: 'Tailwind CSS', level: 90, icon: 'ri-tailwind-css-line', color: 'from-cyan-400 to-blue-600' },
    { name: 'Material UI', level: 80, icon: 'ri-material-design-line', color: 'from-blue-500 to-blue-700' },
    { name: 'GSAP', level: 65, icon: 'ri-animation-line', color: 'from-green-500 to-green-700' },
    { name: 'Framer Motion', level: 70, icon: 'ri-motion-line', color: 'from-purple-500 to-purple-700' },
  ],
  'Graphic Design': [
    { name: 'Photoshop', level: 70, icon: 'ri-adobe-photoshop-line', color: 'from-blue-600 to-blue-800' },
    { name: 'Illustrator', level: 60, icon: 'ri-adobe-illustrator-line', color: 'from-orange-500 to-orange-700' },
    { name: 'Figma', level: 75, icon: 'ri-figma-line', color: 'from-purple-500 to-pink-600' },
    { name: 'Canva', level: 80, icon: 'ri-palette-line', color: 'from-blue-400 to-blue-600' },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 py-12 md:py-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950"
      id="skills"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 relative">
            <span className="relative inline-block">
              Skills & Expertise
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Categories and Skills */}
        <div className="flex flex-col gap-10 md:gap-14">
          {Object.entries(categorizedSkills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Category title */}
              <div className="flex items-center gap-4 mb-6 md:mb-8 pl-2">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(category)}`}>
                  <i className={`${getCategoryIcon(category)} text-xl text-white`}></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {category}
                </h3>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative p-4 md:p-5 text-center rounded-xl font-medium
                      bg-gray-800/30 backdrop-blur-lg border border-gray-700/50
                      hover:border-cyan-400/30 transition-all duration-300 shadow-xl cursor-pointer
                      overflow-hidden group/skill`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover/skill:opacity-10 transition-opacity duration-500 ${skill.color}`}></div>
                    
                    {/* Icon with gradient background */}
                    <div className={`inline-flex p-3 rounded-xl mb-3 md:mb-4 bg-gradient-to-r ${skill.color}`}>
                      <i className={`${skill.icon} text-2xl md:text-3xl text-white`}></i>
                    </div>
                    
                    <p className="text-white relative z-10 text-base md:text-lg font-semibold mb-3">{skill.name}</p>

                    {/* Level Bar */}
                    <div className="mt-2 md:mt-3 h-2 bg-gray-700/70 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                      ></motion.div>
                    </div>
                    
                    {/* Percentage indicator */}
                    <div className="mt-2 text-xs font-medium text-gray-400">
                      {skill.level}% proficiency
                    </div>

                    {/* Hover tooltip */}
                    <div
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-2 text-sm text-white 
                        bg-gray-900 rounded-lg shadow-xl opacity-0 
                        group-hover/skill:opacity-100 transition-all duration-300 flex items-center
                        border border-cyan-400/20 whitespace-nowrap z-20"
                    >
                      <span>{skill.name} Mastery</span>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45 border-b border-r border-cyan-400/20"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Category Icon helper
function getCategoryIcon(category) {
  switch (category) {
    case 'Languages': return 'ri-code-s-slash-line';
    case 'Frameworks': return 'ri-stack-line';
    case 'Libraries': return 'ri-box-3-line';
    case 'Graphic Design': return 'ri-paint-brush-line';
    default: return 'ri-code-box-line';
  }
}

// Category Color helper
function getCategoryColor(category) {
  switch (category) {
    case 'Languages': return 'from-orange-500 to-orange-700';
    case 'Frameworks': return 'from-blue-500 to-blue-700';
    case 'Libraries': return 'from-cyan-400 to-blue-600';
    case 'Graphic Design': return 'from-purple-500 to-purple-700';
    default: return 'from-gray-600 to-gray-800';
  }
}

export default Skills;