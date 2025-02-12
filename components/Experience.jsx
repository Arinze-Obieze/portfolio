import { FaDownload } from "react-icons/fa";

const experiences = [
  {
    title: "Software Developer - Everything Shelter",
    date: "March - April 2024",
    description:
      "Collaborated with the marketing team to develop an SEO-optimized, lead conversion website for ad campaigns.",
  },
  {
    title: "Software Developer - Collaboration with Mr. Iyke Pascal",
    date: "January 2023 - January 2024",
    description:
      "Partnered with Pascal Ikenna to design and develop three SaaS platforms: Xoal.io (customer journey automation), Cowhouse.io (email service), and Ditcal.com (business communication).",
  },
  {
    title: "Web Developer - Vrealm.org.ng",
    date: "July 2023",
    description:
      "Developed a website to showcase the ministry's mission, vision, and goals, enhancing online presence and facilitating bookings for Pastor Jeremiah Nwabueze.",
  },
];

export default function Resume() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-6">Resume</h2>
        <div className="flex justify-center mb-6">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 flex items-center gap-2 rounded-md shadow-md hover:bg-blue-700"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative p-4 bg-white shadow-md rounded-2xl max-w-xl mx-auto sm:max-w-full">
              <div className="absolute -left-6 top-5 w-4 h-4 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-500 text-sm">{exp.date}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
