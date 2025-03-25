import React from "react";
import logo from '../assets/Sanjana-3-26-2025.png'

const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm border border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm text-white">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center flex-shrink-0">
            <img className="h-10 w-20 mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="flex justify-center gap-10">
            <li><a href="#about" className="hover:text-yellow-400 transform transition duration-500 hover:scale-150 inline-block">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-400 transform transition duration-500 hover:scale-150 inline-block">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transform transition duration-500 hover:scale-150 inline-block">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
