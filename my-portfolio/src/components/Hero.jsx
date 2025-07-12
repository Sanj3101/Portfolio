import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import logo from '../assets/me-hero3.svg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white text-[#212529] flex items-center justify-center px-4 sm:px-6 py-20 mt-4 md:mt-4"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse  items-center justify-between">
        
        {/* Text Content */}
        <div className="w-full h-auto shadow-xl rounded-3xl flex flex-col items-center md:items-start text-center md:text-left p-4 bg-gradient-to-br from-white via-[#e0dfe8] to-[#b0b0b7]">

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hey there, I’m{" "}
            <span
              className="inline-block text-[#6c63ff] text-3xl sm:text-5xl lg:text-6xl font-bold"
              style={{ minWidth: "22ch" }}
            >
              <Typewriter
                words={["Sanjana Biswas :)", "a Fullstack Developer", "a Dreamer", "a Creator"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
            A coder by day, artist by heart, and a dreamer always.
            Whether I’m building tech, sketching ideas, or vibing to music —
            I find magic in creativity, curiosity, and connection.
          </p>

          <p className="text-sm mt-4 italic text-gray-500">
            Let’s build, explore, and create something beautiful together.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="bg-[#6c63ff] text-white px-6 py-2 rounded-full font-medium hover:bg-[#6c4ed9] transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#6c63ff] px-6 py-2 rounded-full font-medium text-[#6c63ff] hover:bg-[#f2f0ff] transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 -mt-4 md:mt-0 md:-mr-12 lg:-mr-20">
          <img
            src={logo}
            alt="Sanjana profile or art"
            className="w-[350px] sm:w-[330px] md:w-[780px] lg:w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
