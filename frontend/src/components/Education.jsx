import React from "react";
import { GraduationCap, Award } from "lucide-react";

const Education = ({ data }) => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {data.title}
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${item.type === 'degree' ? 'bg-blue-100' : 'bg-green-100'}`}>
                  {item.type === 'degree' ? (
                    <GraduationCap className={`${item.type === 'degree' ? 'text-blue-600' : 'text-green-600'}`} size={24} />
                  ) : (
                    <Award className="text-green-600" size={24} />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.institution}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'degree' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.type === 'degree' ? 'Degree' : 'Certification'}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{item.year}</span>
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

export default Education;