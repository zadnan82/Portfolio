import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star, Brain, Code, BookOpen } from 'lucide-react';
import { t, getCurrentTheme, getCurrentLanguage } from './utils/i18n';

const educations = [
  {
    degree: "ai_developer_program",
    school: "iths",
    period: "period_2024_2025",
    location: "stockholm_sweden",
    status: "ongoing",
    description: "advanced_artificial_intelligence",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    degree: "machine_learning_program",
    school: "teknik_hogskolan",
    period: "period_2024_2025",
    location: "stockholm_sweden",
    status: "ongoing",
    description: "specialized_machine_learning",
    icon: Brain,
    color: "from-cyan-500 to-blue-500"
  },
  {
    degree: "net_developer",
    school: "kyh_hogskolan",
    period: "period_ongoing",
    location: "stockholm_sweden",
    status: "graduating_2024",
    description: "full_stack_net",
    icon: Code,
    color: "from-emerald-500 to-green-500"
  },
  {
    degree: "mobile_web_developer",
    school: "sti_hogskolan",
    period: "period_ongoing",
    location: "stockholm_sweden",
    status: "graduated_2023",
    description: "mobile_web_development",
    icon: Code,
    color: "from-orange-500 to-amber-500"
  },
  {
    degree: "mobile_web_developer",
    school: "it_hogskolan",
    period: "period_completed",
    location: "stockholm_sweden",
    status: "graduated_2023",
    description: "comprehensive_development",
    icon: Code,
    color: "from-indigo-500 to-purple-500"
  },
  {
    degree: "hospitality_diploma",
    school: "cesar_ritz",
    period: "period_completed",
    location: "brig_switzerland",
    status: "graduated_2006",
    description: "international_hospitality",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-500"
  }
];

export default function EducationSection() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setTheme(getCurrentTheme());
    setLanguage(getCurrentLanguage());
    
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

  const getThemeClasses = () => ({
    text: theme === 'dark' ? 'text-white' : 'text-gray-900',
    textSecondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    textAccent: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
    glass: theme === 'dark' 
      ? 'bg-white/10 backdrop-blur-lg border-white/10' 
      : 'bg-white/80 backdrop-blur-lg border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:shadow-purple-500/20' : 'hover:shadow-purple-500/30'
  });

  const getStatusBadgePosition = () => {
    // In RTL (Arabic), position the status badge on the left
    return language === 'ar' ? 'top-4 left-4' : 'top-4 right-4';
  };

  const themeClasses = getThemeClasses();

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className={`w-8 h-8 ${themeClasses.textAccent}`} />
            <h2 className={`text-5xl font-bold ${themeClasses.text}`}>
              {t('academic_excellence').split(' ')[0]} <span className="gradient-text">{t('academic_excellence').split(' ')[1]}</span>
            </h2>
          </div>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
            {t('education_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`glass-effect rounded-2xl p-8 h-full shadow-2xl ${themeClasses.hover} transition-all duration-500 ${themeClasses.glass} relative`}
              >
                
                {/* Card Header with Icon and Status Badge - RTL Layout */}
                <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : ''} items-start justify-between mb-6`}>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center shadow-2xl vibrant-glow flex-shrink-0`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="flex-shrink-0">
                    {edu.status === 'ongoing' && (
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        {t('ongoing')}
                      </div>
                    )}
                    {edu.status.includes('graduated') && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3" />
                        {t('completed')}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content - with RTL-aware text alignment */}
                <div className={`space-y-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-xl font-bold ${themeClasses.text} leading-tight`}>
                    {t(edu.degree)}
                  </h3>
                  
                  <h4 className={`text-lg font-semibold ${themeClasses.textAccent}`}>
                    {t(edu.school)}
                  </h4>

                  <p className={`${themeClasses.textSecondary} text-sm leading-relaxed`}>
                    {t(edu.description)}
                  </p>

                  <div className={`space-y-2 text-sm ${themeClasses.textSecondary}`}>
                    <div className={`flex items-center gap-2 ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                    } rounded-full px-3 py-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span>{t(edu.period)}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                    } rounded-full px-3 py-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span>{t(edu.location)}</span>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-500 -z-10`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}