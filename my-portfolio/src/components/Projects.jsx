import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Quiz App using React",
    description:
      "A responsive quiz app with dynamic questions and real-time scoring.",
    features: [
      "Dynamic question fetching from API",
      "Timer, feedback, and scoring system",
      "Smooth user navigation",
    ],
    tech: ["React", "CSS", "REST API"],
    github: "https://github.com/Sanj3101/Quiz-App",
    demo: "https://quiz-app-tan-iota-83.vercel.app/",
  },
  {
    title: "Mental Health Text Classification App",
    description:
      "Text classifier using NLP models (BERT/DistilBERT) with real-time predictions.",
    features: [
      "Fine-tuned BERT (92%) and DistilBERT (89%)",
      "Real-time mental state prediction",
      "Streamlit interface",
    ],
    tech: ["Python", "Hugging Face", "Streamlit"],
    github: "https://github.com/Sanj3101/Mental-HealthStatus-Classification",
    demo: "https://mental-health-statusdetect.streamlit.app/",
  },
  {
    title: "Astrophysical Object Classification",
    description: "Model to classify stars, galaxies, and quasars using ML.",
    features: [
      "Feature engineering and preprocessing",
      "Logistic Regression, Decision Tree, KNN",
      "Performance optimization",
    ],
    tech: ["Python", "scikit-learn"],
    github: "https://github.com/Sanj3101/Astro-Object_Classification",
    demo: "",
  },
  {
    title: "Ghibliesque",
    description:
      "Browse, rate, and review Studio Ghibli films with recommendations.",
    features: [
      "Detailed Ghibli film listings",
      "User reviews and top-rated charts",
      "Recommendations engine",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    github: "https://github.com/prishi003/ADLproject",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen pt-[94px] px-6 py-16 bg-white text-gray-800"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#4a679e] mb-12">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#4a679e]">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <ul className="mt-4 text-sm list-disc list-inside space-y-1 text-gray-700">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#e8ecf6] text-[#4a679e] text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex space-x-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a679e] hover:underline flex items-center gap-1"
              >
                <FaGithub /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
