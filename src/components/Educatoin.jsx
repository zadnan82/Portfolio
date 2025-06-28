import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star, Brain, Code, BookOpen } from 'lucide-react';

const educations = [
  {
    degree: "AI Developer Program",
    school: "ITHS",
    period: "2024 - 2025",
    location: "Stockholm, Sweden",
    status: "ongoing",
    description: "Advanced artificial intelligence and machine learning development",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    degree: "Machine Learning Program",
    school: "Teknik Högskolan",
    period: "2024 - 2025",
    location: "Stockholm, Sweden",
    status: "ongoing",
    description: "Specialized machine learning algorithms and data science",
    icon: Brain,
    color: "from-cyan-500 to-blue-500"
  },
  {
    degree: ".Net Developer",
    school: "KYH Högskolan",
    period: "Ongoing",
    location: "Stockholm, Sweden",
    status: "graduating_2024",
    description: "Full-stack .NET development and enterprise applications",
    icon: Code,
    color: "from-emerald-500 to-green-500"
  },
  {
    degree: "Application Developer - Mobile & Web",
    school: "STI Högskolan",
    period: "Ongoing",
    location: "Stockholm, Sweden",
    status: "graduated_2023",
    description: "Mobile and web application development",
    icon: Code,
    color: "from-orange-500 to-amber-500"
  },
  {
    degree: "Application Developer - Mobile & Web",
    school: "IT-Högskolan",
    period: "Completed",
    location: "Stockholm, Sweden",
    status: "graduated_2023",
    description: "Comprehensive mobile and web development program",
    icon: Code,
    color: "from-indigo-500 to-purple-500"
  },
  {
    degree: "Higher Diploma in Hotel & Hospitality Management",
    school: "University Center César Ritz",
    period: "Completed",
    location: "Brig, Switzerland",
    status: "graduated_2006",
    description: "International hospitality administration and business management",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-500"
  }
];

export default function EducationSection() {
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
            <BookOpen className="w-8 h-8 text-emerald-400" />
            <h2 className="text-5xl font-bold text-white">
              Academic <span className="gradient-text">Excellence</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning journey from hospitality management to cutting-edge AI and machine learning
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
                className="glass-effect rounded-2xl p-8 h-full shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-white/10"
              >
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {edu.status === 'ongoing' && (
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Ongoing
                    </div>
                  )}
                  {edu.status.includes('graduated') && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3" />
                      Completed
                    </div>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl vibrant-glow`}>
                  <edu.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-cyan-400">
                    {edu.school}
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span>{edu.location}</span>
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