import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { getAvailableLanguages, getCurrentLanguage, setLanguage, getCurrentTheme } from './utils/i18n';

export default function LanguageSelector({ onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const languages = getAvailableLanguages();
  const currentLang = getCurrentLanguage();
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  React.useEffect(() => {
    setTheme(getCurrentTheme());
    
    const handleThemeChange = (event) => {
      setTheme(event.detail);
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange(langCode);
    }
  };

  const getDropdownPosition = () => {
    // In RTL (Arabic), dropdown should open to the left
    return currentLang === 'ar' ? 'left-0' : 'right-0';
  };

  const getThemeStyles = () => ({
    button: theme === 'dark' 
      ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
      : 'bg-black/10 border-gray-300 text-gray-800 hover:bg-gray-200',
    dropdown: theme === 'dark'
      ? 'bg-black/80 backdrop-blur-xl border-white/20'
      : 'bg-white/90 backdrop-blur-xl border-gray-300',
    item: theme === 'dark'
      ? 'text-white hover:bg-white/10'
      : 'text-gray-800 hover:bg-gray-100',
    activeItem: theme === 'dark'
      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
      : 'bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-600'
  });

  const styles = getThemeStyles();

  return (
    <div className="relative">
      {/* Outer frame with glassmorphism matching theme toggle */}
      <div 
        className="rounded-2xl p-1 transition-all duration-500"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.8), rgba(49, 46, 129, 0.6))' 
            : 'linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(249, 115, 22, 0.6))',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: theme === 'dark'
            ? '0 12px 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 12px 40px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="h-10 px-4 border-0 transition-all duration-500 hover:scale-[1.02] transform focus:ring-4 focus:ring-cyan-400/30 rounded-xl"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #312e81)' 
              : 'linear-gradient(135deg, #fbbf24, #f59e0b, #f97316)',
            boxShadow: theme === 'dark'
              ? 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : 'inset 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            color: theme === 'dark' ? '#ffffff' : '#1f2937'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Languages 
                className="w-4 h-4" 
                style={{
                  filter: theme === 'dark' 
                    ? 'drop-shadow(0 0 4px rgba(147, 197, 253, 0.5))'
                    : 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))'
                }}
              />
              {/* Icon glow */}
              <div 
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: theme === 'dark' 
                    ? 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)',
                  transform: 'scale(1.5)'
                }}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span 
                className="text-2xl"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                }}
              >
                {currentLanguage?.flag}
              </span>
              <span className="hidden md:inline font-medium">
                {currentLanguage?.name}
              </span>
            </div>
            
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              style={{
                filter: theme === 'dark' 
                  ? 'drop-shadow(0 0 4px rgba(147, 197, 253, 0.5))'
                  : 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))'
              }}
            />
          </div>

          {/* Enhanced inner glow */}
          <div 
            className="absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none"
            style={{
              background: theme === 'dark'
                ? 'radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
              opacity: 0.6
            }}
          />
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Enhanced Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full mt-2 z-50 min-w-48 ${getDropdownPosition()}`}
            >
              {/* Dropdown frame with glassmorphism */}
              <div
                className="rounded-2xl p-2 shadow-2xl border backdrop-blur-xl"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(15, 15, 35, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)',
                  borderColor: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.15)' 
                    : 'rgba(0, 0, 0, 0.1)',
                  boxShadow: theme === 'dark'
                    ? '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                <div className="space-y-1">
                  {languages.map((language) => (
                    <motion.button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        currentLang === language.code
                          ? ''
                          : ''
                      } ${currentLang === 'ar' ? 'flex-row-reverse text-right' : ''}`}
                      style={{
                        background: currentLang === language.code
                          ? (theme === 'dark' 
                              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))'
                              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))')
                          : 'transparent',
                        color: theme === 'dark' ? '#ffffff' : '#1f2937',
                        boxShadow: currentLang === language.code
                          ? (theme === 'dark' 
                              ? 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.3)'
                              : 'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.2)')
                          : 'none'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: theme === 'dark' 
                          ? 'rgba(255, 255, 255, 0.05)' 
                          : 'rgba(0, 0, 0, 0.05)'
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span 
                        className="text-xl"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}
                      >
                        {language.flag}
                      </span>
                      <span className="font-medium flex-1">{language.name}</span>
                      {currentLang === language.code && (
                        <div 
                          className={`w-2 h-2 rounded-full ${
                            currentLang === 'ar' ? 'mr-auto' : 'ml-auto'
                          }`}
                          style={{
                            background: theme === 'dark' 
                              ? 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                              : 'linear-gradient(135deg, #0891b2, #2563eb)',
                            boxShadow: theme === 'dark'
                              ? '0 0 8px rgba(6, 182, 212, 0.5)'
                              : '0 0 8px rgba(8, 145, 178, 0.4)'
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}