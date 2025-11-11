import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML 5", level: 95, colors: ["#fb923c", "#ea580c"] },
  { name: "CSS", level: 90, colors: ["#60a5fa", "#2563eb"] },
  { name: "Bootstrap", level: 85, colors: ["#fde047", "#facc15"] },
  { name: "JavaScript", level: 90, colors: ["#c084fc", "#9333ea"] },
  { name: "jQuery", level: 80, colors: ["#f472b6", "#ec4899"] },
  { name: "PHP", level: 90, colors: ["#22d3ee", "#3b82f6"] },
  { name: "MySql", level: 80, colors: ["#4ade80", "#16a34a"] },
  { name: "React", level: 88, colors: ["#fcd34d", "#eab308"] },
  { name: "Laravel", level: 80, colors: ["#f87171", "#ef4444"] },
  { name: "Tailwind CSS", level: 88, colors: ["#2dd4bf", "#06b6d4"] },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [inView, controls, hasAnimated]);

  const SkillBar = ({ name, level, colors }) => {
    const [count, setCount] = useState(0);
    const gradient = `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`;

    // Sync count-up with bar animation (same duration)
    useEffect(() => {
      if (inView && count < level) {
        let start = 0;
        const duration = 2800; // same as bar animation duration
        const stepTime = duration / level;
        const interval = setInterval(() => {
          start++;
          if (start >= level) {
            start = level;
            clearInterval(interval);
          }
          setCount(start);
        }, stepTime);
        return () => clearInterval(interval);
      }
    }, [inView, level]);

    return (
      <div className="w-full mb-8 group">
        {/* Title + Percentage */}
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg text-gray-200 group-hover:text-blue-400 transition-all duration-300">
            {name}
          </span>
          <span className="text-gray-400 text-sm">{count}%</span>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-5 bg-gray-800 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-black/20">
          {/* Gradient Fill */}
          <motion.div
            style={{
              background: gradient,
              boxShadow: `0 0 12px ${colors[1]}60, inset 0 -1px 3px rgba(255,255,255,0.2)`,
            }}
            className="absolute top-0 left-0 h-5 rounded-full"
            variants={{
              hidden: { width: 0 },
              visible: {
                width: `${level}%`,
                transition: { duration: 1.8, ease: "easeOut" },
              },
            }}
            initial="hidden"
            animate={controls}
          />

          {/* Light Reflection + Pulse Glow */}
          <motion.div
            className="absolute top-0 left-0 h-5 w-[40%] bg-gradient-to-r from-white/10 via-white/40 to-transparent blur-sm rounded-full"
            animate={{
              x: ["-150%", "150%"],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* 3D Shadow Below Bar */}
          <div
            className="absolute bottom-[-4px] left-0 w-full h-[10px] rounded-full blur-md opacity-40"
            style={{
              background: `linear-gradient(90deg, ${colors[0]}55, ${colors[1]}55)`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-gray-900 text-white py-20 px-10 flex flex-col justify-center items-center w-full"
    >
      <motion.div
        className="w-full max-w-[100vw]"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-4xl font-bold text-blue-400 mb-10">
          My <span className="text-white">Skills</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-[95%] mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
