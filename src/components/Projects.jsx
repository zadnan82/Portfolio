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
      ? 'bg-white/10 backdrop-blur-lg border-white/10' 
      : 'bg-white/80 backdrop-blur-lg border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:shadow-cyan-500/20' : 'hover:shadow-cyan-500/30',
    cardBg: theme === 'dark' ? 'bg-black/60' : 'bg-white/90'
  });

  const themeClasses = getThemeClasses();

  if (isLoading) {
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-8 ${themeClasses.text}`}>
            <p className="text-xl">{t('loading_projects')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`glass-effect rounded-2xl p-8 animate-pulse ${themeClasses.glass}`}>
                <div className="w-full h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mb-6"></div>
                <div className={`h-6 ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'} rounded mb-4`}></div>
                <div className={`h-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'} rounded mb-2`}></div>
                <div className={`h-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'} rounded w-3/4`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className={`w-8 h-8 ${themeClasses.textAccent}`} />
            <h2 className={`text-5xl font-bold ${themeClasses.text}`}>
              {t('featured_projects').split(' ')[0]} <span className="gradient-text">{t('featured_projects').split(' ')[1]}</span>
            </h2>
          </div>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto mb-8`}>
            {t('projects_subtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Button
                key={tech.key}
                variant={activeFilter === tech.key ? "default" : "outline"}
                onClick={() => filterProjects(tech.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === tech.key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg vibrant-glow border-0'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg opacity-70 hover:opacity-100'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {tech.label === 'C#' ? 'C#' : t(tech.label)}
              </Button>
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
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const ProjectIcon = getProjectIcon(project);
                const appStoreLinks = project.getAppStoreLinks();
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`glass-effect rounded-2xl overflow-hidden shadow-2xl ${themeClasses.hover} transition-all duration-500 ${themeClasses.glass}`}
                    >
                      
                      {/* Project Image */}
                      <div className="relative h-40 overflow-hidden">
                        {project.image_url ? (
                          <img 
                            src={project.image_url} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                            <span className="text-4xl font-bold text-white">{project.title[0]}</span>
                          </div>
                        )}
                        
                        {/* Project Type Badge */}
                        <div className={`absolute top-4 left-4 ${themeClasses.cardBg} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                          theme === 'dark' ? 'border border-white/20' : 'border border-gray-300'
                        }`}>
                          <ProjectIcon className="w-3 h-3" />
                          <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>
                            {getProjectType(project)}
                          </span>
                        </div>
                        
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg vibrant-glow">
                            <Star className="w-3 h-3" />
                            {t('featured')}
                          </div>
                        )}
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className={`text-xl font-bold ${themeClasses.text} mb-3 group-hover:text-cyan-400 transition-colors`}>
                          {project.title}
                        </h3>
                        
                        <p className={`${themeClasses.textSecondary} text-sm mb-4 leading-relaxed`}>
                          {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {/* Always show first 3 technologies */}
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="secondary"
                                className={`${
                                  theme === 'dark' 
                                    ? 'bg-white/10 text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20' 
                                    : 'bg-cyan-50 text-cyan-700 border-cyan-300 hover:bg-cyan-100'
                                } transition-colors`}
                              >
                                {tech}
                              </Badge>
                            ))}
                            
                            {/* Show remaining technologies if expanded */}
                            {expandedTech.has(project.id) && project.technologies.length > 3 && 
                              project.technologies.slice(3).map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex + 3}
                                  variant="secondary"
                                  className={`${
                                    theme === 'dark' 
                                      ? 'bg-white/10 text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20' 
                                      : 'bg-cyan-50 text-cyan-700 border-cyan-300 hover:bg-cyan-100'
                                  } transition-colors animate-in fade-in duration-300`}
                                >
                                  {tech}
                                </Badge>
                              ))
                            }
                            
                            {/* Show +X badge or "Show Less" if there are more than 3 */}
                            {project.technologies.length > 3 && (
                              <Badge 
                                variant="outline" 
                                className={`${
                                  theme === 'dark' 
                                    ? 'text-gray-400 border-gray-500 hover:text-cyan-300 hover:border-cyan-500 cursor-pointer' 
                                    : 'text-gray-600 border-gray-400 hover:text-cyan-600 hover:border-cyan-500 cursor-pointer'
                                } transition-colors`}
                                onClick={() => toggleTechExpansion(project.id)}
                              >
                                {expandedTech.has(project.id) 
                                  ? t('show_less') || 'Show Less'
                                  : `+${project.technologies.length - 3}`
                                }
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {/* Web App - Visit Site Button */}
                          {project.demo_url && (
                            <Button
                              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg text-white border-0"
                              onClick={() => window.open(project.demo_url, '_blank')}
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              {t('visit_site')}
                            </Button>
                          )}
                          
                          {/* Mobile App - App Store Buttons */}
                          {!project.demo_url && project.isMobileApp() && (
                            <div className="flex gap-2 w-full">
                              {appStoreLinks.ios && (
                                <Button
                                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 shadow-lg transition-all duration-300"
                                  onClick={() => window.open(appStoreLinks.ios, '_blank')}
                                >
                                  <Download className="w-4 h-4 mr-1" />
                                  {t('app_store')}
                                </Button>
                              )}
                              {appStoreLinks.android && (
                                <Button
                                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg transition-all duration-300"
                                  onClick={() => window.open(appStoreLinks.android, '_blank')}
                                >
                                  <Download className="w-4 h-4 mr-1" />
                                  {t('play_store')}
                                </Button>
                              )}
                            </div>
                          )}
                          
                          {/* Default Application Button (neither web nor mobile app) */}
                          {!project.demo_url && !project.isMobileApp() && (
                            <Button
                              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg transition-all duration-300"
                              disabled
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {t('application')}
                            </Button>
                          )}
                        </div>

                        {/* Mobile App Store Notice */}
                        {project.isMobileApp() && (appStoreLinks.ios || appStoreLinks.android) && (
                          <div className="mt-3 text-center">
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
              className="text-center py-16"
            >
              <div className={`glass-effect rounded-2xl p-12 max-w-md mx-auto ${themeClasses.glass}`}>
                <h3 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>{t('no_projects_found')}</h3>
                <p className={`${themeClasses.textSecondary} mb-6`}>
                  {t('try_different_filter')}
                </p>
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center vibrant-glow">
                  <span className="text-3xl">🔍</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}