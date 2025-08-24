import React from "react";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Blog & Insights
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Coming Soon Content */}
        <div className="bg-white rounded-lg p-12 text-center shadow-sm">
          <div className="max-w-md mx-auto">
            <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6">
              <BookOpen className="text-blue-600" size={32} />
            </div>
            
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Coming Soon
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              I'm working on sharing insights about automation testing, AI integration in QA, 
              and the latest trends in software testing. Stay tuned for articles on:
            </p>

            <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">AI-powered test automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Self-healing test frameworks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Best practices in QA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Industry trends and tools</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2 text-blue-700">
                <Calendar size={18} />
                <span className="text-sm font-medium">Expected Launch: Q2 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Placeholder */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <h4 className="text-xl font-medium text-gray-900 mb-4">
              Get Notified
            </h4>
            <p className="text-gray-700 mb-6 max-w-md mx-auto">
              Want to be the first to know when I publish new content? Connect with me on LinkedIn 
              for updates on my latest articles and insights.
            </p>
            <a
              href="https://linkedin.com/in/dhanush-repaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <span>Follow on LinkedIn</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;