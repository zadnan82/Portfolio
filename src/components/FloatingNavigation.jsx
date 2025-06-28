import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderOpen, Code, Briefcase, GraduationCap, Mail, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { t, getCurrentTheme, getCurrentLanguage } from './utils/i18n';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const navigationItems = [
  { id: 'hero', label: 'home', icon: Home, color: 'from-blue-500 to-cyan-500' },
  { id: 'projects', label: 'projects', icon: FolderOpen, color: 'from-indigo-500 to-purple-500' },
  { id: 'skills', label: 'skills', icon: Code, color: 'from-orange-500 to-amber-500' },
  { id: 'experience', label: 'experience', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
  { id: 'education', label: 'education', icon: GraduationCap, color: 'from-green-500 to-emerald-500' },
  { id: 'contact', label: 'contact', icon: Mail, color: 'from-pink-500 to-rose-500' }
];

export default function FloatingNavigation({ onLanguageChange }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setTheme(getCurrentTheme());
    setLanguage(getCurrentLanguage());
    
    // Listen for theme changes
    const handleThemeChange = (event) => {
      setTheme(event.detail);
    };
    
    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };
    
    window.addEventListener('themechange', handleThemeChange);
    window.addEventListener('languagechange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'hero';
      
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    let timeoutId;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const getThemeClasses = () => ({
    glass: theme === 'dark' 
      ? 'bg-black/20 backdrop-blur-md border-white/20' 
      : 'bg-white/60 backdrop-blur-md border-gray-200/50 shadow-lg',
    text: theme === 'dark' ? 'text-white' : 'text-gray-800',
    textMuted: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    hover: theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100/80'
  });

  const getTooltipPosition = () => {
    return language === 'ar' ? 'left-12' : 'right-12';
  };

  const themeClasses = getThemeClasses();

  return (
    <>
      {/* Language Selector and Theme Toggle - Smaller sizes */}
      {language === 'ar' ? (
        <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
          <LanguageSelector onLanguageChange={onLanguageChange} />
          <ThemeToggle />
        </div>
      ) : (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelector onLanguageChange={onLanguageChange} />
        </div>
      )}

      {/* Mobile Menu Button - Smaller */}
      <motion.div 
        className={`fixed bottom-4 z-50 md:hidden ${
          language === 'ar' ? 'left-4' : 'right-4'
        }`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-xl vibrant-glow text-white border-0"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Desktop Navigation - Smaller */}
      <motion.div 
        className={`fixed top-1/2 transform -translate-y-1/2 z-50 hidden md:block ${
          language === 'ar' ? 'left-3' : 'right-3'
        }`}
        initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className={`glass-effect rounded-2xl p-2 shadow-2xl ${themeClasses.glass}`}>
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id 
                    ? `bg-gradient-to-r ${item.color} shadow-md` 
                    : themeClasses.hover
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className={`w-3.5 h-3.5 ${
                  activeSection === item.id ? 'text-white' : themeClasses.textMuted
                }`} />
                
                {/* Tooltip - Smaller */}
                <div className={`absolute ${getTooltipPosition()} ${
                  theme === 'dark' ? 'bg-black/80' : 'bg-gray-900/90'
                } text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap`}>
                  {t(item.label)}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu - Smaller */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${
              theme === 'dark' ? 'bg-black/50' : 'bg-black/30'
            } backdrop-blur-sm z-40 md:hidden`}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className={`absolute ${
                language === 'ar' ? 'bottom-16 left-4' : 'bottom-16 right-4'
              } glass-effect rounded-2xl p-4 shadow-2xl ${themeClasses.glass} w-64 max-w-[90vw]`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-3">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? `bg-gradient-to-r ${item.color} text-white` 
                        : `${themeClasses.textMuted} ${themeClasses.hover}`
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-xs font-medium">{t(item.label)}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}