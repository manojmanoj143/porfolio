import React from 'react';
import { Trophy, MapPin, Calendar, Users, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-primary-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition for excellence and innovation in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-2xl p-8 md:p-12 border border-primary-500/20 animate-slide-up">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                <Trophy size={32} className="text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold">
                    🥇 Top 10
                  </span>
                  <span className="text-primary-500 font-bold text-lg">National Recognition</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  FOSSEE MAPATHON Winner
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Ranked Top 10 in FOSSEE MAPATHON organized by IIT Bombay (2023) for a National Geospatial Mapping Event. 
                  This achievement recognizes excellence in geospatial technology and innovative mapping solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">IIT Bombay</p>
                      <p className="text-gray-400 text-sm">Host Institution</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-accent-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">2023</p>
                      <p className="text-gray-400 text-sm">Competition Year</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">National</p>
                      <p className="text-gray-400 text-sm">Competition Level</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional achievement stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Star, label: "Years Experience", value: "2+" },
              { icon: Trophy, label: "Projects Completed", value: "10+" },
              { icon: Users, label: "Happy Clients", value: "5+" },
              { icon: MapPin, label: "Recognition", value: "Top 10" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-dark-700/30 backdrop-blur-sm rounded-xl border border-dark-600 hover:border-primary-500/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={20} className="text-primary-500" />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;