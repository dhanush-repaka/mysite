import React from "react";
import { Trophy, Users, Target, Lightbulb } from "lucide-react";

const Achievements = ({ data }) => {
  const getIcon = (title) => {
    if (title.toLowerCase().includes('hackathon') || title.toLowerCase().includes('winner')) {
      return <Trophy className="text-yellow-600" size={28} />;
    } else if (title.toLowerCase().includes('top') || title.toLowerCase().includes('ranking')) {
      return <Target className="text-blue-600" size={28} />;
    } else if (title.toLowerCase().includes('award')) {
      return <Users className="text-purple-600" size={28} />;
    } else {
      return <Lightbulb className="text-green-600" size={28} />;
    }
  };

  const getIconBg = (title) => {
    if (title.toLowerCase().includes('hackathon') || title.toLowerCase().includes('winner')) {
      return 'bg-yellow-100';
    } else if (title.toLowerCase().includes('top') || title.toLowerCase().includes('ranking')) {
      return 'bg-blue-100';
    } else if (title.toLowerCase().includes('award')) {
      return 'bg-purple-100';
    } else {
      return 'bg-green-100';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {data.title}
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.items.map((achievement, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className={`p-4 rounded-full ${getIconBg(achievement.title)} flex-shrink-0`}>
                  {getIcon(achievement.title)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium text-gray-900">
                      {achievement.title}
                    </h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Hackathon Participants Beaten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">Multiple</div>
              <div className="text-sm text-gray-600">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">Top 10</div>
              <div className="text-sm text-gray-600">All India Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;