import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ikenna Pascal',
      role: 'Serial Entrepreneur & Senior Software Engineer',
      text: `I’ve worked with Arinze on three different SaaS projects, from idea to launch, and 
      he has consistently exceeded expectations. His technical expertise, attention to 
      detail, and reliability make him an invaluable asset—one I always return to for 
      top-notch results.`,
      image: '/testimonials/iyke.jpeg', 
    },
    {
      id: 2,
      name: 'Pastor Jeremiah Nwabueze',
      role: 'Lead Minister at Vrealm Ministry & Google Co-lead Anambra.',
      text: `Arinze Kingsley Obieze built an exceptional, SEO-optimized 
      website for our ministry, Vrealm.org.ng, significantly 
      improving our online presence. His expertise, attention to 
      detail, and dedication resulted in a visually appealing, 
      user-friendly, and highly functional site that enhances our 
      outreach. I highly recommend him to anyone in need of a 
      skilled web developer.`,
      image: '/testimonials/jeremaih.jpeg', 
    },
    {
      id: 3,
      name: 'Favour Simeon',
      role: 'Social Media Brand strategist & Marketer',
      text: `I’ve worked with Arinze across multiple projects where he consistently 
      delivered with strong technical expertise and a highly structured approach. 
      He takes full ownership of his work, thinks ahead, and executes with clarity 
      and reliability. Working with him has always been seamless and results-driven`,
      image: '/testimonials/favour.png', 
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
    <div className="bg-white py-16 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                activeIndex === index ? 'bg-teal-600' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;