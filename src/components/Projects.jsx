import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../entities/Project';

import { Github, ExternalLink, Star, Filter, Smartphone, Globe, Download, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function ProjectsGallery() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

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

  const technologies = ['All', 'React', 'Flutter', '.NET', 'C#', 'JavaScript', 'AI/ML', 'Mobile Apps', 'Web Apps'];

  const filterProjects = (tech) => {
    setActiveFilter(tech);
    if (tech === 'All') {
      setFilteredProjects(projects);
    } else if (tech === 'Mobile Apps') {
      setFilteredProjects(projects.filter(project => 
        project.technologies?.some(t => ['Flutter', 'React Native', 'Swift', 'Kotlin'].includes(t)) ||
        ['Giggli Spectrum Autism', 'Cosmetics Checker', 'Check My Food Ingredients', 'Mobile Customer Service App'].includes(project.title)
      ));
    } else if (tech === 'Web Apps') {
      setFilteredProjects(projects.filter(project => 
        project.demo_url || project.technologies?.some(t => ['React', 'Vue.js', 'Node.js', '.NET'].includes(t))
      ));
    } else {
      setFilteredProjects(projects.filter(project => 
        project.technologies?.some(t => t.toLowerCase().includes(tech.toLowerCase()))
      ));
    }
  };

  const getProjectIcon = (project) => {
    if (project.demo_url) return Globe;
    if (project.technologies?.some(t => ['Flutter', 'React Native', 'Swift', 'Kotlin'].includes(t))) return Smartphone;
    return ExternalLink;
  };

  const getProjectType = (project) => {
    if (project.demo_url) return 'Website';
    if (project.technologies?.some(t => ['Flutter', 'React Native', 'Swift', 'Kotlin'].includes(t))) return 'Mobile App';
    return 'Application';
  };

  if (isLoading) {
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="glass-effect rounded-2xl p-8 animate-pulse border border-white/10">
                <div className="w-full h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mb-6"></div>
                <div className="h-6 bg-white/20 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
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
            <Rocket className="w-8 h-8 text-pink-400" />
            <h2 className="text-5xl font-bold text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions from web platforms to mobile applications available on App Store and Google Play
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Button
                key={tech}
                variant={activeFilter === tech ? "default" : "outline"}
                onClick={() => filterProjects(tech)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === tech
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg vibrant-glow'
                    : 'border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {tech}
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
                      className="glass-effect rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-white/10"
                    >
                      
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
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
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 border border-white/20">
                          <ProjectIcon className="w-3 h-3" />
                          {getProjectType(project)}
                        </div>
                        
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg vibrant-glow">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        )}
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="secondary"
                                className="bg-white/10 text-cyan-300 border-cyan-500/50 hover:bg-cyan-500/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="outline" className="text-gray-400 border-gray-500">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {project.github_url && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                              onClick={() => window.open(project.github_url, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          )}
                          
                          {project.demo_url ? (
                            <Button
                              size="sm"
                              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                              onClick={() => window.open(project.demo_url, '_blank')}
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Visit Site
                            </Button>
                          ) : (
                            // Mobile App Store Links
                            ['Giggli Spectrum Autism', 'Cosmetics Checker', 'Check My Food Ingredients'].includes(project.title) && (
                              <div className="flex gap-2 w-full">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="flex-1 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                                  disabled
                                >
                                  <Download className="w-4 h-4 mr-1" />
                                  App Store
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="flex-1 border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                                  disabled
                                >
                                  <Download className="w-4 h-4 mr-1" />
                                  Play Store
                                </Button>
                              </div>
                            )
                          )}
                        </div>

                        {/* Mobile App Store Notice */}
                        {['Giggli Spectrum Autism', 'Cosmetics Checker', 'Check My Food Ingredients'].includes(project.title) && (
                          <div className="mt-3 text-center">
                            <p className="text-xs text-cyan-400 font-medium">
                              ✨ Available on App Store & Google Play ✨
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
              <div className="glass-effect rounded-2xl p-12 max-w-md mx-auto border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                <p className="text-gray-400 mb-6">
                  Try selecting a different filter to see more projects.
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