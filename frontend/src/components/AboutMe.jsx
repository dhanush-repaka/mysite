import React from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const AboutMe = ({ data }) => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
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
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {data.description}
            </motion.p>
            
            <motion.div className="space-y-5" variants={itemVariants}>
              {data.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="mt-1"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="text-purple-400 group-hover:text-blue-400 transition-colors" size={24} />
                  </motion.div>
                  <p className="text-gray-300 group-hover:text-white transition-colors text-lg">{highlight}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="modern-card p-10 relative overflow-hidden group"
              whileHover={{ y: -8 }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500 rounded-2xl"
              />
              
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/30 group-hover:via-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 blur-xl"
              />
              
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Current Role", value: "IT Analyst", color: "text-purple-400" },
                  { label: "Company", value: "Tata Consultancy Services", color: "text-white" },
                  { label: "Specialization", value: "Automation & AI", color: "text-white" },
                  { label: "Experience", value: "5+ Years", color: "text-blue-400" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ x: 8 }}
                  >
                    <span className="text-sm font-medium text-gray-400">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color} transition-colors`}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
