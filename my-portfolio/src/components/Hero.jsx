import React from "react";
import logo from '../assets/me_logo.png'
const Hero = () => {
  return (
    <section className=" hero flex flex-col items-center justify-center text-center min-h-screen bg-black text-white p-10">
      <div className="flex flex-row items-center justify-between gap-20">
        <div className="flex flex-col items-center justify-between">
        <h1 className="text-5xl font-extrabold animate-fade-in">Hey there, I'm <span className="text-cyan-300">Sanjana Biswas</span></h1>
        <p className="text-lg mt-4 max-w-xl">
          A coder by day, an artist by heart, and a dreamer always. Whether it's building innovative tech, capturing the beauty of the world, or vibing to my favorite tunes,  
          I find magic in creativity, curiosity, and connection.  
        </p>
      </div>
      <img className="h-90 mt-8 md:mt-5 md:ml-10" src={logo} alt="" />
      </div>
      
      <p className="text-md mt-2 italic opacity-80">Let's build, explore, and create something beautiful together!</p>
      <a href="#contact" className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-500 transition-transform duration-450 hover:scale-110">
        Work With Me 🚀
      </a>
  </section>

  );
};

export default Hero;
