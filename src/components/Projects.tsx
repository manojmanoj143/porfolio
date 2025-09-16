import React from 'react';
import { ExternalLink, Github, Brain, Smartphone, Database, TrendingUp, ClipboardSignature, Store } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: Brain,
      title: "Ophthalmic Disease Predictor",
      description: "Deep learning medical image model with 25% improved accuracy using Bootstrap Aggregation for enhanced robustness.",
      tech: ["Python", "Deep Learning", "Bootstrap Aggregation", "Medical Imaging"],
      category: "AI/ML",
      gradient: "from-blue-500 to-blue-600",
      image: "https://images.pexels.com/photos/4021817/pexels-photo-4021817.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Smartphone,
      title: "AI App for Tamil Accent Training",
      description: "AI-based dialect & accent training app achieving <13% Word Error Rate (WER) with accessible design.",
      tech: ["React", "Python", "MongoDB", "Bearer", "Speech Recognition", "Accessibility"],
      category: "Mobile App",
      gradient: "from-pink-500 to-purple-500",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Database,
      title: "Next-Gen Student Management System",
      description: "Scalable MERN stack system managing 1,000+ student records with comprehensive CRUD operations.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
      category: "Web App",
      gradient: "from-green-500 to-teal-500",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: ClipboardSignature,
      title: "Restaurant POS & Management System",
      description: "A comprehensive Point-of-Sale system streamlining order management, billing, and inventory tracking to boost efficiency.",
      tech: ["React", "Python", "MongoDB", "Socket.IO", "Stripe API"],
      category: "Business Solution",
      gradient: "from-orange-500 to-amber-500",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Store,
      title: "E-commerce Mobile App for Retail",
      description: "A feature-rich mobile e-commerce platform for retail, offering a seamless shopping experience with secure payments.",
      tech: ["React", "Python", "MongoDB", "Bearer", "UI/UX Design"],
      category: "Mobile App",
      gradient: "from-purple-600 to-indigo-600",
      image: "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions that blend technology with real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              {/* Project header with gradient and animated image */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-in-out"
                />
                <project.icon
                  size={48}
                  className="absolute text-white opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 h-20">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 px-4 rounded-lg transition-all duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white py-2 px-4 rounded-lg transition-all duration-300">
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
            <span>View All Projects</span>
            <TrendingUp size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;