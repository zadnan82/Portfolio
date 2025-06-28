import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { t, getCurrentTheme, getCurrentLanguage } from './utils/i18n';

const experiences = [
  {
    title: "regional_area_manager",
    company: "alshaya_company",
    period: "december_2011_june_2019",
    location: "dubai_uae",
    highlights: [
      "direct_responsibility",
      "conducted_visits",
      "trained_coached",
      "developed_improvement"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "senior_sales_executive",
    company: "arabian_adventures",
    period: "november_2010_december_2011",
    location: "dubai_uae",
    highlights: [
      "organized_events",
      "handled_weddings",
      "communicated_clients"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "team_leader",
    company: "hamptons_international",
    period: "december_2007_may_2010",
    location: "dubai_uae",
    highlights: [
      "top_performer",
      "leading_team",
      "created_policy",
      "conducted_training"
    ],
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "front_desk_trainer",
    company: "ritz_carlton",
    period: "october_2006_november_2007",
    location: "dubai_uae",
    highlights: [
      "conducted_training",
      "provided_it_help",
      "guest_recognition"
    ],
    color: "from-orange-500 to-amber-500"
  }
];

export default function ExperienceTimeline() {
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
    textAccent: theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600',
    glass: theme === 'dark' 
      ? 'bg-white/10 backdrop-blur-md border border-white/10' 
      : 'bg-white/80 backdrop-blur-md border border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:shadow-lg hover:shadow-cyan-500/20' : 'hover:shadow-lg hover:shadow-cyan-500/30'
  });

  const getTimelinePosition = (index) => {
    if (language === 'ar') {
      return index % 2 === 0 ? 'lg:pl-8 lg:mr-auto' : 'lg:pr-8';
    }
    return index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto';
  };

  const getTimelineDotPosition = (index) => {
    if (language === 'ar') {
      return index % 2 === 0 ? 'lg:-left-4' : 'lg:-right-4';
    }
    return index % 2 === 0 ? 'lg:-right-4' : 'lg:-left-4';
  };

  const getAnimationDirection = (index) => {
    if (language === 'ar') {
      return index % 2 === 0 ? 30 : -30;
    }
    return index % 2 === 0 ? -30 : 30;
  };

  const themeClasses = getThemeClasses();

  return (
    <section id="experience" className="py-8 px-4 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <TrendingUp className={`w-5 h-5 ${themeClasses.textAccent}`} />
            <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
              {t('professional_journey').split(' ')[0]} <span className="gradient-text">{t('professional_journey').split(' ')[1]}</span>
            </h2>
          </div>
          <p className={`text-sm ${themeClasses.textSecondary} max-w-xl mx-auto`}>
            {t('experience_subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: getAnimationDirection(index) }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative lg:w-1/2 ${getTimelinePosition(index)}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-4 ${getTimelineDotPosition(index)} w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-2xl hidden lg:flex vibrant-glow`}>
                  <Building className="w-4 h-4 text-white" />
                </div>

                <motion.div 
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`glass-effect rounded-2xl p-4 shadow-2xl ${themeClasses.hover} transition-all duration-300 ${themeClasses.glass}`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center lg:hidden shadow-2xl vibrant-glow`}>
                      <Building className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${themeClasses.text} mb-1`}>{t(exp.title)}</h3>
                      <h4 className={`text-base font-semibold ${themeClasses.textAccent} mb-2`}>{t(exp.company)}</h4>
                      
                      <div className={`flex flex-wrap gap-3 text-xs ${themeClasses.textSecondary} mb-3`}>
                        <div className={`flex items-center gap-1 ${
                          theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                        } rounded-full px-2 py-1`}>
                          <Calendar className="w-3 h-3 text-emerald-400" />
                          <span>{t(exp.period)}</span>
                        </div>
                        <div className={`flex items-center gap-1 ${
                          theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                        } rounded-full px-2 py-1`}>
                          <MapPin className="w-3 h-3 text-orange-400" />
                          <span>{t(exp.location)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (hIndex * 0.05) }}
                        viewport={{ once: true }}
                        className={`flex items-start gap-2 ${themeClasses.textSecondary} text-sm`}
                      >
                        <Award className="w-3 h-3 text-pink-400 mt-0.5 flex-shrink-0" />
                        <span>{t(highlight)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}