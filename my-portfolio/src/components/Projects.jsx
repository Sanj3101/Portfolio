import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Quiz App using React",
    description:
      "A responsive quiz app for interactive learning with seamless navigation and real-time feedback.",
    features: [
      "Dynamic question fetching from API",
      "Real-time feedback, timer, scoring system",
      "Smooth navigation controls",
    ],
    tech: ["React", "CSS", "REST API"],
    github: "https://github.com/Sanj3101/Quiz-App",
    demo: "https://quiz-app-tan-iota-83.vercel.app/",
  },
  {
    title: "Mental Health Text Classification App",
    description:
      "A machine learning app for mental health assessment using NLP models with an interactive UI.",
    features: [
      "Fine-tuned BERT (92% accuracy), DistilBERT (89% accuracy)",
      "Real-time mental state prediction",
      "Streamlit UI for easy text input",
    ],
    tech: ["Python", "Hugging Face", "PyTorch", "Streamlit"],
    github: "https://github.com/Sanj3101/Mental-HealthStatus-Classification",
    demo: "https://mental-health-statusdetect.streamlit.app/",
  },
  {
    title: "Astrophysical Object Classification",
    description:
      "Developed a model to classify stars, galaxies, and quasars using machine learning.",
    features: [
      "Data preprocessing and feature engineering",
      "Used Logistic Regression, Decision Tree, and KNN",
      "Performance optimization for accuracy",
    ],
    tech: ["Python", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/Sanj3101/Astro-Object_Classification",
    demo: "",
  },
  {
    title: "Ghibliesque",
    description:
      "A web app to browse, rate, and review Studio Ghibli films with recommendations and top-rated lists.",
    features: [
      "Browse all Studio Ghibli films with details",
      "User ratings & reviews with aggregated scores",
      "Top-rated lists and personalized recommendations",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    github: "https://github.com/prishi003/ADLproject",
    demo: "",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🚀 Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>

              <ul className="mt-3 text-sm text-gray-700">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 flex items-center gap-1 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>

                {/* Conditionally render the Live Demo link only if demo is not an empty string */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 flex items-center gap-1 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
