import React from "react";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

const Header = ({ data, scrollToSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Professional Photo */}
          <div className="mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="/mysite/frontend/public/images/professional-photo.jpg"
              alt="Dhanush Repaka"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 tracking-tight">
            {data.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data.tagline}
          </p>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <a
              href={`mailto:${data.email}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:-translate-y-0.5 transform"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:-translate-y-0.5 transform"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="mt-16 mx-auto flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors duration-300 animate-bounce"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
