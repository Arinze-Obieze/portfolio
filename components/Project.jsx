import { useState } from "react";

const clientProjects = [
  {
    title: "Xoal.io",
    description: "A SaaS no-code platform for personalized customer journey automation.",
    link: "https://xoal.io",
  },
  {
    title: "Cowhouse.io",
    description: "A SaaS email sending service simplifying transactional and marketing email delivery.",
    link: "https://cowhouse.io",
  },
  {
    title: "Ditcal.com",
    description: "A business communication platform for scheduling and managing meetings.",
    link: "https://ditcal.com",
  },
];

const funProjects = [
  {
    title: "Interactive Weather App",
    description: "A real-time weather forecasting app with beautiful UI animations.",
    link: "#",
  },
  {
    title: "AI Blog Summarizer",
    description: "A tool that summarizes long-form articles using AI.",
    link: "#",
  },
  {
    title: "Portfolio Template Generator",
    description: "A dynamic React-based tool that helps developers generate stunning portfolios.",
    link: "#",
  },
];

export default function ProjectShowcase() {
  const [showClientProjects, setShowClientProjects] = useState(true);

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md shadow-md ${showClientProjects ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            onClick={() => setShowClientProjects(true)}
          >
            Client Work
          </button>
          <button
            className={`px-4 py-2 rounded-md shadow-md ${!showClientProjects ? "bg-blue-600 text-white" : "bg-white text-blue-600"}`}
            onClick={() => setShowClientProjects(false)}
          >
            Fun Projects
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(showClientProjects ? clientProjects : funProjects).map((project, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-2xl text-center">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 font-medium mt-3 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
