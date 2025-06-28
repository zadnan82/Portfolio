import React, { useState, useEffect } from 'react';
import { getCurrentLanguage, getCurrentTheme } from './utils/i18n';
import HeroSection from './Hero';
import ExperienceTimeline from './Experience';
import EducationSection from './Educatoin';
import SkillsVisualization from './Skills';
import ProjectsGallery from './Projects';
import ContactSection from './Contact';
import FloatingNavigation from './FloatingNavigation';

export default function Portfolio() {
  const [language, setLanguage] = useState(getCurrentLanguage());
  const [theme, setTheme] = useState(getCurrentTheme());

  useEffect(() => {
    // Listen for theme changes
    const handleThemeChange = (event) => {
      setTheme(event.detail);
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Force re-render by updating state - no need to reload page
    setTimeout(() => {
      // Trigger a custom event to update all components
      window.dispatchEvent(new CustomEvent('languagechange', { detail: newLanguage }));
    }, 100);
  };

  return (
    <div className={`overflow-x-hidden min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
    }`}>
      <FloatingNavigation onLanguageChange={handleLanguageChange} />
      <HeroSection />
      <ProjectsGallery />
       <SkillsVisualization />
      <ExperienceTimeline />
      <EducationSection />
      <ContactSection />
    </div>
  );
}