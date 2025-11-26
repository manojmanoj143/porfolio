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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Manoj</span> K
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Full Stack Developer
            </h2>

            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-500 mb-8">
              <MapPin size={18} />
              <span>Available for opportunities</span>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Passionate about building real-time web and mobile applications with the MERN stack.
              Experienced in REST APIs, full-stack deployment, and AI integrations that solve real-world problems.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-300 hover:border-blue-500 text-gray-600 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/images/profile.jpg"
                    alt="Manoj K Profile"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;