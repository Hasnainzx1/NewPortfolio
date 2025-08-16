import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "React Developer",
    company: "ITG UAE",
    duration: "Nov 2024 - Present",
    description: [
      "Developing modern web applications using React.js and Material UI",
      "Implementing responsive designs with Tailwind CSS",
      "Collaborating with international clients from Germany and Bangladesh",
      "Building reusable components and optimizing performance"
    ],
    icon: "ri-reactjs-line",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Akays Technologies",
    duration: "May 2024 - Oct 2024 (6 months)",
    description: [
      "Worked with React.js and Tailwind CSS",
      "Developed user interfaces for web applications",
      "Implemented state management solutions",
      "Collaborated with design teams"
    ],
    icon: "ri-code-box-line",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    role: "Internship",
    company: "Data Triox",
    duration: "Jan 2024 - Apr 2024 (4 months)",
    description: [
      "Learned React.js fundamentals",
      "Worked on real-world projects",
      "Gained experience in frontend development",
      "Participated in code reviews"
    ],
    icon: "ri-graduation-cap-line",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    role: "Team Lead",
    company: "Call Center",
    duration: "Jun 2021 - Dec 2022 (1.5 years)",
    description: [
      "Managed a team of 10+ representatives",
      "Handled customer service operations",
      "Implemented process improvements",
      "Trained new team members"
    ],
    icon: "ri-customer-service-2-line",
    color: "from-orange-500 to-amber-500"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Experiences = () => {
  return (
    <motion.div
      className="w-full px-4 py-12 md:py-20 min-h-screen flex items-center justify-center text-white"
      id="experiences"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative inline-flex items-center gap-3">
            <i className="ri-briefcase-line text-cyan-400"></i>
            <span className="relative">
              Work Experience
              <span className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70">My professional journey and career milestones</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-8 w-full md:w-[calc(50%-3rem)] ${
                index % 2 === 0 ? 'md:ml-auto md:pl-0 md:pr-8' : 'md:mr-auto md:pr-0 md:pl-8'
              }`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className={`absolute top-5 -left-1 md:top-5 ${index % 2 === 0 ? 'md:-right-1 md:left-auto' : 'md:-left-1'} w-3 h-3 rounded-full bg-cyan-400 z-10`}></div>

              {/* Experience Card */}
              <div className={`bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110`}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} h-fit`}>
                    <i className={`${exp.icon} text-xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-white/80 mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.duration}</span>
                    </div>
                    <ul className="space-y-2 text-sm md:text-base">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <i className="ri-arrow-right-s-line text-cyan-400 mt-1 mr-2"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experiences;
