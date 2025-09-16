import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/manojmanoj143', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/manoj-k-029274267/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:manojmanoj88680@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918921083090', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center animate-pulse-glow">
            <img
              src="/images/profile.jpg"
              alt="Manoj K Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-primary-500">Manoj</span> K
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Full Stack Developer
          </h2>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8">
            <MapPin size={16} />
            <span>Available for opportunities</span>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building real-time web and mobile applications with the MERN stack. 
            Experienced in REST APIs, full-stack deployment, and AI integrations that solve real-world problems.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-700 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-500/10"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;