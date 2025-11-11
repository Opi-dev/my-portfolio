import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // ✅ Updated Links
  const links = [
    "Home",
    "About",
    "Education",
    "Course",
    "Skills",
    "Projects",
    "Contact",
  ];

  // 🧭 Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.toLowerCase())
      );
      const scrollPos = window.scrollY + 150;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveLink(links[i].toLowerCase());
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // 🔗 Smooth Scroll Function
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center fixed w-full top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Opi-Dev</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg relative">
        {links.map((link) => {
          const id = link.toLowerCase();
          const isActive = activeLink === id;
          return (
            <li key={id} className="relative cursor-pointer">
              <span
                onClick={() => handleClick(id)}
                className={`transition duration-300 pb-1 ${
                  isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                }`}
              >
                {link}
              </span>
              {/* underline animation */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              ></span>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 text-center py-6 space-y-4 md:hidden shadow-lg">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeLink === id;
            return (
              <li key={id}>
                <span
                  onClick={() => handleClick(id)}
                  className={`block text-lg cursor-pointer transition ${
                    isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                  }`}
                >
                  {link}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
