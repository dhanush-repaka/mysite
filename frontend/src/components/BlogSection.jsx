import React from "react";
import { BookOpen, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const BlogSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-purple-400" size={32} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight gradient-text">
            Blog & Insights
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Coming Soon Content */}
        <motion.div
          className="modern-card p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -8 }}
        >
          <div className="max-w-md mx-auto">
            <motion.div
              className="p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full w-fit mx-auto mb-8 border border-purple-500/30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <BookOpen className="text-purple-400" size={40} />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-6 gradient-text-static">
              Coming Soon
            </h3>
            
            <p className="text-gray-300 leading-relaxed mb-10 text-lg">
              I'm working on sharing insights about automation testing, AI integration in QA, 
              and the latest trends in software testing. Stay tuned for articles on:
            </p>

            <div className="space-y-4 text-left max-w-sm mx-auto mb-10">
              {[
                "AI-powered test automation",
                "Self-healing test frameworks",
                "Best practices in QA",
                "Industry trends and tools"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-gray-300 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="modern-card p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center space-x-3 text-purple-400">
                <Calendar size={20} />
                <span className="text-sm font-semibold">Expected Launch: Q2 2025</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Signup Placeholder */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="modern-card p-10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30">
            <h4 className="text-2xl font-bold text-white mb-4 gradient-text-static">
              Get Notified
            </h4>
            <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed text-lg">
              Want to be the first to know when I publish new content? Connect with me on LinkedIn 
              for updates on my latest articles and insights.
            </p>
            <motion.a
              href="https://linkedin.com/in/dhanush-repaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Follow on LinkedIn</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
