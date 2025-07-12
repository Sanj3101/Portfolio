import React from "react";
import bg from "../assets/skills.svg";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "Java", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Scikit-learn", "Pandas", "Streamlit"],
  },
  {
    category: "Tools",
    skills: ["Git", "MySQL"],
  },
  {
    category: "Platforms",
    skills: ["Linux", "AWS", "Google Cloud"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Leadership",
      "Event Management",
      "Writing",
      "Public Speaking",
      "Time Management",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen pt-[94px] px-6 py-12 bg-[#e0dfe8] text-gray-800"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#4a679e] mb-12">
        Skills & Interests
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left: Skills */}
        <div className="w-full md:w-2/3 space-y-8">
          {skillsData.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-600 uppercase tracking-wide mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={bg}
            alt="Skills illustration"
            className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto floating-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
