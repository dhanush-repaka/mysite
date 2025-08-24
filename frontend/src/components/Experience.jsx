import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = ({ data }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {data.title}
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {data.roles.map((role, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < data.roles.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-2">{role.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span className="text-sm">{role.company}</span>
                        </div>
                        {role.client && (
                          <div className="flex items-center space-x-1">
                            <ChevronRight size={16} />
                            <span className="text-sm">{role.client}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{role.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{role.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {role.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;