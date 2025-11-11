import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Education from "./components/Education";
import Course from "./components/Course";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <HeroSection />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <About />
      </section>

      {/* ✅ Education Section */}
      <section
        id="education"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <Education />
      </section>

      {/* ✅ Course Section */}
      <section
        id="course"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <Course />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <Skills />
      </section>

     {/* ✅ Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6">
        <Projects />
      </section>

      {/* Contact Section */}
     <section id="contact" className="min-h-screen flex items-center justify-center px-6">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
