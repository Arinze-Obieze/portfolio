// components/Sidebar.js
import React from 'react';
import {
  UserIcon,
  CodeIcon,
  BriefcaseIcon,
  FolderIcon,
  ChatIcon,
  MailIcon,
} from '@heroicons/react/outline'; // Import icons from Heroicons
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import social media icons from React Icons

const Sidebar = () => {
  return (
    <div className="p-6 h-full flex flex-col justify-between">
      {/* Menu Items */}
      <div>
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <HomeIcon className="w-6 h-6 mr-2" /> {/* Home Icon */}
          Arinze Obieze
        </h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                className="flex items-center hover:text-indigo-500 transition-colors duration-300"
              >
                <UserIcon className="w-5 h-5 mr-2" /> {/* About Icon */}
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex items-center hover:text-indigo-500 transition-colors duration-300"
              >
                <CodeIcon className="w-5 h-5 mr-2" /> {/* Skills Icon */}
                Skills
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="flex items-center hover:text-indigo-500 transition-colors duration-300"
              >
                <BriefcaseIcon className="w-5 h-5 mr-2" /> {/* Resume Icon */}
                Resume
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center hover:text-indigo-500 transition-colors duration-300"
              >
                <FolderIcon className="w-5 h-5 mr-2" /> {/* Projects Icon */}
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="flex items-center hover:text-indigo-500 transition-colors duration-300"
              >
                <ChatIcon className="w-5 h-5 mr-2" /> {/* Testimonials Icon */}
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center hover:text-indigo-500 transition-colors duration-300"
              >
                <MailIcon className="w-5 h-5 mr-2" /> {/* Contact Icon */}
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-400 mb-4">Connect with Me</h3>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/arinze-kingsley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6" /> {/* LinkedIn Icon */}
          </a>
          <a
            href="https://github.com/arinze-obieze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6" /> {/* GitHub Icon */}
          </a>
          <a
            href="https://twitter.com/arinze_obieze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
          >
            <FaTwitter className="w-6 h-6" /> {/* Twitter Icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;