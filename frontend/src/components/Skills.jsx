import React from "react";
import { Code, Settings, Brain } from "lucide-react";

const Skills = ({ data }) => {
  const getIcon = (category) => {
    if (category.toLowerCase().includes('automation') || category.toLowerCase().includes('development')) {
      return <Code className="text-blue-600" size={24} />;
    } else if (category.toLowerCase().includes('ci/cd') || category.toLowerCase().includes('tools')) {
      return <Settings className="text-green-600" size={24} />;
    } else {
      return <Brain className="text-purple-600" size={24} />;
    }
  };

  const getIconBg = (category) => {
    if (category.toLowerCase().includes('automation') || category.toLowerCase().includes('development')) {
      return 'bg-blue-100';
    } else if (category.toLowerCase().includes('ci/cd') || category.toLowerCase().includes('tools')) {
      return 'bg-green-100';
    } else {
      return 'bg-purple-100';
    }
  };

  const getBadgeColor = (category) => {
    if (category.toLowerCase().includes('automation') || category.toLowerCase().includes('development')) {
      return 'bg-blue-50 text-blue-700 border-blue-200';
    } else if (category.toLowerCase().includes('ci/cd') || category.toLowerCase().includes('tools')) {
      return 'bg-green-50 text-green-700 border-green-200';
    } else {
      return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {data.title}
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.categories.map((categoryData, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-full ${getIconBg(categoryData.category)}`}>
                  {getIcon(categoryData.category)}
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {categoryData.category}
                </h3>
              </div>

              <div className="space-y-3">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`inline-block mr-2 mb-2 px-3 py-2 rounded-lg text-sm font-medium border ${getBadgeColor(categoryData.category)}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Core Expertise</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Combining traditional automation testing expertise with cutting-edge AI technologies to create 
              intelligent, self-healing test frameworks. Passionate about leveraging machine learning to 
              predict test failures and optimize testing strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;