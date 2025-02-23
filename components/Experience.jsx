import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  // Timeline Data
  const timelineData = [
    {
      year: "January 2023 – March 2023",
      role: "Contract Frontend Developer",
      company: "Xoal.io",
      location: "Remote",
      description: `Developed the front-end of xoal.io in collaboration with Mr. Pascal, 
      who handled the backend. I Focused on creating a visually appealing, user-friendly, 
      and responsive interface."`,
      tasks: [
        "Consumed APIs to fetch and display dynamic data.",
        "Implemented responsive designs using Tailwind CSS.",
        "Optimized website performance, reducing load times by 30%.",
      ],
      icon: "🚀",
      Link: 'https://xoal.io/',
    },
    {
      year: "March 2023 – May 2023",
      role: "Contract Fullstack Developer",
      company: "Cowhouse.io",
      location: "Remote",
      description:
        "Designed and developed Cowhouse.io, a transactional email service providing API and SMTP-based email delivery.",
      tasks: [
        "Improved user engagement by 25% through removing some UX enhancements.",
        "Built reusable React components for consistent UI.",
       
      ],
      icon: "🎨",
      Link: 'https://cowhouse.io/',
    },
    {
      year: "June 2023 – 2023",
      role: "Contract fullstack Developer",
      company: "Ditcal.com",
      location: "Remote",
      description:
        `Developed DitCal, a scalable scheduling platform enabling unlimited bookings, 
        workflow automation, and team collaboration.`,
      tasks: [
        "Implemented integrations with Google Calendar, Zoom, and Zapier to enhance scheduling efficiency.",
        "Implemented SEO best practices to improve search rankings.",
        "Debugged and fixed cross-browser compatibility issues.",
        "Provided ongoing maintenance and support for clients.",
      ],
      icon: "👨‍💻",
      Link: 'https://ditcal.com/',
    },
    {
      year: "July 2023",
      role: "Contract Fullstack Developer",
      company: "Vrealm.org.ng",
      location: "Remote",
      description:
        "Developed vrealm.org.ng, an authorative Media presence and booking platform for the ministry.",
      tasks: [
        "Showcased the ministry’s mission, vision, and goals, enhancing its digital presence.",
        "Implemented a google form booking system (client's choice) to facilitate event and program bookings.",
       "Optimized performance and responsiveness for a seamless user experience."
      ],
      icon: "✍️",
      Link: 'https://vrealm.org.ng/',
    },
    {
      year: "March 2024 - April 2024",
      role: "Contract Fullstack Developer",
      company: "everythingshelter.com.ng",
      location: "Remote",
      description:
        "Developed a website for Everything Shelter, A construction management and real estate marketing firm",
      tasks: [
        "Optimized for ads compaign by building funnels and following SEO best practices.",
        "Ensured quality leads and follow-up by implementing Newsletter subscription and contact form.",

      ],

      icon: "✍️",
      Link: 'https://everythingshelter.com.ng/',
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-6">Resume</h2>
        <div className="flex justify-center mb-6">
          <a
            href="/Arinze.pdf"
            download
            className="bg-teal-600 text-white px-6 py-2 flex items-center gap-2 rounded-md shadow-md hover:bg-teal-700"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Timeline Container */}
        <div className="min-h-screen bg-white py-10">
          <div className="relative container mx-auto px-4">
            {/* Timeline Line */}
            <div className="absolute h-full w-1 bg-teal-500 left-1/2 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Timeline Entries */}
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } flex-col items-center w-full mb-8`}
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500 text-white z-10 mb-4 md:mb-0">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 p-6 rounded-lg shadow-lg ${
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  } bg-gray-50 text-gray-800`}
                >
                  <h2 className="text-xl text-center font-bold ">
                    {item.role}
                  </h2>
                  <h3 className="text-lg font-semibold">
                    <Link href={item.Link} className="underline underline-offset-4 text-teal-600">{item.company} </Link> | {item.year}
                  </h3>
                  <p className="mt-2 text-sm">{item.description}</p>

                  {/* Task List */}
                  <ul className="mt-4 list-disc list-inside text-sm">
                    {item.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="mt-1">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}