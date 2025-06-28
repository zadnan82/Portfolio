import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, Sparkles, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { t} from './utils/i18n';


export default function HeroSection() {
  const [text, setText] = useState('');
  const titleRole = t('title_role');
  
  useEffect(() => {
    let i = 0;
    setText(''); // Reset text when language changes
    const timer = setInterval(() => {
      setText(titleRole.slice(0, i));
      i++;
      if (i > titleRole.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [titleRole]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-cyan-400 font-medium tracking-wider uppercase text-sm"
              >
                <Sparkles className="w-4 h-4" />
                {t('welcome')}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Zainab
                <span className="gradient-text block">Adnan</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-2xl lg:text-3xl text-cyan-300 font-light h-12 flex items-center gap-2"
              >
                <Zap className="w-8 h-8 text-orange-400" />
                {text}
                <span className="animate-pulse text-pink-400">|</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              {t('hero_description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-full text-white font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 vibrant-glow">
                <Download className="w-4 h-4 mr-2" />
                {t('download_cv')}
              </Button>
              
              <Button variant="outline" className="border-2 border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                {t('get_in_touch')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">zainabadnan@hotmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">0736953102</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            <div className="relative floating-animation">
              <div className="w-96 h-96 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-30 blur-3xl vibrant-glow"></div>
                <div className="relative glass-effect rounded-full p-8 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-4 border-white/20">
                      <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ZA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-20 h-20 glass-effect rounded-2xl flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360, y: [0, 10, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-10 w-16 h-16 glass-effect rounded-xl flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500"
            >
              <span className="text-xl">💻</span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 w-12 h-12 glass-effect rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <span className="text-lg">⚡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-cyan-400"
        >
          <span className="text-sm font-medium">{t('scroll_explore')}</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}