import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              <span className="text-primary-500">Manoj</span> K
            </h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto mb-8">
            <blockquote className="text-lg text-gray-300 italic leading-relaxed">
              "Building scalable software solutions that make a difference in people's lives, 
              one line of code at a time."
            </blockquote>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>

          {/* Copyright and Credits */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 Manoj K. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-accent-500 animate-pulse" />
              <Code size={16} className="text-primary-500" />
              <span>and</span>
              <Coffee size={16} className="text-amber-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 hover:bg-primary-500/30 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-110 group"
            aria-label="Back to top"
          >
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-primary-500 group-hover:border-b-white transition-colors duration-300"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;