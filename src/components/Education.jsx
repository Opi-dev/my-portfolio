import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science (BSc)",
    subject: "Computer Science & Engineering",
    institution: "Green University of Bangladesh (On going)",
  },
  {
    degree: "Diploma in Engineering",
    subject: "Computer Technology",
    institution: "Pabna Polytechnic Institute",
    details: "CGPA: 3.61 out of 4 | 2021",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    subject: "Science",
    institution: "Mirkamary Adarsha High School",
    details: "GPA: 4.28 out of 5 | 2016",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-400 mb-12 text-center"
      >
        My <span className="text-white">Education</span>
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

        {/* Education Items */}
        <div className="space-y-24 relative z-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div
                className={`bg-gray-800 p-8 rounded-2xl shadow-md border border-transparent hover:border-blue-400 transition-all duration-300 w-[550px] z-10
                ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
              >
                <h3 className="text-2xl font-semibold text-blue-300 mb-2 whitespace-nowrap">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 text-lg whitespace-nowrap">
                  {edu.subject}
                </p>
                <p className="text-gray-400 text-base mt-1 whitespace-nowrap">
                  {edu.institution}
                </p>
                {edu.details && (
                  <p className="text-gray-500 text-sm mt-2">{edu.details}</p>
                )}
              </div>

              {/* Icon (Perfectly Centered on Timeline) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-[5px] border-blue-500 rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-20">
                <GraduationCap className="text-blue-400 w-7 h-7" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
