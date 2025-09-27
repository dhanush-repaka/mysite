import React from "react";
import { CheckCircle, Award } from "lucide-react";

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

        {/* Full Width Description */}
        <div className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
            {data.description}
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mt-6">
            My passion for test automation stems from witnessing how intelligent testing can transform software quality. 
            With AI increasingly revolutionizing QA practices, I'm dedicated to bridging the gap between traditional 
            testing methodologies and cutting-edge AI solutions to create more efficient, reliable testing frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">Key Expertise</h3>
              {data.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Professional Badges with Real Images */}
            <div className="pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Award className="text-blue-600 mr-2" size={20} />
                Professional Credentials
              </h3>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <img
                    src="./images/oxford-badge.png"
                    alt="Oxford University Badge"
                    className="w-16 h-16 object-contain mx-auto mb-2"
                    onError={(e) => {
                      // Fallback to colored circle if badge image not found
                      console.log("Oxford badge failed to load, using fallback");
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-12 h-12 bg-blue-600 rounded-full items-center justify-center mx-auto mb-2" style={{ display: 'none' }}>
                    <span className="text-white text-xs font-bold">OX</span>
                  </div>
                  <p className="text-xs text-gray-600">Oxford AI</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-xs font-bold">CAIP</span>
                  </div>
                  <p className="text-xs text-gray-600">AI Professional</p>
                </div>
              </div>
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