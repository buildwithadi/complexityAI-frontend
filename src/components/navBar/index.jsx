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

            {/* small icon-only button for tight screens */}
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('code-editor');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              aria-label="Analyze"
              className="sm:hidden inline-flex items-center p-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* simple arrow-down icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.894.553l5 10A1 1 0 0115 15H5a1 1 0 01-.894-1.447l5-10A1 1 0 0110 3zm0 4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </button>

            
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


