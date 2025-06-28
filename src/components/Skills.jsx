import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2 } from 'lucide-react';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C#", level: 90, color: "from-purple-500 to-pink-500" },
      { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
      { name: "Dart", level: 80, color: "from-blue-500 to-cyan-500" },
      { name: "Swift", level: 75, color: "from-orange-500 to-red-500" },
      { name: "Kotlin", level: 75, color: "from-green-500 to-emerald-500" },
      { name: "C++", level: 70, color: "from-red-500 to-pink-500" }
    ]
  },
  {
    category: "Frameworks & Technologies",
    skills: [
      { name: ".NET", level: 90, color: "from-indigo-500 to-purple-500" },
      { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
      { name: "Flutter", level: 80, color: "from-blue-500 to-indigo-500" },
      { name: "SQL", level: 85, color: "from-teal-500 to-green-500" },
      { name: "Oracle", level: 75, color: "from-red-500 to-orange-500" }
    ]
  },
  {
    category: "Leadership & Management",
    skills: [
      { name: "Team Leadership", level: 95, color: "from-purple-500 to-pink-500" },
      { name: "Regional Management", level: 90, color: "from-indigo-500 to-purple-500" },
      { name: "Training & Development", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "Customer Relations", level: 95, color: "from-cyan-500 to-teal-500" },
      { name: "Business Strategy", level: 85, color: "from-emerald-500 to-green-500" }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "Arabic", level: 100, color: "from-emerald-500 to-green-500" },
      { name: "English", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Swedish", level: 95, color: "from-yellow-500 to-orange-500" },
      { name: "French", level: 65, color: "from-indigo-500 to-blue-500" },
      { name: "Spanish", level: 65, color: "from-red-500 to-pink-500" }
    ]
  }
];

export default function SkillsVisualization() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-900/20 to-transparent">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-orange-400" />
            <h2 className="text-5xl font-bold text-white">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unique blend of technical prowess and leadership excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 shadow-2xl border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-3 h-8 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
                {category.category}
                <Code2 className="w-6 h-6 text-cyan-400 ml-auto" />
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold bg-white/10 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-4 bg-gray-800/50 rounded-full overflow-hidden border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden shadow-lg`}
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