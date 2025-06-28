import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { getCurrentTheme, toggleTheme, getCurrentLanguage } from './utils/i18n';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set initial state
    setTheme(getCurrentTheme());
    setLanguage(getCurrentLanguage());
    setMounted(true);
    
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

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
    window.dispatchEvent(new CustomEvent('themechange', { detail: newTheme }));
  };

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-gray-300 rounded-full animate-pulse"></div>
    );
  }

  return (
    <div className="relative group">
      {/* Outer frame with glassmorphism */}
      <div 
        className="rounded-2xl p-1 transition-all duration-500"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.8), rgba(49, 46, 129, 0.6))' 
            : 'linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(249, 115, 22, 0.6))',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: theme === 'dark'
            ? '0 12px 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 12px 40px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        <button
          onClick={handleToggle}
          className="w-20 h-10 rounded-xl relative transition-all duration-500 focus:outline-none flex items-center focus:ring-4 focus:ring-cyan-400/30 hover:scale-[1.02] transform"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, #0f0f23, #1e1b4b, #312e81)' 
              : 'linear-gradient(135deg, #fbbf24, #f59e0b, #f97316)',
            boxShadow: theme === 'dark'
              ? 'inset 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : 'inset 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Background stars/sparkles for dark mode */}
          {theme === 'dark' && (
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                  style={{
                    left: `${15 + i * 10}%`,
                    top: `${25 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.7}s`,
                    animationDuration: `${2 + (i % 3)}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Moving slider with enhanced padding */}
          <div
            className="absolute w-8 h-8 rounded-lg shadow-2xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm border"
            style={{
              left: theme === 'dark' ? '4px' : 'calc(100% - 36px)',
              top: '4px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderColor: theme === 'dark' ? 'rgba(147, 197, 253, 0.4)' : 'rgba(251, 191, 36, 0.4)',
              boxShadow: theme === 'dark'
                ? '0 12px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(147, 197, 253, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                : '0 12px 40px rgba(251, 146, 60, 0.4), 0 0 0 1px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
              transform: 'translateZ(0)' // Hardware acceleration
            }}
          >
            {/* Icon with enhanced padding and glow */}
            <div className="relative p-1">
              {theme === 'dark' ? (
                <div className="relative">
                  <Moon 
                    className="w-5 h-5 transition-all duration-300" 
                    style={{ 
                      color: '#3b82f6',
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))'
                    }} 
                  />
                  {/* Moon glow */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                      transform: 'scale(1.5)'
                    }}
                  />
                </div>
              ) : (
                <div className="relative">
                  <Sun 
                    className="w-5 h-5 transition-all duration-300 animate-spin"
                    style={{ 
                      color: '#f59e0b',
                      filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))',
                      animationDuration: '12s'
                    }} 
                  />
                  {/* Sun glow */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-40"
                    style={{
                      background: 'radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, transparent 70%)',
                      transform: 'scale(1.5)'
                    }}
                  />
                  {/* Sun rays */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-1 bg-yellow-400 opacity-60 animate-pulse"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px)`,
                        transformOrigin: 'center 12px',
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Enhanced inner glow */}
          <div 
            className="absolute inset-0 rounded-xl transition-opacity duration-500"
            style={{
              background: theme === 'dark'
                ? 'radial-gradient(circle at 25% 50%, rgba(147, 197, 253, 0.15) 0%, transparent 60%)'
                : 'radial-gradient(circle at 75% 50%, rgba(251, 191, 36, 0.25) 0%, transparent 60%)',
              opacity: 0.8
            }}
          />
        </button>
      </div>
      
      {/* Enhanced tooltip with better positioning */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
        <div 
          className="px-4 py-3 rounded-xl text-sm font-medium backdrop-blur-xl border shadow-2xl"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            borderColor: 'rgba(255, 255, 255, 0.15)',
            color: '#ffffff'
          }}
        >
          <div className="flex items-center gap-3">
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-yellow-400" />
                <span>Switch to Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-400" />
                <span>Switch to Dark Mode</span>
              </>
            )}
          </div>
          {/* Enhanced tooltip arrow */}
          <div 
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45"
            style={{ background: 'rgba(0, 0, 0, 0.85)' }}
          />
        </div>
      </div>
    </div>
  );
}