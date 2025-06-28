import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCurrentTheme } from './components/utils/i18n';

export default function Layout({ children, currentPageName }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(getCurrentTheme());
    
    // Listen for theme changes
    const handleThemeChange = (event) => {
      setTheme(event.detail);
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <style>
        {`
          :root {
            --primary: ${theme === 'dark' ? '#3b82f6' : '#2563eb'};
            --primary-dark: ${theme === 'dark' ? '#1d4ed8' : '#1e40af'};
            --secondary: ${theme === 'dark' ? '#8b5cf6' : '#7c3aed'};
            --accent: ${theme === 'dark' ? '#06d6a0' : '#059669'};
            --accent-orange: ${theme === 'dark' ? '#f59e0b' : '#d97706'};
            --accent-pink: ${theme === 'dark' ? '#ec4899' : '#db2777'};
            --background: ${theme === 'dark' ? '#0f172a' : '#f8fafc'};
            --surface: ${theme === 'dark' ? '#1e293b' : '#e2e8f0'};
            --glass: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.7)'};
            --vibrant-blue: ${theme === 'dark' ? '#06b6d4' : '#0891b2'};
            --vibrant-green: ${theme === 'dark' ? '#10b981' : '#059669'};
            --vibrant-purple: ${theme === 'dark' ? '#a855f7' : '#9333ea'};
            --vibrant-pink: ${theme === 'dark' ? '#f472b6' : '#ec4899'};
            --vibrant-orange: ${theme === 'dark' ? '#fb923c' : '#ea580c'};
            --text-primary: ${theme === 'dark' ? '#ffffff' : '#1e293b'};
            --text-secondary: ${theme === 'dark' ? '#cbd5e1' : '#475569'};
            --text-muted: ${theme === 'dark' ? '#94a3b8' : '#64748b'};
          }
          
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          * {
            font-family: 'Inter', sans-serif;
          }
          
          .glass-effect {
            background: ${theme === 'dark' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(255, 255, 255, 0.8)'};
            backdrop-filter: blur(20px);
            border: 1px solid ${theme === 'dark' 
              ? 'rgba(255, 255, 255, 0.2)' 
              : 'rgba(255, 255, 255, 0.5)'};
            ${theme === 'light' ? 'box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);' : ''}
          }
          
          .gradient-text {
            background: linear-gradient(135deg, var(--vibrant-blue), var(--vibrant-green), var(--accent-orange));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .floating-animation {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .particle {
            position: absolute;
            border-radius: 50%;
            animation: particle 15s linear infinite;
          }
          
          @keyframes particle {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
          
          .vibrant-glow {
            box-shadow: 0 0 30px ${theme === 'dark' 
              ? 'rgba(6, 182, 212, 0.3)' 
              : 'rgba(6, 182, 212, 0.2)'};
          }
          
          /* Theme-specific text colors */
          .text-primary {
            color: var(--text-primary);
          }
          
          .text-secondary {
            color: var(--text-secondary);
          }
          
          .text-muted {
            color: var(--text-muted);
          }
          
          /* Theme-specific backgrounds */
          .bg-surface {
            background-color: var(--surface);
          }
          
          .bg-background {
            background-color: var(--background);
          }
          
          @media (max-width: 768px) {
            /* Remove any conflicting mobile styles */
          }
        `}
      </style>
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: [
                '#06b6d4', // vibrant blue
                '#10b981', // vibrant green  
                '#f59e0b', // orange
                '#ec4899', // pink
                '#a855f7'  // purple
              ][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: theme === 'dark' ? 0.8 : 0.4
            }}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}