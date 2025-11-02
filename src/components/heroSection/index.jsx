import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      <section className=" py-10 px-4 sm:px-6 lg:py-30 lg:px-8 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in-up">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Instant Algorithm Analyzer
            </span>
              <span className="block mt-2 text-gray-900">
              Free. Fast. Focused.
            </span>
          </h1>

          {/* Subheading/Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Get detailed Time and Space Complexity analysis with clear explanations and visual insights. Perfect for developers and students alike.
          </p>

          {/* Call to Action Button */}
              <div className="animate-fade-in-up delay-400">
                <a
                  href="#code-editor"
                  onClick={(e) => {
                    // let browser handle native anchor smooth scroll (css `scroll-behavior`) but keep JS fallback
                    const el = document.getElementById('code-editor');
                    if (!el) return;
                    // prevent default so we can ensure smooth behavior works even if css isn't present
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full shadow-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition duration-300 ease-in-out hover:scale-105"
                >
                  <Sparkles className='mr-3 h-6 w-6' /> 
                  Analyze Your Code
                </a>
              </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

