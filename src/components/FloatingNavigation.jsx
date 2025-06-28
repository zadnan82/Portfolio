import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, GraduationCap, Code, FolderOpen, Mail, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { t, getCurrentTheme, getCurrentLanguage } from './utils/i18n';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const navigationItems = [
  { id: 'hero', label: 'home', icon: Home, color: 'from-blue-500 to-cyan-500' },
  { id: 'experience', label: 'experience', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
  { id: 'education', label: 'education', icon: GraduationCap, color: 'from-green-500 to-emerald-500' },
  { id: 'skills', label: 'skills', icon: Code, color: 'from-orange-500 to-amber-500' },
  { id: 'projects', label: 'projects', icon: FolderOpen, color: 'from-indigo-500 to-purple-500' },
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
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      ? 'bg-black/20 backdrop-blur-lg border-white/20' 
      : 'bg-white/60 backdrop-blur-lg border-gray-200/50 shadow-lg',
    text: theme === 'dark' ? 'text-white' : 'text-gray-800',
    textMuted: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    hover: theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100/80'
  });

  const getTooltipPosition = () => {
    // In RTL (Arabic), tooltips should appear on the left side
    return language === 'ar' ? 'left-16' : 'right-16';
  };

  const themeClasses = getThemeClasses();

  return (
    <>
      {/* Language Selector and Theme Toggle - Separate positioning for RTL fix */}
      {language === 'ar' ? (
        // Arabic RTL Layout
        <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
          <LanguageSelector onLanguageChange={onLanguageChange} />
          <ThemeToggle />
        </div>
      ) : (
        // LTR Layout  
        <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
          <ThemeToggle />
          <LanguageSelector onLanguageChange={onLanguageChange} />
        </div>
      )}

      {/* Mobile Menu Button */}
      <motion.div 
        className={`fixed bottom-6 z-50 md:hidden ${
          language === 'ar' ? 'left-6' : 'right-6'
        }`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-2xl vibrant-glow ${themeClasses.text}`}
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
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div 
        className={`fixed top-1/2 transform -translate-y-1/2 z-50 hidden md:block ${
          language === 'ar' ? 'left-4' : 'right-4'
        }`}
        initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <div className={`glass-effect rounded-2xl p-4 shadow-2xl ${themeClasses.glass}`}>
          <div className="space-y-3">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id 
                    ? `bg-gradient-to-r ${item.color} shadow-lg` 
                    : themeClasses.hover
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className={`w-5 h-5 ${
                  activeSection === item.id ? 'text-white' : themeClasses.textMuted
                }`} />
                
                {/* Tooltip */}
                <div className={`absolute ${getTooltipPosition()} ${
                  theme === 'dark' ? 'bg-black/80' : 'bg-gray-900/90'
                } text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap`}>
                  {t(item.label)}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
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
                language === 'ar' ? 'bottom-24 left-6' : 'bottom-24 right-6'
              } glass-effect rounded-2xl p-6 shadow-2xl ${themeClasses.glass} w-80 max-w-[90vw]`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-4">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.id 
                        ? `bg-gradient-to-r ${item.color} text-white` 
                        : `${themeClasses.textMuted} ${themeClasses.hover}`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-5 h-5" />
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