import React from 'react';
import { Calendar, MapPin, Briefcase, Code, Users, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Product Developer",
      company: "Kyle Solution Pvt Ltd, Calicut",
      period: "Jan 2025 – Present",
      type: "Full-time",
      achievements: [
        "Developed POS app for local retail transaction & inventory (Windows + Mobile)",
        "Android mobile app using React Native for offline sync",
        "Enabled LAN-based connectivity & real-time data sync",
        "Integrated secure QR/barcode-based local payment system"
      ],
      color: "primary"
    },
    {
      icon: Code,
      title: "Freelance Web Developer",
      company: "Independent",
      period: "Sep 2024 – Dec 2024",
      type: "Freelance",
      achievements: [
        "Full-featured POS mobile app for supermarkets",
        "Barcode scanning, category-based product filtering",
        "Built with clean UI using Bootstrap and CSS"
      ],
      color: "accent"
    },
    {
      icon: Users,
      title: "Development Intern",
      company: "Guvi Geeks Pvt Ltd, Chennai",
      period: "Jul 2024 – Sep 2024",
      type: "Internship",
      achievements: [
        "Built 5 RESTful APIs, improved efficiency by 30%",
        "Added Login, OTP, Password Reset to auth flow",
        "Collaborated in agile teams for backend development"
      ],
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    return color === 'primary'
      ? {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        glow: 'shadow-blue-500/10'
      }
      : {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        glow: 'shadow-purple-500/10'
      };
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`relative flex items-center mb-12 animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline node */}
                <div className={`absolute left-6 md:left-1/2 w-4 h-4 ${colors.bg} ${colors.border} border-2 rounded-full transform md:-translate-x-2 z-10 shadow-lg ${colors.glow}`}>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <exp.icon size={24} className={colors.text} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                        <p className={`${colors.text} font-medium mb-2`}>{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-medium`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start space-x-2">
                          <Zap size={16} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;