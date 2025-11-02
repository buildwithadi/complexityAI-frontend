import { Github, Linkedin } from 'lucide-react';
import React from 'react';

// Define the NavBar component
const NavBar = () => {

  return (
    <nav className="sticky top-0 left-0 right-0 w-full bg-white/60 backdrop-blur-sm shadow z-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-14">

          {/* Left: brand/title */}
          <div className="flex-shrink-0">
            <a href="#" className="text-lg font-semibold text-gray-900">Complexity AI</a>
          </div>

          {/* Right: analyze button + social buttons */}
          <div className="flex items-center space-x-3">            
            <a
              href="https://www.linkedin.com/in/buildwithadi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* LinkedIn svg */}
              <Linkedin/>
            </a>

            <a
              href="https://github.com/buildwithadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-gray-900  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* GitHub svg */}
              <Github/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


