import React from "react";
import { motion } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <style>
        {`
          :root {
            --primary: #3b82f6;
            --primary-dark: #1d4ed8;
            --secondary: #8b5cf6;
            --accent: #06d6a0;
            --accent-orange: #f59e0b;
            --accent-pink: #ec4899;
            --background: #0f172a;
            --surface: #1e293b;
            --glass: rgba(255, 255, 255, 0.15);
            --vibrant-blue: #06b6d4;
            --vibrant-green: #10b981;
            --vibrant-purple: #a855f7;
            --vibrant-pink: #f472b6;
            --vibrant-orange: #fb923c;
          }
          
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          * {
            font-family: 'Inter', sans-serif;
          }
          
          .glass-effect {
            background: var(--glass);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
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
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
          }
          
          .navigation-fixed {
            position: fixed;
            top: 50%;
            right: 2rem;
            transform: translateY(-50%);
            z-index: 50;
          }
          
          @media (max-width: 768px) {
            .navigation-fixed {
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              top: auto;
              transform: none;
            }
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
              animationDuration: `${Math.random() * 10 + 10}s`
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