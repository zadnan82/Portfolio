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
      ? 'bg-white/10 backdrop-blur-lg border-white/10' 
      : 'bg-white/80 backdrop-blur-lg border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:shadow-cyan-500/20' : 'hover:shadow-cyan-500/30'
  });

  // RTL-aware positioning functions
  const getTimelinePosition = (index) => {
    if (language === 'ar') {
      // In Arabic, reverse the positioning
      return index % 2 === 0 ? 'lg:pl-12 lg:mr-auto' : 'lg:pr-12';
    }
    // Default LTR positioning
    return index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto';
  };

  const getTimelineDotPosition = (index) => {
    if (language === 'ar') {
      // In Arabic, reverse the dot positioning
      return index % 2 === 0 ? 'lg:-left-6' : 'lg:-right-6';
    }
    // Default LTR positioning
    return index % 2 === 0 ? 'lg:-right-6' : 'lg:-left-6';
  };

  const getAnimationDirection = (index) => {
    if (language === 'ar') {
      // In Arabic, reverse the animation direction
      return index % 2 === 0 ? 50 : -50;
    }
    // Default LTR animation
    return index % 2 === 0 ? -50 : 50;
  };

  const themeClasses = getThemeClasses();

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className={`w-8 h-8 ${themeClasses.textAccent}`} />
            <h2 className={`text-5xl font-bold ${themeClasses.text}`}>
              {t('professional_journey').split(' ')[0]} <span className="gradient-text">{t('professional_journey').split(' ')[1]}</span>
            </h2>
          </div>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
            {t('experience_subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: getAnimationDirection(index) }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative lg:w-1/2 ${getTimelinePosition(index)}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-6 ${getTimelineDotPosition(index)} w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-2xl hidden lg:flex vibrant-glow`}>
                  <Building className="w-6 h-6 text-white" />
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`glass-effect rounded-2xl p-8 shadow-2xl ${themeClasses.hover} transition-all duration-300 ${themeClasses.glass}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center lg:hidden shadow-lg`}>
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${themeClasses.text} mb-2`}>{t(exp.title)}</h3>
                      <h4 className={`text-lg font-semibold ${themeClasses.textAccent} mb-3`}>{t(exp.company)}</h4>
                      
                      <div className={`flex flex-wrap gap-4 text-sm ${themeClasses.textSecondary} mb-4`}>
                        <div className={`flex items-center gap-2 ${
                          theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                        } rounded-full px-3 py-1`}>
                          <Calendar className="w-4 h-4 text-emerald-400" />
                          <span>{t(exp.period)}</span>
                        </div>
                        <div className={`flex items-center gap-2 ${
                          theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                        } rounded-full px-3 py-1`}>
                          <MapPin className="w-4 h-4 text-orange-400" />
                          <span>{t(exp.location)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (hIndex * 0.1) }}
                        viewport={{ once: true }}
                        className={`flex items-start gap-3 ${themeClasses.textSecondary}`}
                      >
                        <Award className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
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