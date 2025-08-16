import React from 'react';
import { motion } from 'framer-motion';

const categorizedSkills = {
  Languages: [
    { name: 'HTML', level: 95, icon: 'ri-html5-line', color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', level: 90, icon: 'ri-css3-line', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 85, icon: 'ri-javascript-line', color: 'from-yellow-400 to-yellow-500' },
    { name: 'Dart', level: 70, icon: 'ri-flutter-line', color: 'from-blue-400 to-cyan-500' },
  ],
  Frameworks: [
    { name: 'React.js', level: 85, icon: 'ri-reactjs-line', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', level: 75, icon: 'ri-nextjs-line', color: 'from-gray-200 to-gray-400' },
  ],
  Libraries: [
    { name: 'Tailwind CSS', level: 90, icon: 'ri-tailwind-css-line', color: 'from-cyan-400 to-blue-500' },
    { name: 'Material UI', level: 80, icon: 'ri-material-design-line', color: 'from-blue-500 to-blue-600' },
    { name: 'GSAP', level: 65, icon: 'ri-animation-line', color: 'from-green-500 to-green-600' },
    { name: 'Framer Motion', level: 70, icon: 'ri-motion-line', color: 'from-purple-500 to-purple-600' },
  ],
  'Graphic Design': [
    { name: 'Photoshop', level: 70, icon: 'ri-adobe-photoshop-line', color: 'from-blue-500 to-blue-700' },
    { name: 'Illustrator', level: 60, icon: 'ri-adobe-illustrator-line', color: 'from-orange-500 to-orange-600' },
    { name: 'Figma', level: 75, icon: 'ri-figma-line', color: 'from-purple-500 to-pink-500' },
    { name: 'Canva', level: 80, icon: 'ri-palette-line', color: 'from-blue-400 to-blue-600' },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 py-12 md:py-16 min-h-screen flex items-center justify-center"
      id="skills"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative inline-flex items-center gap-3">
            <i className="ri-star-smile-line text-cyan-400"></i>
            <span className="relative">
              My Skills
              <span className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70">Technologies I work with daily</p>
        </motion.div>

        {/* Categories and Skills */}
        <div className="flex flex-col gap-8 md:gap-12">
          {Object.entries(categorizedSkills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <i className={`${getCategoryIcon(category)} text-xl text-cyan-400`}></i>
                <h3 className="text-xl md:text-2xl font-semibold text-white relative pb-2">
                  {category}
                  <span className="absolute bottom-0 left-0 w-12 md:w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20 md:group-hover:w-24"></span>
                </h3>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative p-3 md:p-4 text-center rounded-lg font-medium
                      bg-gradient-to-br ${skill.color}
                      hover:scale-[1.03] transition-all duration-300 shadow-lg cursor-pointer
                      border border-white/10 backdrop-blur-md overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                    <i className={`${skill.icon} text-xl md:text-2xl mb-1 md:mb-2 text-white`}></i>
                    <p className="text-white relative z-10 text-sm md:text-base">{skill.name}</p>

                    {/* Level Bar */}
                    <div className="mt-2 md:mt-3 h-1 md:h-1.5 bg-white/20 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-white rounded-full absolute top-0 left-0 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    {/* Tooltip */}
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white 
                        bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-xl opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300 flex items-center
                        border border-white/10 whitespace-nowrap"
                    >
                      <i className={`${skill.icon} mr-1`}></i>
                      <span>{skill.name} - {skill.level}%</span>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 rotate-45 border-b border-r border-white/10"></div>
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

export default Skills;
