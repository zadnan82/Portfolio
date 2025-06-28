import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Globe, Code, Briefcase, GraduationCap, Languages, Smartphone, Monitor, Brain, Sparkles, Download, ExternalLink, Star, MapPin, Calendar } from 'lucide-react';
import profileImage from '../assets/profile.png';
const Portfolio2 = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isVisible, setIsVisible] = useState({});

  const translations = {
    en: {
      title: "Zainab Adnan",
      subtitle: "Full-Stack Developer & AI Specialist",
      description: "Crafting the future with code, AI, and limitless creativity",
      about: "About Me",
      aboutText: "Swedish developer with extensive international experience in customer service and management. Now specializing in full-stack development, AI, and machine learning with a passion for creating innovative solutions.",
      experience: "Experience",
      education: "Education",
      skills: "Technical Skills",
      projects: "Projects & Apps",
      contact: "Contact",
      downloadCV: "Download CV",
      viewProject: "View Project",
      comingSoon: "Coming Soon",
      live: "Live",
      currentlyStudying: "Currently Studying",
      graduated: "Graduated",
      buildFutureTogether: "Let's Build the Future Together 🚀",
      letsCreateTogether: "Ready to build something extraordinary together?",
      madeWith: "Crafted with passion using React & cutting-edge technologies",
      email: "Email",
      phone: "Phone"
    },
    ar: {
      title: "زينب عدنان",
      subtitle: "مطورة متكاملة ومتخصصة في الذكاء الاصطناعي",
      description: "صناعة المستقبل بالكود والذكاء الاصطناعي والإبداع اللامحدود",
      about: "نبذة عني",
      aboutText: "مطورة سويدية بخبرة دولية واسعة في خدمة العملاء والإدارة. متخصصة حاليًا في التطوير المتكامل والذكاء الاصطناعي وتعلم الآلة.",
      experience: "الخبرة المهنية",
      education: "التعليم",
      skills: "المهارات التقنية",
      projects: "المشاريع والتطبيقات",
      contact: "اتصل بي",
      downloadCV: "تحميل السيرة الذاتية",
      viewProject: "عرض المشروع",
      comingSoon: "قريباً",
      live: "مباشر",
      currentlyStudying: "حالياً أدرس",
      graduated: "متخرجة",
      buildFutureTogether: "لنبني المستقبل معاً 🚀",
      letsCreateTogether: "مستعدة لبناء شيء استثنائي معاً؟",
      madeWith: "صُنع بشغف باستخدام React وأحدث التقنيات",
      email: "البريد الإلكتروني",
      phone: "الهاتف"
    },
    sv: {
      title: "Zainab Adnan",
      subtitle: "Fullstack-utvecklare & AI-specialist",
      description: "Skapar framtiden med kod, AI och gränslös kreativitet",
      about: "Om mig",
      aboutText: "Svensk utvecklare med omfattande internationell erfarenhet inom kundservice och management. Specialiserar mig nu på fullstack-utveckling, AI och maskininlärning.",
      experience: "Arbetslivserfarenhet",
      education: "Utbildning",
      skills: "Tekniska färdigheter",
      projects: "Projekt & Appar",
      contact: "Kontakt",
      downloadCV: "Ladda ner CV",
      viewProject: "Visa projekt",
      comingSoon: "Kommer snart",
      live: "Live",
      currentlyStudying: "Studerar för närvarande",
      graduated: "Examinerad",
      buildFutureTogether: "Låt oss bygga framtiden tillsammans 🚀",
      letsCreateTogether: "Redo att bygga något extraordinärt tillsammans?",
      madeWith: "Skapad med passion med React & banbrytande teknologier",
      email: "E-post",
      phone: "Telefon"
    }
  };

  const t = translations[currentLang] || translations.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillsData = [
    { name: ".NET", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 92 },
    { name: "Flutter", level: 88 },
    { name: "AI/ML", level: 85 },
    { name: "Python", level: 82 }
  ];

  const projectsData = [
    {
      name: "CVati.com",
      description: "Revolutionary portfolio showcasing advanced development skills",
      tech: ["React", "Node.js", "AI"],
      status: "live",
      url: "https://cvati.com"
    },
    {
      name: "Giggli",
      description: "Next-generation social platform leveraging AI",
      tech: ["React Native", "TensorFlow"],
      status: "development"
    },
    {
      name: "Spectrum Autism",
      description: "Autism support ecosystem powered by machine learning",
      tech: ["Flutter", "ML"],
      status: "development"
    },
    {
      name: "Cosmetics Checker",
      description: "AI-powered beauty intelligence platform",
      tech: ["React Native", "AI"],
      status: "development"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <select
          value={currentLang}
          onChange={(e) => setCurrentLang(e.target.value)}
          className="bg-black/30 backdrop-blur-lg rounded-lg px-3 py-2 text-white border border-white/20"
        >
          <option value="en">🇬🇧 English</option>
          <option value="ar">🇸🇦 العربية</option>
          <option value="sv">🇸🇪 Svenska</option>
        </select>
      </div>

      {/* Navigation */}
      {/* Enhanced Mobile Navigation */}
<nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block lg:hidden">
  <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-3 py-2 flex gap-1 border border-white/20 shadow-2xl">
    {[
      { id: 'hero', icon: '🏠', label: 'Home' },
      { id: 'projects', icon: '💼', label: 'Projects' },
      { id: 'skills', icon: '⚡', label: 'Skills' },
      { id: 'education', icon: '🎓', label: 'Education' },
      { id: 'experience', icon: '📋', label: 'Experience' },
      { id: 'contact', icon: '📧', label: 'Contact' }
    ].map((section) => (
      <button
        key={section.id}
        onClick={() => scrollToSection(section.id)}
        className="px-2 py-2 sm:px-3 sm:py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all text-sm flex items-center justify-center min-w-[40px] hover:scale-110"
        title={section.label}
      >
        <span className="text-base">{section.icon}</span>
      </button>
    ))}
  </div>
</nav>

{/* Desktop Navigation (Sidebar) */}
<nav className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 hidden lg:block">
  <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-white/20 p-2 shadow-2xl">
    {[
      { id: 'hero', icon: '🏠', label: 'Home' },
      { id: 'projects', icon: '💼', label: 'Projects' },
      { id: 'skills', icon: '⚡', label: 'Skills' },
      { id: 'education', icon: '🎓', label: 'Education' },
      { id: 'experience', icon: '📋', label: 'Experience' },
      { id: 'contact', icon: '📧', label: 'Contact' }
    ].map((section) => (
      <button
        key={section.id}
        onClick={() => scrollToSection(section.id)}
        className="block w-12 h-12 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-300 mb-2 last:mb-0 flex items-center justify-center group relative"
        title={section.label}
      >
        <span className="text-lg">{section.icon}</span>
        <div className="absolute left-full ml-3 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {section.label}
        </div>
      </button>
    ))}
  </div>
</nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Professional Photo with Advanced Holographic Effects */}
          <div className="mb-8 md:mb-12 relative">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full animate-spin bg-clip-border">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center p-2">
                  {/* Inner pulsing core with your photo */}
                  <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse p-1">
                    {/* Your actual photo container */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500/80 to-cyan-500/80 flex items-center justify-center">
                      {/* Replace this with your actual photo */}
                      <img 
                        src={profileImage}
                        alt="Zainab Adnan"
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback with your initials */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/80 to-cyan-500/80 items-center justify-center" style={{display: 'none'}}>
                        <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl tracking-wider">ZA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating particles around avatar */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping"
                  style={{
                    left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%`,
                    top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
              
              {/* Additional spinning rings */}
              <div className="absolute inset-4 border-2 border-dotted border-purple-400/50 rounded-full animate-spin opacity-60" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-8 border border-cyan-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-6 text-cyan-300">
            {t.subtitle}
          </h2>
          
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-105 transition-all"
            >
              {t.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border-2 border-purple-400 rounded-full hover:bg-purple-400/20 transition-all"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            {t.projects}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.url ? (
                  <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {t.viewProject}
                  </button>
                ) : (
                  <span className="px-4 py-2 bg-gray-600 rounded-lg text-gray-300">{t.comingSoon}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.skills}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t.education}
          </h2>
          
          <div className="space-y-6">
            {[
              { title: "AI Developer Program", school: "IT-Högskolan (ITHS)", period: "2024-2025", status: t.currentlyStudying },
              { title: "Machine Learning Developer", school: "Teknik Högskolan", period: "2024-2025", status: t.currentlyStudying },
              { title: ".NET Developer", school: "KYH Högskolan", period: "2024", status: t.graduated },
              { title: "Mobile & Web Developer", school: "STI Högskolan", period: "2023", status: t.graduated }
            ].map((edu, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 flex items-center gap-4">
                <GraduationCap className="w-12 h-12 text-blue-400" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{edu.title}</h3>
                  <p className="text-blue-300">{edu.school}</p>
                  <p className="text-gray-400">{edu.period} • {edu.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {t.experience}
          </h2>
          
          <div className="space-y-6">
            {[
              { title: "Regional Area Manager", company: "M.H. Alshaya Co.", period: "2011-2019", location: "Dubai, UAE" },
              { title: "Senior Sales Executive", company: "Arabian Adventures", period: "2010-2011", location: "Dubai, UAE" },
              { title: "Team Leader", company: "Hamptons International", period: "2007-2010", location: "Dubai, UAE" },
              { title: "Departmental Trainer", company: "Ritz Carlton Hotel", period: "2006-2007", location: "Dubai, UAE" }
            ].map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-purple-300">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            {t.contact}
          </h2>
          
          <p className="text-xl text-cyan-200 mb-12">
            {t.letsCreateTogether}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:zainabadnan@hotmail.com" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex items-center gap-4">
              <Mail className="w-8 h-8 text-cyan-400" />
              <div className="text-left">
                <h3 className="font-bold">{t.email}</h3>
                <p className="text-gray-300">zainabadnan@hotmail.com</p>
              </div>
            </a>
            
            <a href="tel:0736953102" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex items-center gap-4">
              <Phone className="w-8 h-8 text-emerald-400" />
              <div className="text-left">
                <h3 className="font-bold">{t.phone}</h3>
                <p className="text-gray-300">0736953102</p>
              </div>
            </a>
          </div>

          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full text-xl font-bold hover:scale-105 transition-all">
            {t.buildFutureTogether}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center">
        <p className="text-gray-400">© 2025 {t.title}. {t.madeWith}</p>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio2;