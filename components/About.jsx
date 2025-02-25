import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white py-16">
      <div className=" overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x- lg:justify-between">
        
          {/* Left Column: Image */}
          <div className="lg:w-1/2">
            <img
              src="/arinze-obieze.jpg" 
              alt="Arinze Obieze"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Content */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-24">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About Me
            </h2>
            <p className="mt-4 md:text-lg text-gray-600">
            I am a full-stack web developer with over 3 years of experience working for 
            Saas start-ups and individual clients. My strong work ethic, excellent 
            communication skills, and dedication to client satisfaction have earned me 
            long-term relationships with clients. <br/>

            For example, I built Ditcal.com and have 
            worked on other projects such as Cowhouse.io and xoal.io for the same client. 
            Another client (everythingshelter.com.ng ) kept returning for additional work, 
            resulting in over 3 websites.<br/>
            
            These experiences demonstrate not only my technical expertise but also my 
            reliability, character, and commitment to delivering exceptional results, 
            which keeps clients coming back.
            </p>

            {/* Skills List */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900">My Skills</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">Next.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">React.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">HTML & CSS</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">Node.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">Firebase</span>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-600">✓</span>
                  <span className="ml-2 text-gray-700">GitHub</span>
                </div>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-8">
              <a
                href="#contact" // Link to your contact section
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;