import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import heroImg from "../assets/hero.png";
import resumeImg from "../assets/resume.jpg";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <section
  id="home"
  ref={ref}
  className="bg-gray-900 text-white pt-28 md:pt-16 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 max-w-6xl mx-auto gap-20 md:gap-32"
>
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left space-y-6 mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Hello<span className="text-blue-400">.</span> <br />
          I’m{" "}
          <span className="text-blue-400">
            {inView ? (
              <Typewriter
                words={["Nazmul Haque Opi"]}
                loop={1}
                cursor={false} // 🟢 টাইপ শেষ হলে cursor থাকবে না
                typeSpeed={120}
                deleteSpeed={0}
                delaySpeed={1500}
              />
            ) : (
              "Nazmul Haque Opi"
            )}
          </span>
        </h1>

        {/* Sub Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-300 h-8">
          {inView && (
            <Typewriter
              words={[
                "Software Developer",
                "Full Stack Developer",
                "Problem Solver",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          )}
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mt-8">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold"
          >
            Got a Project?
          </a>

          <a
            href={resumeImg}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded-lg font-semibold"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-2 rounded-2xl border-line-animation"></div>
        <div className="relative rounded-2xl bg-gray-900 p-1 z-10">
          <img
            src={heroImg}
            alt="Nazmul Haque Opi"
            className="relative w-64 md:w-80 rounded-2xl z-10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
