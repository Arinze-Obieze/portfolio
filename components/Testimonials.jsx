import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Everything Shelter',
      text: 'Arinze is an exceptional developer. He delivered our website on time and exceeded our expectations. Highly recommended!',
      image: '/images/john-doe.jpg', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Co-Founder, Xoal.io',
      text: 'Working with Arinze was a pleasure. His attention to detail and problem-solving skills are top-notch.',
      image: '/images/jane-smith.jpg', // Replace with actual image path
    },
    {
      id: 3,
      name: 'Pastor Jeremiah Nwabueze',
      role: 'Anambra Google Developers Group Co-lead',
      text: 'Arinze developed a fantastic website for our ministry. He is professional, reliable, and highly skilled.',
      image: '/images/jeremiah.jpg', // Replace with actual image path
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What my clients and colleagues say about me.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-12 relative">
          {/* Testimonial Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-20 h-20 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {testimonials[activeIndex].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[activeIndex].role}
            </p>
            <p className="mt-4 text-gray-700">
              "{testimonials[activeIndex].text}"
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;