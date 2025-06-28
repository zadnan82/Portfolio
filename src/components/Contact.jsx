import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { t, getCurrentTheme } from './utils/i18n';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);

  useEffect(() => {
    setTheme(getCurrentTheme());
    
    // Load EmailJS dynamically
    const loadEmailJS = async () => {
      try {
        // Check if EmailJS is already loaded
        if (window.emailjs) {
          window.emailjs.init("tORydIIEgHKACCB3B");
          setEmailjsLoaded(true);
          return;
        }

        // Create script element to load EmailJS
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          if (window.emailjs) {
            window.emailjs.init("tORydIIEgHKACCB3B");
            setEmailjsLoaded(true);
          }
        };
        script.onerror = () => {
          console.error('Failed to load EmailJS');
          setError('Failed to load email service');
        };
        document.head.appendChild(script);
      } catch (err) {
        console.error('Error loading EmailJS:', err);
        setError('Failed to initialize email service');
      }
    };

    loadEmailJS();
    
    const handleThemeChange = (event) => {
      setTheme(event.detail);
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setError(null);

    try {
      if (!emailjsLoaded || !window.emailjs) {
        throw new Error('Email service not available. Please try again later.');
      }

      // Create comprehensive template params with multiple naming conventions
      const templateParams = {
        // Main template variables
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        
        // Additional EmailJS naming conventions
        from_email: formData.email,
        from_name: formData.name,
        reply_to: formData.email,
        to_name: "Zainab Adnan",
        
        // Combined fields
        combined_name_email: `${formData.name} (${formData.email})`,
        
        // Alternative naming
        user_name: formData.name,
        user_email: formData.email,
        contact_subject: formData.subject,
        contact_message: formData.message,
        
        // HTML formatted email
        html_email: `<a href="mailto:${formData.email}">${formData.email}</a>`,
        
        // Fallback fields
        email_field: formData.email,
        contact_email: formData.email,
        user_contact: formData.email
      };

      console.log('Sending email with params:', templateParams);

      const result = await window.emailjs.send(
        'service_u2qwt39',    // Your service ID
        'template_h4hfslh',   // Your template ID
        templateParams,
        'tORydIIEgHKACCB3B'  // Your public key
      );

      console.log('Email sent successfully:', result.text);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error("Error sending email:", err);
      setError(err.message || 'Failed to send email');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getThemeClasses = () => ({
    text: theme === 'dark' ? 'text-white' : 'text-gray-900',
    textSecondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    textAccent: theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600',
    glass: theme === 'dark' 
      ? 'bg-white/10 backdrop-blur-md border border-white/10' 
      : 'bg-white/80 backdrop-blur-md border border-white/50 shadow-lg',
    hover: theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100/80',
    input: theme === 'dark' 
      ? 'bg-white/10 border-cyan-400/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20' 
      : 'bg-white/80 border-cyan-500/50 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20',
    successBg: theme === 'dark' ? 'bg-emerald-900/50' : 'bg-emerald-100',
    successText: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700',
    successBorder: theme === 'dark' ? 'border-emerald-400' : 'border-emerald-500',
    errorBg: theme === 'dark' ? 'bg-red-900/50' : 'bg-red-100',
    errorText: theme === 'dark' ? 'text-red-400' : 'text-red-700',
    errorBorder: theme === 'dark' ? 'border-red-400' : 'border-red-500'
  });

  const themeClasses = getThemeClasses();

  return (
    <section id="contact" className="py-8 px-4 bg-gradient-to-t from-indigo-900/30 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MessageCircle className={`w-5 h-5 ${themeClasses.textAccent}`} />
            <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
              {t('lets_connect').split(' ')[0]} <span className="gradient-text">{t('lets_connect').split(' ')[1]}</span>
            </h2>
          </div>
          <p className={`text-sm ${themeClasses.textSecondary} max-w-xl mx-auto`}>
            {t('contact_subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={`glass-effect rounded-2xl p-4 shadow-2xl ${themeClasses.glass}`}>
              <h3 className={`text-lg font-bold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <span className={themeClasses.textAccent}>💬</span> {t('get_in_touch')}
              </h3>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`flex items-center gap-3 p-3 ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                  } rounded-lg ${themeClasses.hover} transition-all duration-300`}
                >
                  <div                   className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl vibrant-glow">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className={`${themeClasses.textAccent} text-xs font-medium`}>{t('email')}</p>
                    <p className={`${themeClasses.text} font-medium text-sm`}>zadnaniths@gmail.com</p>
                    <a 
                      href="mailto:zadnaniths@gmail.com" 
                      className={`text-xs ${themeClasses.textAccent} hover:text-cyan-200 transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('send_an_email')}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`flex items-center gap-3 p-3 ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                  } rounded-lg ${themeClasses.hover} transition-all duration-300`}
                >
                  <div                   className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-2xl vibrant-glow">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className={`text-emerald-400 text-xs font-medium`}>{t('phone_sweden')}</p>
                    <p className={`${themeClasses.text} font-medium text-sm`}>{t('sweden_phone')}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`flex items-center gap-3 p-3 ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                  } rounded-lg ${themeClasses.hover} transition-all duration-300`}
                >
                  <div                   className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl vibrant-glow">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className={`text-green-400 text-xs font-medium`}>{t('whatsapp')}</p>
                    <p className={`${themeClasses.text} font-medium text-sm`}>{t('whatsapp_number')}</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`flex items-center gap-3 p-3 ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                  } rounded-lg ${themeClasses.hover} transition-all duration-300`}
                >
                  <div                   className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl vibrant-glow">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className={`text-orange-400 text-xs font-medium`}>{t('location')}</p>
                    <p className={`${themeClasses.text} font-medium text-sm`}>{t('stockholm_sweden')}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
             <div className="grid grid-cols-2 gap-3">
                <button 
                  className={`${
                    theme === 'dark' 
                      ? 'border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white' 
                      : 'border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
                  } p-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm`}
                  onClick={() => window.open('https://github.com/zadnan82', '_blank')}
                >
                  <Github className="w-4 h-4" />
                  {t('github')}
                </button>
                <button 
                  className={`${
                    theme === 'dark' 
                      ? 'border border-cyan-300 text-white hover:bg-cyan-400 hover:text-gray-900 hover:border-cyan-400' 
                      : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black hover:border-blue-500'
                  } p-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm`}
                  onClick={() => window.open('https://www.linkedin.com/in/z-adnan/', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                  {t('linkedin')}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`glass-effect rounded-2xl p-4 shadow-2xl ${themeClasses.glass}`}>
              <h3 className={`text-lg font-bold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <span className="text-pink-400">📧</span> {t('send_message')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('your_name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`${themeClasses.input} transition-colors text-sm h-8`}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t('your_email')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`${themeClasses.input} transition-colors text-sm h-8`}
                    />
                  </div>
                </div>

                <Input
                  type="text"
                  name="subject"
                  placeholder={t('subject')}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`${themeClasses.input} transition-colors text-sm h-8`}
                />

                <Textarea
                  name="message"
                  placeholder={t('your_message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${themeClasses.input} transition-colors resize-none text-sm`}
                />

                <button
                  type="submit"
                  disabled={isSubmitting || !emailjsLoaded}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 p-3 text-sm font-medium shadow-2xl rounded-2xl transition-all duration-300 disabled:opacity-50 text-white flex items-center justify-center gap-2 vibrant-glow hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      {t('sending')}
                    </>
                  ) : !emailjsLoaded ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Loading...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('send_message')}
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className={`${themeClasses.successBg} border ${themeClasses.successBorder} ${themeClasses.successText} p-3 rounded-lg text-center text-sm`}>
                    ✨ {t('message_sent_success')} ✨
                  </div>
                )}

                {(submitStatus === 'error' || error) && (
                  <div className={`${themeClasses.errorBg} border ${themeClasses.errorBorder} ${themeClasses.errorText} p-3 rounded-lg text-center text-sm`}>
                    ❗ {error || t('message_send_error')}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}