// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/arinze-obieze.jpg" // Replace with your image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Text Content */}
      <div className="relative  z-20 text-white text-left">
        <h1 className="text-5xl font-bold mb-4">Arinze Obieze</h1>
        <p className="text-xl mb-8">Your tagline or a brief description goes here.</p>
        
        {/* CTA */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Contact
        </button>
      </div>
    </div>
  );
};

export default HeroSection;