import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 h-20">
      <div className="max-w-6xl mx-auto px-6 h-full flex justify-end items-center">
        <ul className="flex space-x-10 text-base font-medium text-gray-700">
          <li>
            <a
              href="#"
              onClick={() => handleLinkClick("home")}
              className={`transition-colors duration-300 hover:text-[#6c63ff] ${
                activeLink === "home" ? "text-[#6c63ff] underline underline-offset-4" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleLinkClick("about")}
              className={`transition-colors duration-300 hover:text-[#6c63ff] ${
                activeLink === "about" ? "text-[#6c63ff] underline underline-offset-4" : ""
              }`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleLinkClick("contact")}
              className={`transition-colors duration-300 hover:text-[#6c63ff] ${
                activeLink === "contact" ? "text-[#6c63ff] underline underline-offset-4" : ""
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#coming-soon"
              onClick={() => handleLinkClick("coming")}
              className={`transition-colors duration-300 hover:text-[#6c63ff] ${
                activeLink === "coming" ? "text-[#6c63ff] underline underline-offset-4" : ""
              }`}
            >
              Coming soon!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
