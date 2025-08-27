import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    "title": "Full Stack Job Finder Application",
    "description": "A comprehensive job finder application to help users discover and apply for new opportunities. The app provides a user-friendly interface to browse job listings and manage applications.",
    "stack": [
      "React",
      "Material UI",
      "Tailwind CSS",
      "Firebase"
    ],
    "link": null,
    "image": "/Images/Hire.png",
     featured: true
  },
  {
    title: "Quick Notes App",
    description: "A real-time note-taking application with rich text editing capabilities and instant synchronization across devices.",
    stack: ["React", "Tailwind CSS", "Firebase", "Quill Editor"],
    link: "https://quicknotesapp123.netlify.app/",
    image: "/Images/Note.png",
   
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion tool with up-to-date exchange rates and historical data.",
    stack: ["React", "Tailwind CSS", "ExchangeRate API", "Axios"],
    link: "https://currency-converter-psi-blond.vercel.app/",
    image: "/Images/Currency.png"
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 py-12 md:py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950"
      id="projects"
    >
      <div className="w-full max-w-7xl mx-auto">
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
              Featured Projects
              <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my creative solutions and technical implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl overflow-hidden h-full transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-bold px-3 py-1 rounded-full z-20">
                      <i className="ri-star-fill mr-1"></i> Featured
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 md:p-6">
                  <p className="text-gray-300 mb-4 md:mb-5">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1.5 bg-gray-700/50 rounded-full border border-gray-600/50 text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.link || "#"}
                      target={project.link ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        project.link 
                          ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:brightness-110 shadow-lg hover:shadow-cyan-500/20" 
                          : "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <i className={`ri-${project.link ? 'external-link-line' : 'forbid-line'}`}></i>
                      {project.link ? "Live Demo" : "Coming Soon"}
                    </a>
                    
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 bg-gray-700/30 border border-gray-600/50 hover:bg-gray-700/50 transition-all">
                      <i className="ri-github-line"></i>
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700/50 text-gray-300 font-medium hover:from-gray-700/50 hover:to-gray-800/50 transition-all"
          >
            <i className="ri-github-fill"></i>
            View More on GitHub
          </a> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;