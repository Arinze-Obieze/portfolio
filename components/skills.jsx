import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-700" /> },
];

export default function Skills() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white shadow-md rounded-2xl">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="font-medium text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
