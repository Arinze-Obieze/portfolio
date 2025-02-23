import Link from 'next/link'
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BsFillPersonFill } from "react-icons/bs";
import { PiReadCvLogoFill } from "react-icons/pi";
import { RiReservedFill } from "react-icons/ri";
import { MdSendToMobile } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";

function Sidebar() {
  return (
    <div className='fixed'>

      <div>
      
      <div className="flex w-64 justify-center pt-12 ">
            <div className=" w-24 h-24 rounded-full overflow-hidden border-4 border-teal-400 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/arinzep.jpeg"
                alt="Arinze Obieze"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

              {/* Social Media Links */}
              <div className="mt-8 flex justify-center space-x-6 ">
              <a
                href="https://github.com/arinze-obieze"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-teal-400 transition-colors duration-300 border-4 border-teal-400 rounded-full"
              >
                <FaGithub className="w-4 h-4 " />
              </a>
              <a
                href="https://linkedin.com/in/arinze-kingsley"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-teal-400 transition-colors duration-300 border-4 border-teal-400 rounded-full"

              >
                <FaLinkedin className="w-4 h-4 " />
              </a>
              <a
                href="https://twitter.com/arinze_obieze"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-teal-400 transition-colors duration-300 border-4 border-teal-400 rounded-full"

              >
                <FaTwitter className="w-4 h-4 " />
              </a>
            </div>
      </div>

      <div className='border-b-[0.3px] pb-4 mx-auto w-32 border-gray-400'></div>

    <div className='mt-12 space-y-6 text-left pl-8'>
    <nav className='text-gray-300 hover:text-white flex space-x-4 place-items-center'>
      <FaHome/>
        <Link className='' href={'/'}>Home</Link>
      </nav>
      <nav className='text-gray-300 hover:text-white flex space-x-4 place-items-center'>
      <BsFillPersonFill/>
        <Link className='' href={'/'}>About</Link>
      </nav>
       <nav className='text-gray-300 hover:text-white flex space-x-4 place-items-center'>
       <PiReadCvLogoFill />
        <Link className='' href={'/'}>Resume</Link>
      </nav>
       <nav className='text-gray-300 hover:text-white flex space-x-4 place-items-center'>
       <MdOutlineWork />
        <Link className='' href={'/'}>Projects</Link>
      </nav>
       <nav className='text-gray-300 hover:text-white flex space-x-4 place-items-center'>
       <RiReservedFill />
        <Link className='' href={'/'}>Services</Link>
      </nav>
       <nav className='text-gray-300 hover:text-white flex space-x-4 place-items-center'>
       <MdSendToMobile />
        <Link className='' href={'/'}>Contact</Link>
      </nav>
    </div>
    </div>
  )
}

export default Sidebar
