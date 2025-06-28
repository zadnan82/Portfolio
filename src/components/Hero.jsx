import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, Sparkles, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { t, getCurrentTheme, getCurrentLanguage } from './utils/i18n';
import profileImage from '../assets/profile.png';
import init from '../assets/za.png';

export default function HeroSection() {
  const [text, setText] = useState('');
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  const [imageError, setImageError] = useState(false);
  const titleRole = t('title_role');
  
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
    let i = 0;
    setText(''); // Reset text when language changes
    const timer = setInterval(() => {
      setText(titleRole.slice(0, i));
      i++;
      if (i > titleRole.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [titleRole]);

  const getThemeClasses = () => ({
    text: theme === 'dark' ? 'text-white' : 'text-gray-900',
    textSecondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    textAccent: theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600',
    textCyan: theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600',
    textOrange: theme === 'dark' ? 'text-orange-400' : 'text-orange-600',
    textEmerald: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
    textPink: theme === 'dark' ? 'text-pink-400' : 'text-pink-600',
    gradient: theme === 'dark' 
      ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-gray-100 to-gray-200',
    avatarGlow: theme === 'dark' 
      ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500' 
      : 'bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400'
  });

  const themeClasses = getThemeClasses();

  // Function to handle CV download
  const handleDownloadCV = () => {
    // You can either:
    // 1. Link to a CV file in your public folder
    const cvUrl = '/cv/Zainab_Adnan_CV.pdf'; // Place your CV in public/cv/ folder
    
    // 2. Or create a download link
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Zainab_Adnan_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle email contact
  const handleGetInTouch = () => {
    const subject = language === 'ar' 
      ? 'استفسار من الموقع الشخصي' 
      : language === 'sv' 
      ? 'Förfrågan från portfolio' 
      : 'Inquiry from Portfolio Website';
    
    const body = language === 'ar'
      ? 'مرحبا زينب،%0D%0A%0D%0Aأود التواصل معك بخصوص...'
      : language === 'sv'
      ? 'Hej Zainab,%0D%0A%0D%0AJag skulle vilja kontakta dig angående...'
      : 'Hello Zainab,%0D%0A%0D%0AI would like to get in touch regarding...';

    const mailtoUrl = `mailto:zadnaniths@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`flex items-center gap-3 ${themeClasses.textCyan} font-medium tracking-wider uppercase text-sm`}
              >
                {/* ZA Logo Image */}
                <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg vibrant-glow">
                  <img 
                    src={init}
                    alt="ZA Logo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center rounded-lg">
                          <span class="text-white font-bold text-sm">ZA</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                <Sparkles className="w-4 h-4" />
                {t('welcome')}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className={`text-6xl lg:text-7xl font-bold ${themeClasses.text} leading-tight`}
              >
                Zainab
                <span className="gradient-text block">Adnan</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={`text-2xl lg:text-3xl ${themeClasses.textAccent} font-light h-12 flex items-center gap-2`}
              >
                <Zap className={`w-8 h-8 ${themeClasses.textOrange}`} />
                {text}
                <span className={`animate-pulse ${themeClasses.textPink}`}>|</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className={`text-lg ${themeClasses.textSecondary} leading-relaxed max-w-xl`}
            >
              {t('hero_description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-full text-white font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 vibrant-glow hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('download_cv')}
              </Button>
              
              <Button 
                onClick={handleGetInTouch}
                variant="outline" 
                className={`border-2 ${
                  theme === 'dark' 
                    ? 'border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-white' 
                    : 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'
                } px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105`}
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('get_in_touch')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className={`flex items-center gap-2 ${themeClasses.textEmerald}`}>
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:zadnaniths@gmail.com" 
                  className="text-sm hover:underline transition-all duration-300"
                >
                  zadnaniths@gmail.com
                </a>
              </div>
              <div className={`flex items-center gap-2 ${themeClasses.textOrange}`}>
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+46736953102" 
                  className="text-sm hover:underline transition-all duration-300"
                >
                  +46 73 695 31 02
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="relative floating-animation">
              <div className="w-96 h-96 mx-auto relative">
                <div className={`absolute inset-0 ${themeClasses.avatarGlow} rounded-full opacity-30 blur-3xl vibrant-glow`}></div>
                <div className="relative glass-effect rounded-full p-8 shadow-2xl">
                  <div className={`w-full h-full ${themeClasses.avatarGlow} rounded-full flex items-center justify-center`}>
                    <div className={`w-64 h-64 ${themeClasses.gradient} rounded-full flex items-center justify-center border-4 ${
                      theme === 'dark' ? 'border-white/20' : 'border-white/50'
                    } relative overflow-hidden`}>
                      {!imageError ? (
                        <img 
                          src={profileImage}
                          alt="Zainab Adnan"
                          className="w-full h-full object-cover rounded-full"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <span className={`text-6xl font-bold bg-gradient-to-r ${
                          theme === 'dark' 
                            ? 'from-cyan-400 to-purple-400' 
                            : 'from-cyan-600 to-purple-600'
                        } bg-clip-text text-transparent`}>ZA</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-20 h-20 glass-effect rounded-2xl flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360, y: [0, 10, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-10 w-16 h-16 glass-effect rounded-xl flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500"
            >
              <span className="text-xl">💻</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 w-12 h-12 glass-effect rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <span className="text-lg">⚡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`flex flex-col items-center gap-2 ${themeClasses.textCyan}`}
        >
          <span className="text-sm font-medium">{t('scroll_explore')}</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}