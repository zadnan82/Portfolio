import React, { useState } from 'react';
import { getCurrentLanguage } from './utils/i18n';
import HeroSection from './Hero';
import ExperienceTimeline from './Experience';
import EducationSection from './Educatoin';
import SkillsVisualization from './Skills';
import ProjectsGallery from './Projects';
import ContactSection from './Contact';
import FloatingNavigation from './FloatingNavigation';

//import HeroSection from '../components/hero/HeroSection';


export default function Portfolio() {
  const [language, setLanguage] = useState(getCurrentLanguage());

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Force re-render by updating state
    window.location.reload();
  };

  return (
    <div className="overflow-x-hidden">
      <FloatingNavigation onLanguageChange={handleLanguageChange} />
      <HeroSection />
      <ExperienceTimeline />
      <EducationSection />
      <SkillsVisualization />
      <ProjectsGallery />
      <ContactSection />
    </div>
  );
}