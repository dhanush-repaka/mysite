import React from "react";
import { Calendar, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = "September 2025";

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-medium mb-4">Dhanush Repaka</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Test Automation Specialist passionate about integrating AI into QA workflows. 
              Always exploring innovative testing solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <Calendar size={14} />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/dhanush-repaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <ExternalLink size={14} />
                <span className="text-sm group-hover:underline">LinkedIn Profile</span>
              </a>
              <a
                href="mailto:dhanushrepaka4510@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-sm">dhanushrepaka4510@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Professional Focus */}
          <div>
            <h4 className="font-medium mb-4">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {["Test Automation", "AI/ML", "Selenium", "Playwright", "TCS", "Oxford AI"].map((tag, index) => (
                <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dhanush Repaka. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-400 mx-1" /> and passion for quality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;