import React from "react";
import mepic from "../assets/me1.jpg";

const About = () => {
  return (
    <section id="about" className="p-10 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center">👩‍💻 About Me</h2>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center">
        <img
          src={mepic}
          alt="Sanjana Biswas"
          className="w-60 h-90 object-cover rounded-lg shadow-lg"
        />
        <div className="ml-6 max-w-2xl">
          <p className="text-lg">
            Hi, I'm <b>Sanjana Biswas</b>, a Computer Science & Engineering undergraduate passionate about building <b>scalable software</b> and solving <b>real-world problems</b> through code.
          </p>
          <p className="mt-3 text-md opacity-90">
            I have hands-on experience in <b>Full-Stack Web Development</b>, <b>Machine Learning</b>, and <b>Cloud Technologies</b>. Whether it’s optimizing algorithms, designing interactive web applications, or deploying AI-powered solutions, I enjoy turning ideas into impactful projects.  
          </p>
          <p className="mt-3 text-md opacity-90">
            My journey has led me to work with frameworks like <b>React.js</b>, <b>Streamlit</b>, and tools like <b>AWS</b> and <b>Google Cloud</b>. I love tackling challenges—be it <b>data-driven applications</b>, <b>building ML models</b>, or <b>participating in hackathons</b> to push my limits.
          </p>
          <p className="mt-3 text-md opacity-90">
            Beyond coding, I enjoy mentoring, event management, and exploring creative spaces like writing and sketching. I believe in the power of <b>collaboration</b> and continuous learning to innovate and grow.
          </p>

          <div className="mt-5">
            <a
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition duration-400 hover:scale-102 inline-block"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
