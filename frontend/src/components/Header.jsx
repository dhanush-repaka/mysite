import React from "react";
import { ArrowDown, Mail, Linkedin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Header = ({ data, scrollToSection }) => {
  // Floating animation variants
  const floatingVariants = {
    float: {
      y: [0, -30, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Text reveal animation
  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl orb"
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl orb"
        animate={{
          x: [0, -120, 0],
          y: [0, -100, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl orb"
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-10">
          {/* Sparkle decoration */}
          <motion.div
            className="flex justify-center"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="text-purple-400/50" size={40} />
          </motion.div>

          {/* Professional Photo with modern effects */}
          <motion.div
            className="mx-auto w-56 h-56 rounded-full overflow-hidden relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate="float"
          >
            {/* Glowing ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-75 blur-xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {/* Photo container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1">
              <motion.img
                src={`${process.env.PUBLIC_URL || ''}/images/444BDFC9-735F-44A5-A570-D5FB8533390D_1_105_c.jpeg`}
                alt="Dhanush Repaka"
                className="w-full h-full object-cover rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight gradient-text"
            variants={textRevealVariants}
          >
            {data.name.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Tagline with typewriter effect */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 max-w-5xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            <span className="inline-block">
              {data.tagline.split('|').map((part, i) => (
                <React.Fragment key={i}>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.2 }}
                  >
                    {part.trim()}
                  </motion.span>
                  {i < data.tagline.split('|').length - 1 && (
                    <span className="mx-3 text-purple-400">•</span>
                  )}
                </React.Fragment>
              ))}
            </span>
          </motion.p>

          {/* Quick Links with enhanced hover effects */}
          <motion.div
            className="flex justify-center space-x-6 pt-8"
            variants={itemVariants}
          >
            <motion.a
              href={`mailto:${data.email}`}
              className="group relative flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 px-6 py-3 rounded-full glass border border-purple-500/30 hover:border-purple-500/60 overflow-hidden"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500"
              />
              <Mail size={22} className="relative z-10" />
              <span className="text-sm font-medium relative z-10">Email</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 px-6 py-3 rounded-full glass border border-blue-500/30 hover:border-blue-500/60 overflow-hidden"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"
              />
              <Linkedin size={22} className="relative z-10" />
              <span className="text-sm font-medium relative z-10">LinkedIn</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator with enhanced animation */}
          <motion.button
            onClick={() => scrollToSection("about")}
            className="mt-20 mx-auto flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
            variants={itemVariants}
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-sm mb-3 group-hover:font-semibold transition-all uppercase tracking-wider">
              Explore More
            </span>
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown size={24} className="text-purple-400" />
            </motion.div>
            {/* Animated line */}
            <motion.div
              className="w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent mt-2"
              animate={{
                opacity: [0.3, 1, 0.3],
                height: [40, 60, 40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
