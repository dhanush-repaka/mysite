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

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div id="header">
        <Header data={mockData.header} scrollToSection={scrollToSection} />
      </div>
      
      <div id="about" className="section-spacing">
        <AboutMe data={mockData.about} />
      </div>
      
      <div id="experience" className="section-spacing">
        <Experience data={mockData.experience} />
      </div>
      
      <div id="education" className="section-spacing">
        <Education data={mockData.education} />
      </div>
      
      <div id="achievements" className="section-spacing">
        <Achievements data={mockData.achievements} />
      </div>
      
      <div id="skills" className="section-spacing">
        <Skills data={mockData.skills} />
      </div>
      
      <div id="contact" className="section-spacing">
        <Contact data={mockData.contact} />
      </div>
      
      <div id="blog" className="section-spacing">
        <BlogSection />
      </div>
    </div>
  );
};

export default Portfolio;