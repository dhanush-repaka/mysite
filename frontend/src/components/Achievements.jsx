import React from "react";
import { Trophy, Users, Target, Lightbulb, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = ({ data }) => {
  const getIcon = (title) => {
    if (title.toLowerCase().includes('hackathon') || title.toLowerCase().includes('winner')) {
      return <Trophy className="text-yellow-400" size={32} />;
    } else if (title.toLowerCase().includes('top') || title.toLowerCase().includes('ranking')) {
      return <Target className="text-blue-400" size={32} />;
    } else if (title.toLowerCase().includes('award')) {
      return <Users className="text-purple-400" size={32} />;
    } else {
      return <Lightbulb className="text-green-400" size={32} />;
    }
  };

  const getIconBg = (title) => {
    if (title.toLowerCase().includes('hackathon') || title.toLowerCase().includes('winner')) {
      return 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
    } else if (title.toLowerCase().includes('top') || title.toLowerCase().includes('ranking')) {
      return 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30';
    } else if (title.toLowerCase().includes('award')) {
      return 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30';
    } else {
      return 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30';
    }
  };

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
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
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
            <Sparkles className="text-yellow-400" size={32} />
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
          {data.items.map((achievement, index) => (
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
              
              <div className="flex items-start space-x-6 relative z-10">
                <motion.div
                  className={`p-5 rounded-2xl border ${getIconBg(achievement.title)} flex-shrink-0`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {getIcon(achievement.title)}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <motion.span
                      className="text-sm font-bold text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {achievement.year}
                    </motion.span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 modern-card p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "10K+", label: "Hackathon Participants Beaten" },
              { value: "Multiple", label: "Awards Won" },
              { value: "Top 10", label: "All India Ranking" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text-static mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
