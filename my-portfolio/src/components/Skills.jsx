import React from "react";
import { FaPython, FaJava, FaJs, FaPhp, FaReact, FaGitAlt, FaLinux, FaAws } from "react-icons/fa";
import { SiC, SiCplusplus, SiMysql, SiStreamlit, SiPandas, SiScikitlearn, SiGooglecloud } from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "C", icon: <SiC className="text-gray-800" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-800" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-600" /> }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-500" /> },
      { name: "Pandas", icon: <SiPandas className="text-blue-700" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
    ]
  },
  {
    category: "Platforms",
    skills: [
      { name: "Linux", icon: <FaLinux className="text-black" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-600" /> },
      { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Leadership" },
      { name: "Event Management" },
      { name: "Writing" },
      { name: "Public Speaking" },
      { name: "Time Management" }
    ]
  }
];

const Skills = () => {
  return (
    <section className="p-10 bg-white text-gray-800">
      <h2 className="text-4xl font-bold text-center">🚀 Skills & Expertise</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow-sm">
                  {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                  <span className="text-gray-900 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
