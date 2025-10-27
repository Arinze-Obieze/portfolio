import { useState } from "react";

const clientProjects = [
  {
    title: "Waccps.org",
    description: "An education management website for West African College of Clinical Physiology Sciences (WACCPS)",
    link: "https://www.waccps.org/",
  },
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
    description: "A Saas business communication platform for scheduling and managing meetings.",
    link: "https://ditcal.com",
  },
  {
    title: "Vrealm.org.ng",
    description: "A Ministry website for enhancing online presence and facilitating bookings.",
    link: "https://ditcal.com",
  },
  {
    title: "everythingshelter.com.ng",
    description: "A construction management and real estate marketing firm",
    link: "https://everythingshelter.com.ng/",
  },
  {
    title: "tolulopeosokoya.com/djb",
    description: "An extended e-shop for buying David's book",
    link: "https://www.tolulopeosokoya.com/djb/",
  },
];

const funProjects = [
  {
    title: "Web X",
    description: "A drag and drop website builder with many features.",
    link: "https://web-x-nu.vercel.app/",
  },
  {
    title: "Docify",
    description: "A Documentation website.",
    link: "https://docify-gamma.vercel.app/",
  },
  {
    title: "School Website",
    description: "A School Website for that is only optimized for mobile.",
    link: "https://school-hidden.vercel.app",
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
            className={`px-4 py-2 rounded-md shadow-md ${showClientProjects ? "bg-teal-600 text-white" : "bg-white text-teal-600"}`}
            onClick={() => setShowClientProjects(true)}
          >
            Client Work
          </button>
          <button
            className={`px-4 py-2 rounded-md shadow-md ${!showClientProjects ? "bg-teal-600 text-white" : "bg-white text-teal-600"}`}
            onClick={() => setShowClientProjects(false)}
          >
            Fun Projects
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(showClientProjects ? clientProjects : funProjects).map((project, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-2xl text-center">
              <h3 className="text-xl  font-semibold break-words">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-teal-500 font-medium mt-3 inline-block"
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
