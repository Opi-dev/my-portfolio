import React from "react";
import { Facebook, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-300 pt-16 pb-8 px-6 md:px-12 overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-10 border-b border-blue-900 pb-10">
        
        {/* Left Column: Logo + About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="Opi-Dev Logo"
              className="w-14 h-14 rounded-lg object-cover"
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h2 className="text-xl font-bold text-white">Opi-Dev</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            Turning your vision into reality — building digital experiences that
            reflect creativity, functionality, and innovation.
          </p>
        </div>

        {/* Services / Skills */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">SERVICES</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web Design</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Full Stack Project</li>
            <li>Portfolio Design</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Floating Animated Social Box */}
        <motion.div
          animate={{
            y: [-10, 10],
            boxShadow: [
              "0 0 15px rgba(59,130,246,0.2)",
              "0 0 25px rgba(147,51,234,0.4)",
              "0 0 15px rgba(59,130,246,0.2)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-md shadow-lg overflow-hidden hover:shadow-blue-500/50 transition-shadow will-change-transform"
        >
          <div className="bg-[#112240] text-white font-semibold text-center py-2 tracking-wide">
            Nazmul Haque Opi
          </div>
          <div className="flex flex-col items-center py-4">
            <p className="text-white font-semibold mb-3">Follow Me:</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/nazmulhaque.opi"
                target="_blank"
                className="w-9 h-9 bg-gray-800 text-blue-400 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nazmul-haque-opi-0a7700237/"
                target="_blank"
                className="w-9 h-9 bg-gray-800 text-blue-400 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Opi-dev"
                target="_blank"
                className="w-9 h-9 bg-gray-800 text-blue-400 flex items-center justify-center rounded-full hover:bg-gray-700 hover:text-white transition"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Opi-Dev. All Rights Reserved.</p>
        <p className="flex items-center gap-2 mt-3 md:mt-0">
          <span className="text-blue-400">💻</span> Developed by{" "}
          <span className="text-blue-400 font-medium">Nazmul Haque Opi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
