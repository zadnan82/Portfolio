import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { t} from './utils/i18n';

const experiences = [
  {
    title: "regional_area_manager",
    company: "alshaya_company",
    period: "December 2011 – June 2019",
    location: "dubai_uae",
    highlights: [
      "Direct responsibility for UAE (Dubai, Abu Dhabi & Al Ain), Qatar & Jordan",
      "Conducted periodical visits to stores within functional area to build relationships",
      "Trained and coached front-liners to optimize service and customer satisfaction",
      "Developed improvement plans with operations to achieve brand/store targets"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "senior_sales_executive",
    company: "arabian_adventures",
    period: "November 2010 – December 2011",
    location: "dubai_uae",
    highlights: [
      "Organized events for corporate clients",
      "Handled weddings, staff parties, gala dinners, desert safaris, tours",
      "Communicated with clients and sent proposals for event enquiries"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "team_leader",
    company: "hamptons_international",
    period: "December 2007 – May 2010",
    location: "dubai_uae",
    highlights: [
      "Top performer in leasing for year 2009",
      "Leading the leasing team in the head office",
      "Created leasing policy and procedures for the department",
      "Conducted training programs for staff"
    ],
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "front_desk_trainer",
    company: "ritz_carlton",
    period: "October 2006 – November 2007",
    location: "dubai_uae",
    highlights: [
      "Conducted training programs for staff",
      "Provided IT-Help for hotel guests",
      "Involved in guest recognition program"
    ],
    color: "from-orange-500 to-amber-500"
  }
];

export default function ExperienceTimeline() {
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
            <TrendingUp className="w-8 h-8 text-cyan-400" />
            <h2 className="text-5xl font-bold text-white">
              {t('professional_journey').split(' ')[0]} <span className="gradient-text">{t('professional_journey').split(' ')[1]}</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-6 ${index % 2 === 0 ? 'lg:-right-6' : 'lg:-left-6'} w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-2xl hidden lg:flex vibrant-glow`}>
                  <Building className="w-6 h-6 text-white" />
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass-effect rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center lg:hidden shadow-lg`}>
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{t(exp.title)}</h3>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">{t(exp.company)}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                          <Calendar className="w-4 h-4 text-emerald-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
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
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <Award className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
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