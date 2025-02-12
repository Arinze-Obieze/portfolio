import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            I'd love to hear from you! Whether you have a project in mind or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>
                <p className="mt-2 text-gray-600">
                  Reach out to me via email, phone, or social media. I'll get back to you as soon as possible!
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Email</h4>
                <p className="mt-1 text-gray-600">arinze.obieze@example.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                <p className="mt-1 text-gray-600">+234 916 159 7308</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">Social Media</h4>
                <div className="mt-2 flex space-x-4">
                  <a
                    href="https://linkedin.com/in/arinze-kingsley"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/arinze-obieze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.914.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;