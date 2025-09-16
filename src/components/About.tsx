import React from 'react';
import { Code, Zap, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Expertise",
      description: "Proficient in JavaScript, MERN stack, and modern web technologies"
    },
    {
      icon: Zap,
      title: "Real-time Applications",
      description: "Specialized in building scalable real-time web and mobile applications"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Focused on creating software solutions that address real-world challenges"
    },
    {
      icon: Heart,
      title: "AI Integration",
      description: "Passionate about integrating AI technologies into modern applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-700/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-dark-600 animate-slide-up">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A passionate Full Stack Developer with strong experience in building real-time web and mobile applications. 
              I specialize in JavaScript and the MERN stack, with expertise in REST APIs and full-stack deployment.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm particularly interested in AI integrations and love building scalable software that solves real-world problems. 
              My goal is to create impactful digital experiences that make a difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-dark-700/30 backdrop-blur-sm rounded-xl p-6 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;