import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#", key: "home" },
    { name: "About Me", href: "#about", key: "about" },
    { name: "Skills", href: "#skills", key: "skills" },
    { name: "Projects", href: "#projects", key: "projects" },
    { name: "Contact", href: "#contact", key: "contact" },
  ];

  const linkClass = (key) =>
    `transition-colors duration-300 hover:text-[#4a679e] ${
      activeLink === key ? "text-[#4a679e] underline underline-offset-4" : ""
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-50 h-10 md:h-20">
      <div className="mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand */}
        <span className=" text-sm md:text-xl  text-white">Menu</span>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-10 text-base font-medium text-gray-200">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.key)}
                className={linkClass(link.key)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="border-t-3 border-white">
          <ul className="md:hidden top-20 left-0 w-full rounded-b-2xl bg-black/20 backdrop-blur-md py-4 px-6 space-y-4 text-base font-xs text-gray-200 transition-all duration-300">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.key)}
                  className={linkClass(link.key)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
