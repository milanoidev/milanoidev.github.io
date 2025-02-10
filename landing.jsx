import React, { useState, useEffect } from 'react';
import { Twitter, Linkedin, Menu, X, Sun, Moon } from 'lucide-react';

// Theme Toggle Component
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: 'home' },
    { label: 'Portfolio', path: 'portfolio' },
    { label: 'Blog', path: 'blog' },
    { label: 'About', path: 'about' },
  ];

  return (
    <nav className="relative flex justify-between items-center mb-8 md:mb-16">
      <div className="text-xl md:text-2xl font-bold dark:text-white">Sonia Milanoi</div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button 
          className="md:hidden z-50 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden">
          <div className="flex flex-col h-full pt-20 px-4">
            {menuItems.map((item) => (
              <button 
                key={item.path}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white py-4 text-lg text-left"
                onClick={() => {
                  setCurrentPage(item.path);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center space-x-6">
        {menuItems.map((item) => (
          <button 
            key={item.path}
            className={`text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white ${
              currentPage === item.path ? 'font-semibold' : ''
            }`}
            onClick={() => setCurrentPage(item.path)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

const Home = () => (
  <div className="flex flex-col md:flex-row items-center relative">
    <div className="w-full md:w-2/3 md:pr-16">
      <div className="flex items-center mb-4">
        <span className="text-3xl md:text-4xl mr-4">👋</span>
        <span className="text-lg md:text-xl dark:text-white">Hey there,</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
        It's Sonia Milanoi.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
        I'm a software developer with 5+ years of coding, creating, and innovating across industries, 
        I thrive at the intersection of technology and impact. From fintech to healthcare, e-commerce 
        to SaaS, I've built systems that power businesses and delight users.
      </p>
      
      <div className="hidden md:flex flex-row items-center space-x-4">
        <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full hover:opacity-90 text-center">
          View Portfolio
        </button>
        <button className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white text-center">
          Read Blog
        </button>
      </div>

      <div className="hidden md:flex mt-12 space-x-4">
        <Twitter className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
        <Linkedin className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
      </div>
    </div>

    <div className="w-2/3 md:w-1/3 relative my-8 md:my-0">
      <div className="absolute -top-10 -right-10 w-32 md:w-64 h-32 md:h-64 bg-purple-200 dark:bg-purple-900 rounded-full opacity-50 z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-24 md:w-48 h-24 md:h-48 bg-yellow-200 dark:bg-yellow-900 rounded-full opacity-50 z-0"></div>
      
      <div className="relative z-10">
        <img 
          src="/api/placeholder/400/400" 
          alt="Profile" 
          className="w-full h-full rounded-full border-4 md:border-8 border-white dark:border-gray-800 shadow-lg object-cover"
        />
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Portfolio</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-md mb-4"></div>
          <h3 className="text-xl font-bold mb-2 dark:text-white">Project {item}</h3>
          <p className="text-gray-600 dark:text-gray-300">A brief description of this amazing project and its key features.</p>
        </div>
      ))}
    </div>
  </div>
);

const Blog = () => (
  <div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2].map((item) => (
        <div key={item} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">Blog Post {item}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Posted on January {item}, 2024</p>
          <p className="text-gray-700 dark:text-gray-300">This is a preview of an interesting blog post about technology and development...</p>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div>
    <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About Me</h1>
    
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          I'm a passionate software developer with a love for creating elegant solutions 
          to complex problems. With over 5 years of experience in the industry, I've had 
          the privilege of working on diverse projects across various sectors.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2 dark:text-white">Frontend</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold mb-2 dark:text-white">Backend</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>Node.js</li>
              <li>Python</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <img 
          src="/api/placeholder/600/400" 
          alt="About" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>

    <div className="mt-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="text-3xl mb-4">🛠</div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">Software Development</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Full-stack expertise with a knack for clean code. I architect and deliver web apps, 
            APIs, and microservices that scale with your ambitions.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">AI & Machine Learning</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Exploring intelligent automation, NLP, and predictive models to solve real-world challenges. 
            Think smarter workflows, data-driven insights, and systems that learn.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="text-3xl mb-4">🔒</div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">DevSecOps</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Building bridges between development and security. CI/CD pipelines, cloud infrastructure, 
            and robust monitoring—<em>because speed shouldn't compromise safety</em>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-8 bg-white dark:bg-gray-900 min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
