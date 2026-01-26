import React, { useState, useEffect } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Skills from "./Skills";
import Contact from "./Contact";
import BlogSection from "./BlogSection";
import Navigation from "./Navigation";
import { mockData } from "../data/mockData";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("header");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["header", "about", "experience", "education", "achievements", "skills", "contact", "blog"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div id="header">
        <Header data={mockData.header} scrollToSection={scrollToSection} />
      </div>
      
      <motion.div
        id="about"
        className="section-spacing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutMe data={mockData.about} />
      </motion.div>
      
      <motion.div
        id="experience"
        className="section-spacing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Experience data={mockData.experience} />
      </motion.div>
      
      <motion.div
        id="education"
        className="section-spacing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Education data={mockData.education} />
      </motion.div>
      
      <motion.div
        id="achievements"
        className="section-spacing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Achievements data={mockData.achievements} />
      </motion.div>
      
      <motion.div
        id="skills"
        className="section-spacing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Skills data={mockData.skills} />
      </motion.div>
      
      <motion.div
        id="contact"
        className="section-spacing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Contact data={mockData.contact} />
      </motion.div>
      
      <motion.div
        id="blog"
        className="section-spacing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <BlogSection />
      </motion.div>
    </div>
  );
};

export default Portfolio;
