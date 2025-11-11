import schoolImg from "../assets/projects/school.png";
import phpImg from "../assets/projects/php.png";
import mysqlImg from "../assets/projects/mysql.png";
import reactImg from "../assets/projects/react.png";
import laravelImg from "../assets/projects/laravel.png";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// ======= PROJECT DATA =======
const projects = [
  {
    title: "School Website",
    description: "A modern and fully responsive school website built using HTML, CSS, and Bootstrap.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "#",
    github: "https://github.com/Opi-dev",
    image: schoolImg,
  },
  {
    title: "Pharmacy Management System",
    description: "A dynamicPharmacy Management System app built with PHP and MySQL where users can create and manage Medicine.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    live: "#",
    github: "https://github.com/Opi-dev",
    image: phpImg,
  },
    {
    title: "MySQL Database Dashboard",
    description: "A data management dashboard showcasing analytics and CRUD operations using MySQL.",
    tech: ["MySQL", "PHP", "Bootstrap"],
    live: "#",
    github: "https://github.com/Opi-dev",
    image: mysqlImg,
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive single-page portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "https://github.com/Opi-dev",
    image: reactImg,
  },
  {
    title: "Canteen Management System",
    description: "A web app that automates canteen management — handling menus, orders, and payments efficiently.",
    tech: ["React", "Laravel", "Tailwind CSS", "MySQL", "Bootstrap"],
    live: "#",
    github: "https://github.com/Opi-dev",
    image: laravelImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-400 mb-12 text-center"
      >
        My <span className="text-white">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all duration-300 border border-gray-700 hover:border-blue-400"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-600/20 border border-blue-400/40 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-auto">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <Github size={18} />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
