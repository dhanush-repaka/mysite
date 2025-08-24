import React from "react";
import { CheckCircle } from "lucide-react";

const AboutMe = ({ data }) => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            {data.title}
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.description}
            </p>
            
            <div className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Current Role</span>
                  <span className="text-sm text-blue-600">IT Analyst</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Company</span>
                  <span className="text-sm text-gray-900">Tata Consultancy Services</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Specialization</span>
                  <span className="text-sm text-gray-900">Automation & AI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Experience</span>
                  <span className="text-sm text-gray-900">5+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;