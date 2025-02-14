import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 to-indigo-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-indigo-400">Arinze Obieze</span>
            </h1>

            {/* Typed Animation */}
            <div className="text-2xl sm:text-3xl text-gray-300 mb-8">
              <ReactTyped
                strings={[
                  "A Full-Stack Web Developer.",
                  "Long-term Client Satisfaction",
                  // ".",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>

            {/* Call-to-Action Button */}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Let's Work Together
            </a>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/arinze-obieze"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/arinze-kingsley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/arinze_obieze"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-indigo-400 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/arinzep.jpeg"
                alt="Arinze Obieze"
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