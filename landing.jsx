import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const PortfolioLandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="text-2xl font-bold">Matteo Fabbiani</div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">About</a>
          <a href="#" className="text-gray-600 hover:text-black">Works</a>
          <a href="#" className="text-gray-600 hover:text-black">Services</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          <a 
            href="#" 
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full hover:opacity-90"
          >
            Let's Talk →
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center relative">
        {/* Left Content */}
        <div className="w-2/3 pr-16">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">👋</span>
            <span className="text-xl">Hey there,</span>
          </div>
          <h1 className="text-6xl font-bold mb-4">
            It's Matteo Fabbiani.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to my creative corner. I'm a Webflow Designer & Developer 
            with extensive experience crafting digital experiences that are both 
            visually stunning and user-friendly.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full hover:opacity-90"
            >
              Say Hello
            </a>
            <a 
              href="#" 
              className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100"
            >
              My Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex space-x-4">
            <Instagram className="text-gray-600 hover:text-black" />
            <Facebook className="text-gray-600 hover:text-black" />
            <Twitter className="text-gray-600 hover:text-black" />
            <Linkedin className="text-gray-600 hover:text-black" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/3 relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200 rounded-full opacity-50 z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-200 rounded-full opacity-50 z-0"></div>
          
          <div className="relative z-10">
            <img 
              src="/api/placeholder/400/400" 
              alt="Profile" 
              className="w-full h-full rounded-full border-8 border-white shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Digital Experiences with Passion</h2>
        <p className="text-gray-600">
          Ever since I was young, I've been fascinated by the intersection of design and technology. 
          This passion drives me to create meaningful digital experiences that not only look great 
          but also solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default PortfolioLandingPage;
