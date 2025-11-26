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
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        glow: 'shadow-blue-500/10'
      },
      accent: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        glow: 'shadow-purple-500/10'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        glow: 'shadow-green-500/10'
      },
      purple: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-600',
        glow: 'shadow-indigo-500/10'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        glow: 'shadow-orange-500/10'
      }
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <category.icon size={24} className={colors.text} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Award size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Certifications</h3>
                <p className="text-gray-600">Professional development and continuous learning</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-300 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{cert}</span>
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