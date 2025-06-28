import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2 } from 'lucide-react';
import { t, getCurrentTheme } from './utils/i18n';

const skillCategories = [
  {
    category: "programming_languages",
    skills: [
      { name: "C#", level: 90, color: "from-purple-500 to-pink-500" },
      { name: "javascript", level: 85, color: "from-yellow-500 to-orange-500" },
      { name: "dart", level: 80, color: "from-blue-500 to-cyan-500" },
      { name: "swift", level: 75, color: "from-orange-500 to-red-500" },
      { name: "kotlin", level: 75, color: "from-green-500 to-emerald-500" },
      { name: "cpp", level: 70, color: "from-red-500 to-pink-500" }
    ]
  },
  {
    category: "frameworks_technologies",
    skills: [
      { name: "dot_net", level: 90, color: "from-indigo-500 to-purple-500" },
      { name: "react", level: 85, color: "from-cyan-500 to-blue-500" },
      { name: "flutter", level: 80, color: "from-blue-500 to-indigo-500" },
      { name: "sql", level: 85, color: "from-teal-500 to-green-500" },
      { name: "oracle", level: 75, color: "from-red-500 to-orange-500" }
    ]
  },
  {
    category: "leadership_management",
    skills: [
      { name: "team_leadership", level: 95, color: "from-purple-500 to-pink-500" },
      { name: "regional_management", level: 90, color: "from-indigo-500 to-purple-500" },
      { name: "training_development", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "customer_relations", level: 95, color: "from-cyan-500 to-teal-500" },
      { name: "business_strategy", level: 85, color: "from-emerald-500 to-green-500" }
    ]
  },
  {
    category: "languages",
    skills: [
      { name: "arabic", level: 100, color: "from-emerald-500 to-green-500" },
      { name: "english", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "swedish", level: 95, color: "from-yellow-500 to-orange-500" },
      { name: "french", level: 65, color: "from-indigo-500 to-blue-500" },
      { name: "spanish", level: 65, color: "from-red-500 to-pink-500" }
    ]
  }
];

export default function SkillsVisualization() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(getCurrentTheme());
    
    const handleThemeChange = (event) => {
      setTheme(event.detail);
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  const getThemeClasses = () => ({
    text: theme === 'dark' ? 'text-white' : 'text-gray-900',
    textSecondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    textAccent: theme === 'dark' ? 'text-orange-400' : 'text-orange-600',
    glass: theme === 'dark' 
      ? 'bg-white/10 backdrop-blur-md border border-white/10' 
      : 'bg-white/80 backdrop-blur-md border border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:shadow-lg hover:shadow-cyan-500/20' : 'hover:shadow-lg hover:shadow-cyan-500/30',
    skillBg: theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-200/80',
    skillPercent: theme === 'dark' ? 'bg-white/10' : 'bg-white/80'
  });

  const themeClasses = getThemeClasses();

  return (
    <section id="skills" className="py-8 px-4 bg-gradient-to-b from-transparent via-cyan-900/20 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap className={`w-5 h-5 ${themeClasses.textAccent}`} />
            <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
              {t('skills_expertise').split(' ')[0]} & <span className="gradient-text">{t('skills_expertise').split(' ')[2]}</span>
            </h2>
          </div>
          <p className={`text-sm ${themeClasses.textSecondary} max-w-xl mx-auto`}>
            {t('skills_subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-2xl p-4 shadow-2xl ${themeClasses.hover} transition-all duration-300 ${themeClasses.glass}`}
            >
              <h3 className={`text-lg font-bold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
                {t(category.category)}
                <Code2 className={`w-4 h-4 ${themeClasses.textAccent} ml-auto`} />
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`${themeClasses.text} font-medium text-sm`}>
                        {skill.name === 'C#' ? 'C#' : t(skill.name)}
                      </span>
                      <span className={`text-cyan-400 text-xs font-semibold ${themeClasses.skillPercent} px-2 py-0.5 rounded-full`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className={`relative h-2 ${themeClasses.skillBg} rounded-full overflow-hidden border ${
                      theme === 'dark' ? 'border-white/10' : 'border-gray-300'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden shadow-sm`}
                      >
                        <motion.div
                          animate={{ x: ["0%", "100%", "0%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                        
                        {/* Glowing effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-50 blur-sm`}></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}