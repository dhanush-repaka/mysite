import React from "react";
import { Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Briefcase className="text-purple-400 mx-auto mb-6" size={40} />
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
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.roles.map((role, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              {/* Animated Timeline line */}
              {index < data.roles.length - 1 && (
                <motion.div
                  className="absolute left-8 top-24 w-1 h-40 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
                  initial={{ height: 0 }}
                  whileInView={{ height: 160 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              )}
              
              <div className="flex items-start space-x-8">
                {/* Animated Timeline dot */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg relative group"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 modern-card p-10 relative overflow-hidden group"
                  whileHover={{ x: 15, scale: 1.02 }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/15 group-hover:to-blue-500/15 transition-all duration-500 rounded-2xl"
                  />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <motion.h3
                          className="text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors"
                          whileHover={{ x: 8 }}
                        >
                          {role.title}
                        </motion.h3>
                        <div className="flex items-center space-x-4 text-gray-400">
                          <motion.div
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.1 }}
                          >
                            <MapPin size={18} className="text-purple-400" />
                            <span className="text-sm">{role.company}</span>
                          </motion.div>
                          {role.client && (
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.1 }}
                            >
                              <ChevronRight size={18} className="text-blue-400" />
                              <span className="text-sm">{role.client}</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <motion.div
                        className="flex items-center space-x-2 text-purple-400 mt-4 md:mt-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Calendar size={18} />
                        <span className="text-sm font-semibold">{role.duration}</span>
                      </motion.div>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">{role.description}</p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-white text-lg">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {role.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start space-x-3 group/achievement"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: achIndex * 0.1 }}
                            whileHover={{ x: 8 }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0"
                              whileHover={{ scale: 1.8 }}
                            />
                            <span className="text-gray-300 group-hover/achievement:text-white transition-colors leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
