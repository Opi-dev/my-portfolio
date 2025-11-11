import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";

const About = () => {
  // 👁️ Section in-view detection
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 60,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [inView, controls]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-gray-900 text-white py-24 px-6 flex flex-col items-center justify-center"
    >
      {/* 🔥 Animated Content */}
      <motion.div
        className="max-w-4xl text-center"
        animate={controls}
        initial={{ opacity: 0, y: 60 }}
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          About <span className="text-white">Me</span>
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          I’m{" "}
          <span className="text-blue-400 font-semibold">Nazmul Haque Opi</span>, a
          passionate <span className="font-semibold">Full Stack Developer</span>{" "}
          who loves building modern, user-friendly web applications. I enjoy
          solving problems, learning new technologies, and turning ideas into
          reality through clean, efficient code. My goal is to keep growing as a
          developer while creating impactful digital experiences.
        </p>

        {/* ✅ Download CV Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/resume.pdf"
            download="Nazmul_Haque_Opi_CV.pdf"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-blue-500/40 hover:scale-105"
          >
            <Download size={20} className="animate-bounce-slow" />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
