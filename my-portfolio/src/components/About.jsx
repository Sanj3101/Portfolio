import React from "react";
import bg from "../assets/about.svg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-[#212529] flex items-center justify-center px-4 sm:px-6 py-20 mt-8 md:mt-0"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="flex-shrink-0 -mt-4 md:mt-0 md:-ml-12 lg:-ml-20 ">
          <img
            src={bg}
            alt="About illustration"
            className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto md:translate-x-[-40px] md:translate-y-[-20px] floating-image"
          />
        </div>

        {/* Text Content */}
        <div className="w-full h-auto shadow-gray-700 shadow-2xl rounded-3xl flex flex-col items-center md:items-start text-center md:text-left space-y-6 p-8 bg-[#e0dfe8]">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4a679e]">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed">
            Hi, I'm{" "}
            <span className="font-semibold text-[#4a679e]">Sanjana Biswas</span>
            , a Computer Science & Engineering undergraduate passionate about
            building scalable software and solving real-world problems through
            code.
          </p>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed">
            I bring hands-on experience in Full-Stack Web Development, Machine
            Learning, and Cloud Technologies. From optimizing algorithms and
            crafting responsive UI to deploying AI-powered solutions in the
            cloud, I enjoy turning ideas into impactful products.
          </p>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed">
            My journey has introduced me to tools like{" "}
            <span className="font-medium">React.js</span>,{" "}
            <span className="font-medium">Streamlit</span>,{" "}
            <span className="font-medium">AWS</span>, and{" "}
            <span className="font-medium">Google Cloud</span>. I'm driven by
            challenges — whether it's data-intensive apps, intuitive UX, or
            hackathon deadlines.
          </p>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed">
            Outside of code, I enjoy{" "}
            <span className="italic">
              mentoring, organizing events, and creative spaces like writing and
              sketching
            </span>
            . I believe in collaborative problem-solving and lifelong learning —
            values that continue to shape how I grow and contribute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
