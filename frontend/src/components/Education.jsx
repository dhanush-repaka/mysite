import React from "react";
import { GraduationCap, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Education = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
            <Sparkles className="text-blue-400" size={32} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight gradient-text">
            {data.title}
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              className="modern-card p-8 relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {/* Gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${
                  item.type === 'degree'
                    ? 'from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20'
                    : 'from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20'
                } transition-all duration-500 rounded-2xl`}
              />
              
              <div className="flex items-start space-x-6 relative z-10">
                <motion.div
                  className={`p-4 rounded-2xl ${
                    item.type === 'degree'
                      ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30'
                      : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                  }`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.type === 'degree' ? (
                    <GraduationCap className="text-purple-400" size={32} />
                  ) : (
                    <Award className="text-blue-400" size={32} />
                  )}
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-gray-400 mb-4 text-lg">{item.institution}</p>
                  <div className="flex items-center justify-between">
                    <motion.span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${
                        item.type === 'degree'
                          ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.type === 'degree' ? 'Degree' : 'Certification'}
                    </motion.span>
                    <span className="text-lg font-bold text-white">{item.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
