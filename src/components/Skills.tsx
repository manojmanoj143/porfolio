import React from 'react';
import { Code2, Globe, Database, Wrench, GitBranch, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      color: "primary",
      skills: ["JavaScript", "Python", "PHP", "SQL", ".NET MAUI"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      color: "accent",
      skills: ["HTML5", "CSS3", "React", "Node.js", "Express.js"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "green",
      skills: ["MongoDB", "MySQL"]
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      color: "purple",
      skills: ["Bootstrap", "Tailwind CSS", "Figma", "VFX", "Replit", "Nodemon"]
    },
    {
      icon: GitBranch,
      title: "Version Control",
      color: "orange",
      skills: ["Git", "GitHub"]
    }
  ];

  const certifications = [
    "FullStack Development – GUVI",
    "MERN Stack – Zhahi Tech Training",
    "Mastering Figma – GUVI",
    "JavaScript – GUVI"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: 'bg-primary-500/20',
        border: 'border-primary-500',
        text: 'text-primary-500',
        glow: 'shadow-primary-500/20'
      },
      accent: {
        bg: 'bg-accent-500/20',
        border: 'border-accent-500',
        text: 'text-accent-500',
        glow: 'shadow-accent-500/20'
      },
      green: {
        bg: 'bg-green-500/20',
        border: 'border-green-500',
        text: 'text-green-500',
        glow: 'shadow-green-500/20'
      },
      purple: {
        bg: 'bg-purple-500/20',
        border: 'border-purple-500',
        text: 'text-purple-500',
        glow: 'shadow-purple-500/20'
      },
      orange: {
        bg: 'bg-orange-500/20',
        border: 'border-orange-500',
        text: 'text-orange-500',
        glow: 'shadow-orange-500/20'
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-600 hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <category.icon size={24} className={colors.text} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-3 bg-dark-700/50 rounded-lg hover:bg-dark-600/50 transition-all duration-300"
                    >
                      <span className="text-gray-300 font-medium">{skill}</span>
                      <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.border} border group-hover:scale-125 transition-transform duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-dark-800/30 backdrop-blur-sm rounded-2xl p-8 border border-dark-600">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Award size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Certifications</h3>
                <p className="text-gray-400">Professional development and continuous learning</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-dark-700/30 rounded-lg border border-dark-600 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;