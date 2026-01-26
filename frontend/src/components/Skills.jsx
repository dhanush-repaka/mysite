import React from "react";
import { Code, Settings, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Skills = ({ data }) => {
  const getIcon = (category) => {
    if (category.toLowerCase().includes('automation') || category.toLowerCase().includes('development')) {
      return <Code className="text-purple-400" size={28} />;
    } else if (category.toLowerCase().includes('ci/cd') || category.toLowerCase().includes('tools')) {
      return <Settings className="text-blue-400" size={28} />;
    } else {
      return <Brain className="text-pink-400" size={28} />;
    }
  };

  const getIconBg = (category) => {
    if (category.toLowerCase().includes('automation') || category.toLowerCase().includes('development')) {
      return 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30';
    } else if (category.toLowerCase().includes('ci/cd') || category.toLowerCase().includes('tools')) {
      return 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    } else {
      return 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-500/30';
    }
  };

  const getBadgeColor = (category) => {
    if (category.toLowerCase().includes('automation') || category.toLowerCase().includes('development')) {
      return 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20';
    } else if (category.toLowerCase().includes('ci/cd') || category.toLowerCase().includes('tools')) {
      return 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20';
    } else {
      return 'bg-pink-500/10 text-pink-300 border-pink-500/30 hover:bg-pink-500/20';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.categories.map((categoryData, index) => (
            <motion.div
              key={index}
              className="modern-card p-8 relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500 rounded-2xl"
              />
              
              <div className="relative z-10">
                <motion.div
                  className="flex items-center space-x-4 mb-8"
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className={`p-4 rounded-2xl border ${getIconBg(categoryData.category)}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {getIcon(categoryData.category)}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {categoryData.category}
                  </h3>
                </motion.div>

                <div className="space-y-3">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className={`inline-block mr-2 mb-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all cursor-default ${getBadgeColor(categoryData.category)}`}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.15, y: -4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="modern-card p-10"
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 gradient-text-static">Core Expertise</h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
              Combining traditional automation testing expertise with cutting-edge AI technologies to create 
              intelligent, self-healing test frameworks. Passionate about leveraging machine learning to 
              predict test failures and optimize testing strategies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
