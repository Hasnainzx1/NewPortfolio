import React from 'react';

const projects = [
  {
    id: 1,
    title: "Quick Notes App",
    description: "A real-time note-taking application with rich text editing capabilities and instant synchronization across devices.",
    stack: ["React", "Tailwind CSS", "Firebase", "Quill Editor"],
    link: "https://quicknotesapp123.netlify.app/",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Full-featured online shopping platform with product catalog, cart functionality, and secure checkout process.",
    stack: ["React", "Tailwind CSS", "Context API", "React Router"],
    link: "https://ecommercekahard.netlify.app/",
   image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Productivity application for organizing tasks with drag-and-drop functionality and priority tagging.",
    stack: ["React", "Tailwind CSS", "Firebase", "React Beautiful DnD"],
    link: "https://todo-application-final.vercel.app/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "Financial management tool for tracking expenses, income, and generating spending reports.",
    stack: ["React", "Tailwind CSS", "Chart.js", "Firebase"],
    link: "https://smarttrackerbyali.netlify.app/",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80"
  },
  {
    id: 5,
    title: "Currency Converter",
    description: "Real-time currency conversion tool with up-to-date exchange rates and historical data.",
    stack: ["React", "Tailwind CSS", "ExchangeRate API", "Axios"],
    link: "https://currency-converter-psi-blond.vercel.app/",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Weather Application",
    description: "Weather forecasting app with location detection, 5-day forecasts, and interactive maps.",
    stack: ["React", "Tailwind CSS", "OpenWeather API", "Geolocation API"],
    link: "https://weatherapplicationbyali.netlify.app/",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
  },
  {
  id: 7,
  title: "Password Generator",
  description: "Secure password generator with customizable options (length, character types) and strength meter.",
  stack: ["React", "Tailwind CSS", "Clipboard API", "Crypto Security"],
  link: "https://beamish-crepe-98b66f.netlify.app/",
  image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
}
];

const Projects = () => {
  return (
    <div className="w-full px-4 py-12 md:py-20 min-h-screen flex items-center justify-center text-white " id="projects">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative inline-flex items-center gap-3">
            <i className="ri-folders-line text-cyan-400"></i>
            <span className="relative">
              My Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70">A collection of my best work and personal projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-xl hover:brightness-110 ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-white/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-sm font-medium hover:brightness-110 transition-all"
                  >
                    <i className="ri-external-link-line"></i>
                    Live Demo
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;