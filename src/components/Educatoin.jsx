import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star, Brain, Code, BookOpen } from 'lucide-react';
import { t, getCurrentTheme, getCurrentLanguage } from './utils/i18n';

const educations = [
  {
    degree: "ai_developer_program",
    school: "iths",
    period: "period_2024_2026",
    location: "stockholm_sweden",
    status: "ongoing",
    description: "advanced_artificial_intelligence",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  
  {
    degree: "machine_learning_program",
    school: "teknik_hogskolan",
    period: "period_2024_2026",
    location: "stockholm_sweden",
    status: "ongoing",
    description: "specialized_machine_learning",
    icon: Brain,
    color: "from-cyan-500 to-blue-500"
  },
  {
    degree: "net_developer",
    school: "kyh_hogskolan",
    period: "period_completed",
    location: "stockholm_sweden",
    status: "graduated",
    description: "full_stack_net",
    icon: Code,
    color: "from-emerald-500 to-green-500"
  },
  {
    degree: "iot_developer",
    school: "sti_hogskolan",
    period: "period_completed",
    location: "stockholm_sweden",
    status: "graduated",
    description: "iot_development",
    icon: Code,
    color: "from-orange-500 to-amber-500"
  },
  {
    degree: "mobile_web_developer",
    school: "it_hogskolan",
    period: "period_completed",
    location: "stockholm_sweden",
    status: "graduated",
    description: "comprehensive_development",
    icon: Code,
    color: "from-indigo-500 to-purple-500"
  },
  {
    degree: "hospitality_diploma",
    school: "cesar_ritz",
    period: "period_completed",
    location: "brig_switzerland",
    status: "graduated",
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
      ? 'bg-white/10 backdrop-blur-md border border-white/10' 
      : 'bg-white/80 backdrop-blur-md border border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:shadow-lg hover:shadow-purple-500/20' : 'hover:shadow-lg hover:shadow-purple-500/30'
  });

  const getStatusBadgePosition = () => {
    return language === 'ar' ? 'top-2 left-2' : 'top-2 right-2';
  };

  const themeClasses = getThemeClasses();

  return (
    <section id="education" className="py-8 px-4 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <BookOpen className={`w-5 h-5 ${themeClasses.textAccent}`} />
            <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
              {t('academic_excellence').split(' ')[0]} <span className="gradient-text">{t('academic_excellence').split(' ')[1]}</span>
            </h2>
          </div>
          <p className={`text-sm ${themeClasses.textSecondary} max-w-xl mx-auto`}>
            {t('education_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`glass-effect rounded-2xl p-4 h-full shadow-2xl ${themeClasses.hover} transition-all duration-500 ${themeClasses.glass} relative`}
              >
                
                {/* Card Header with Icon and Status Badge */}
                <div className={`flex ${language === 'ar' ? 'flex-row-reverse' : ''} items-start justify-between mb-3`}>
                  
                  {/* Icon */}
                  <div className={`w-10 h-10 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 vibrant-glow`}>
                    <edu.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Status Badge */}
                  <div className="flex-shrink-0">
                    {edu.status === 'ongoing' && (
                                              <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-2xl vibrant-glow">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        {t('ongoing')}
                      </div>
                    )}
                    {edu.status.includes('graduated') && (
                                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-2xl vibrant-glow">
                        <Star className="w-2.5 h-2.5" />
                        {t('completed')}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-3 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-base font-bold ${themeClasses.text} leading-tight`}>
                    {t(edu.degree)}
                  </h3>
                  
                  <h4 className={`text-sm font-semibold ${themeClasses.textAccent}`}>
                    {t(edu.school)}
                  </h4>

                  <p className={`${themeClasses.textSecondary} text-xs leading-relaxed`}>
                    {t(edu.description)}
                  </p>

                  <div className={`space-y-1.5 text-xs ${themeClasses.textSecondary}`}>
                    <div className={`flex items-center gap-1.5 ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                    } rounded-full px-2 py-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{t(edu.period)}</span>
                    </div>
                    <div className={`flex items-center gap-1.5 ${
                      theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                    } rounded-full px-2 py-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <MapPin className="w-3 h-3 text-orange-400" />
                      <span>{t(edu.location)}</span>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-lg opacity-0 group-hover:opacity-10 transition-all duration-300 -z-10`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}