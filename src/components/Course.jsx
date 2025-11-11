import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X, CheckSquare } from "lucide-react";

// ===== COURSE DATA =====
const courses = [
  // 🟦 IsDB-BISEW
  {
    title: "IsDB-BISEW IT Scholarship Programme",
    subtitle: "Web Application Development using Laravel & React",
    institution: "IsDB-BISEW Foundation",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    type: "table",
    modules: [
      { module: "Module - 01", description: "Computer Fundamentals", hours: 40 },
      { module: "Module - 02", description: "HTML5, Bootstrap, JavaScript", hours: 100 },
      { module: "Module - 03", description: "Database Driven Web Application using PHP, MySQL, jQuery", hours: 160 },
      { module: "Module - 04", description: "React", hours: 60 },
      { module: "Module - 05", description: "Laravel", hours: 100 },
    ],
  },
  // 🟩 Industrial Attachment
  {
    title: "Industrial Attachment",
    subtitle: "Professional Web Design",
    institution: "Creative IT Institute",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    type: "curriculum",
    curriculum: [
      "HTML5",
      "CSS3",
      "Design To HTML",
      "CSS3 Animation Effect",
      "JavaScript",
      "JQuery",
      "Bootstrap Latest Version",
      "Marketplace Related Classes",
    ],
  },
  // 🟨 Computer Application
  {
    title: "Bureau of Manpower Employment and Training",
    subtitle: "Computer Application with Internet",
    institution: "Technical Training Centre, Pabna",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    type: "ca-table",
    modules: [
      { no: 1, name: "Computer Fundamentals & Hardware", duration: "4 Weeks", hours: 96 },
      { no: 2, name: "Microsoft Word", duration: "3 Weeks", hours: 72 },
      { no: 3, name: "Microsoft Excel", duration: "4 Weeks", hours: 96 },
      { no: 4, name: "Microsoft PowerPoint", duration: "2 Weeks", hours: 48 },
      { no: 5, name: "Internet & Email Application", duration: "3 Weeks", hours: 72 },
      { no: 6, name: "Database Basics / MS Access (Optional)", duration: "2 Weeks", hours: 48 },
      { no: 7, name: "Project Work & Practical Assessment", duration: "4 Weeks", hours: 96 },
    ],
    totalWeeks: "24 Weeks (6 Months)",
    totalHours: "≈ 576 Hours",
  },
];

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // 🧭 Lock body scroll when modal open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [selectedCourse]);

  // Modal animation variants 🎬
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.4 } },
  };

  return (
    <section id="course" className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-400 mb-16 text-center"
      >
        My <span className="text-white">Courses</span>
      </motion.h2>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.06 }}
            className={`relative p-[2px] rounded-2xl bg-gradient-to-r ${course.gradient} shadow-lg transition-all duration-500`}
          >
            <div className="bg-gray-900 rounded-2xl p-8 h-full hover:bg-opacity-90 transition-all duration-500 flex flex-col justify-between cursor-pointer">
              <div>
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-400 w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-100 whitespace-normal">
                    {course.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-base mb-2">{course.subtitle}</p>
                <p className="text-gray-500 text-sm">{course.institution}</p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 15px rgba(59,130,246,0.7)",
                  y: -2,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCourse(course)}
                className="mt-6 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium shadow-md hover:shadow-blue-500/50 transition-all duration-300"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========== MODAL ========== */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-gray-800 p-8 rounded-2xl max-w-3xl w-full shadow-2xl overflow-y-auto max-h-[90vh] border border-blue-500/20"
            >
              {/* Gradient Header */}
              <div
                className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${selectedCourse.gradient}`}
              ></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              >
                <X size={26} />
              </button>

              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-400 mb-6 mt-3">
                {selectedCourse.title}
              </h3>

              {/* === TABLE (IsDB-BISEW) === */}
              {selectedCourse.type === "table" && (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-600 text-blue-300">
                      <th className="p-3">Module</th>
                      <th className="p-3">Description</th>
                      <th className="p-3 text-right">Duration (Hours)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCourse.modules.map((m, i) => (
                      <tr key={i} className="border-b border-gray-700 hover:bg-gray-700/40 transition">
                        <td className="p-3">{m.module}</td>
                        <td className="p-3">{m.description}</td>
                        <td className="p-3 text-right">{m.hours}</td>
                      </tr>
                    ))}
                    <tr className="font-semibold text-blue-400">
                      <td></td>
                      <td className="text-right p-3">Full Course Duration</td>
                      <td className="text-right p-3">
                        {selectedCourse.modules.reduce((a, b) => a + b.hours, 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {/* === CURRICULUM (Industrial) === */}
              {selectedCourse.type === "curriculum" && (
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">
                    Course Curriculum
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.curriculum.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center bg-gray-700/40 rounded-lg px-4 py-2 hover:bg-gray-700 transition"
                      >
                        <CheckSquare className="text-green-400 mr-3 w-5 h-5" />
                        <span className="text-gray-200">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* === COMPUTER APPLICATION TABLE === */}
              {selectedCourse.type === "ca-table" && (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-600 text-blue-300">
                      <th className="p-3">Module No.</th>
                      <th className="p-3">Module Name</th>
                      <th className="p-3 text-right">Duration (Weeks)</th>
                      <th className="p-3 text-right">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCourse.modules.map((m, i) => (
                      <tr key={i} className="border-b border-gray-700 hover:bg-gray-700/40 transition">
                        <td className="p-3">{m.no}</td>
                        <td className="p-3">{m.name}</td>
                        <td className="p-3 text-right">{m.duration}</td>
                        <td className="p-3 text-right">{m.hours}</td>
                      </tr>
                    ))}
                    <tr className="font-semibold text-blue-400">
                      <td></td>
                      <td className="text-right p-3">Total Duration</td>
                      <td className="text-right p-3">{selectedCourse.totalWeeks}</td>
                      <td className="text-right p-3">{selectedCourse.totalHours}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Course;
