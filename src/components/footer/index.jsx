import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Complexity AI. All rights reserved.</div>

          <div className="flex items-center space-x-4">

            <a
              href="https://www.linkedin.com/in/buildwithadi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-800"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/buildwithadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-gray-800"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
