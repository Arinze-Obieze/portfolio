import React from 'react';
import Image from 'next/image'; 

const skills = [
  "Next.js",
  "React.js",
  "HTML & CSS",
  "Tailwind CSS",
  "MongoDB",
  "TypeScript",
  "Node.js",
  "Firebase",
  "GitHub"
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16" aria-label="About Arinze Obieze">
      <div className="overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          
          {/* Left Column: Image */}
       <div className="lg:w-1/2">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full">
              <Image
                src="/arinze.jpg"
                alt="Portrait of Arinze Obieze, Full-Stack Web Developer"
                fill
                className="rounded-lg shadow-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-24">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">About Me</h2>
            <div className="mt-4 space-y-4 md:text-lg text-gray-600">
            <p>
            For 4+ years, I've partnered with startups and organizations to create digital solutions 
            that solve real problems and drive growth. I bridge technical precision with business 
            goals to build applications that users love and investors trust.
            </p>
            <p>
  I've built scalable, purpose-driven SaaS platforms including Ditcal.com, Cowhouse.io, and Xoal.io 
  with development teams. I also spearheaded technical development for an educational management system 
  for the West African College of Clinical Physiology Sciences. These projects collectively 
  serve 50,000+ users and have secured significant funding.
</p>
           
            </div>

            {/* Skills List */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">My Skills</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-teal-600">✓</span>
                    <span className="ml-2 text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-8">
              <a
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
