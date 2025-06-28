import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../entities/Project';
import { ExternalLink, Star, Filter, Smartphone, Globe, Download, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { t, getCurrentTheme } from './utils/i18n';

export default function ProjectsGallery() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [expandedTech, setExpandedTech] = useState(new Set());

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

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const fetchedProjects = await Project.list('-created_date');
      setProjects(fetchedProjects);
      setFilteredProjects(fetchedProjects);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const technologies = [
    { key: 'All', label: 'all' },
    { key: 'React', label: 'react' },
    { key: 'Flutter', label: 'flutter' },
    { key: '.NET', label: 'dot_net' },
    { key: 'C#', label: 'C#' },
    { key: 'JavaScript', label: 'javascript' },
    { key: 'AI/ML', label: 'ai_ml' },
    { key: 'Mobile Apps', label: 'mobile_apps' },
    { key: 'Web Apps', label: 'web_apps' }
  ];

  const filterProjects = (tech) => {
    setActiveFilter(tech);
    if (tech === 'All') {
      setFilteredProjects(projects);
    } else if (tech === 'Mobile Apps') {
      setFilteredProjects(projects.filter(project => 
        project.isMobileApp() || 
        project.technologies?.some(t => ['Flutter', 'React Native', 'Swift', 'Kotlin', 'SwiftUI', 'Dart'].includes(t))
      ));
    } else if (tech === 'Web Apps') {
      setFilteredProjects(projects.filter(project => 
        project.demo_url || 
        project.technologies?.some(t => ['React', 'Vue.js', 'Node.js', '.NET', 'JavaScript'].includes(t))
      ));
    } else {
      setFilteredProjects(projects.filter(project => 
        project.technologies?.some(t => t.toLowerCase().includes(tech.toLowerCase()))
      ));
    }
  };

  const getProjectIcon = (project) => {
    if (project.demo_url) return Globe;
    if (project.isMobileApp()) return Smartphone;
    return ExternalLink;
  };

  const getProjectType = (project) => {
    if (project.demo_url) return t('website');
    if (project.isMobileApp()) return t('mobile_app');
    return t('application');
  };

  const toggleTechExpansion = (projectId) => {
    setExpandedTech(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const getThemeClasses = () => ({
    text: theme === 'dark' ? 'text-white' : 'text-gray-900',
    textSecondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    textAccent: theme === 'dark' ? 'text-pink-400' : 'text-pink-600',
    glass: theme === 'dark' 
      ? 'bg-white/10 backdrop-blur-md border border-white/10' 
      : 'bg-white/80 backdrop-blur-md border border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:shadow-lg hover:shadow-cyan-500/20' : 'hover:shadow-lg hover:shadow-cyan-500/30',
    cardBg: theme === 'dark' ? 'bg-black/60' : 'bg-white/90'
  });

  const themeClasses = getThemeClasses();

  if (isLoading) {
    return (
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className={`text-center mb-6 ${themeClasses.text}`}>
            <p className="text-lg">{t('loading_projects')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`${themeClasses.glass} rounded-lg p-4 animate-pulse`}>
                <div className="w-full h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-md mb-3"></div>
                <div className={`h-3 ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'} rounded mb-2`}></div>
                <div className={`h-2 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'} rounded mb-1`}></div>
                <div className={`h-2 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'} rounded w-3/4`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-8 px-4 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Rocket className={`w-5 h-5 ${themeClasses.textAccent}`} />
            <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
              {t('featured_projects').split(' ')[0]} <span className="gradient-text">{t('featured_projects').split(' ')[1]}</span>
            </h2>
          </div>
          <p className={`text-sm ${themeClasses.textSecondary} max-w-xl mx-auto mb-4`}>
            {t('projects_subtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <button
                key={tech.key}
                onClick={() => filterProjects(tech.key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === tech.key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg vibrant-glow border-0'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg opacity-70 hover:opacity-100'
                }`}
              >
                <Filter className="w-3 h-3 mr-1 inline" />
                {tech.label === 'C#' ? 'C#' : t(tech.label)}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => {
                const ProjectIcon = getProjectIcon(project);
                const appStoreLinks = project.getAppStoreLinks();
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className={`glass-effect rounded-lg overflow-hidden shadow-2xl ${themeClasses.hover} transition-all duration-500 ${themeClasses.glass}`}
                    >
                      
                      {/* Project Image */}
                      <div className="relative h-24 overflow-hidden">
                        {project.image_url ? (
                          <img 
                            src={project.image_url} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                            <span className="text-lg font-bold text-white">{project.title[0]}</span>
                          </div>
                        )}
                        
                        {/* Project Type Badge */}
                        <div className={`absolute top-1 left-1 ${themeClasses.cardBg} backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 border ${
                          theme === 'dark' ? 'border-white/20' : 'border-gray-300'
                        }`}>
                          <ProjectIcon className="w-2 h-2" />
                          <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>
                            {getProjectType(project)}
                          </span>
                        </div>
                        
                        {project.featured && (
                          <div className="absolute top-1 right-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
                            <Star className="w-2 h-2" />
                            {t('featured')}
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-3">
                        <h3 className={`text-base font-bold ${themeClasses.text} mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2`}>
                          {project.title}
                        </h3>
                        
                        <p className={`${themeClasses.textSecondary} text-xs mb-2 leading-relaxed line-clamp-2`}>
                          {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {/* Always show first 3 technologies */}
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className={`text-xs px-2 py-0.5 rounded-full ${
                                  theme === 'dark' 
                                    ? 'bg-white/10 text-cyan-300 border border-cyan-500/50' 
                                    : 'bg-cyan-50 text-cyan-700 border border-cyan-300'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            
                            {/* Show remaining technologies if expanded */}
                            {expandedTech.has(project.id) && project.technologies.length > 3 && 
                              project.technologies.slice(3).map((tech, techIndex) => (
                                <span 
                                  key={techIndex + 3}
                                  className={`text-xs px-2 py-0.5 rounded-full ${
                                    theme === 'dark' 
                                      ? 'bg-white/10 text-cyan-300 border border-cyan-500/50' 
                                      : 'bg-cyan-50 text-cyan-700 border border-cyan-300'
                                  } animate-in fade-in duration-300`}
                                >
                                  {tech}
                                </span>
                              ))
                            }
                            
                            {/* Show +X badge or "Show Less" if there are more than 3 */}
                            {project.technologies.length > 3 && (
                              <button 
                                className={`text-xs px-2 py-0.5 rounded-full border transition-colors ${
                                  theme === 'dark' 
                                    ? 'text-gray-400 border-gray-500 hover:text-cyan-300 hover:border-cyan-500' 
                                    : 'text-gray-600 border-gray-400 hover:text-cyan-600 hover:border-cyan-500'
                                }`}
                                onClick={() => toggleTechExpansion(project.id)}
                              >
                                {expandedTech.has(project.id) 
                                  ? t('show_less') || 'Less'
                                  : `+${project.technologies.length - 3}`
                                }
                              </button>
                            )}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-1">
                          {/* Web App - Visit Site Button */}
                          {project.demo_url && (
                            <button
                              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-white text-xs py-1.5 px-2 rounded-md flex items-center justify-center gap-1"
                              onClick={() => window.open(project.demo_url, '_blank')}
                            >
                              <Globe className="w-3 h-3" />
                              {t('visit_site')}
                            </button>
                          )}
                          
                          {/* Mobile App - App Store Buttons */}
                          {!project.demo_url && project.isMobileApp() && (
                            <div className="flex gap-1 w-full">
                              {appStoreLinks.ios && (
                                <button
                                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-xs py-1.5 px-1 rounded-md flex items-center justify-center gap-1"
                                  onClick={() => window.open(appStoreLinks.ios, '_blank')}
                                >
                                  <Download className="w-3 h-3" />
                                  {t('app_store')}
                                </button>
                              )}
                              {appStoreLinks.android && (
                                <button
                                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs py-1.5 px-1 rounded-md flex items-center justify-center gap-1"
                                  onClick={() => window.open(appStoreLinks.android, '_blank')}
                                >
                                  <Download className="w-3 h-3" />
                                  {t('play_store')}
                                </button>
                              )}
                            </div>
                          )}
                          
                          {/* Default Application Button */}
                          {!project.demo_url && !project.isMobileApp() && (
                            <button
                              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs py-1.5 px-2 rounded-md flex items-center justify-center gap-1 opacity-50 cursor-not-allowed"
                              disabled
                            >
                              <ExternalLink className="w-3 h-3" />
                              {t('application')}
                            </button>
                          )}
                        </div>

                        {/* Mobile App Store Notice */}
                        {project.isMobileApp() && (appStoreLinks.ios || appStoreLinks.android) && (
                          <div className="mt-1 text-center">
                            <p className="text-xs text-cyan-400 font-medium">
                              ✨ {t('available_stores')} ✨
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <div className={`${themeClasses.glass} rounded-lg p-6 max-w-sm mx-auto`}>
                <h3 className={`text-lg font-bold ${themeClasses.text} mb-2`}>{t('no_projects_found')}</h3>
                <p className={`${themeClasses.textSecondary} mb-3 text-sm`}>
                  {t('try_different_filter')}
                </p>
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🔍</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}