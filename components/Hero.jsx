import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section 
    className="min-h-screen bg-gradient-to-r from-gray-900 to-teal-900 text-white flex items-center"
    aria-label="Hero section introducing Arinze Obieze, a full-stack web developer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-teal-400">Arinze Obieze</span>
            </h1>

            {/* Typed Animation */}
            <div className="text-2xl sm:text-3xl text-gray-300 mb-8">
              <ReactTyped
                strings={[
                  "A Full-Stack Web Developer.",
                  "Exceptional at building SaaS websites.",
                  "Focused on clean code and great UX.",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>

            {/* Call-to-Action Button */}
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300"
            >
              Let's Work Together
            </Link>

        
          </div>

          {/* Right Column: Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-teal-400 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/arinzep.jpeg"
                 alt="Portrait of Arinze Obieze, Full-Stack Web Developer"
                 width={320}
                 height={320}
                 className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;