import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { SendEmail } from '../integrations/Core';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await SendEmail({
        to: 'zadnaniths@gmail.com',
        subject: `Portfolio Contact: ${formData.subject}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Subject: ${formData.subject}
          
          Message:
          ${formData.message}
        `
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
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

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-indigo-900/30 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-cyan-400" />
            <h2 className="text-5xl font-bold text-white">
              Let's <span className="gradient-text">Connect</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring innovative solutions to your next project. Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-cyan-400">💬</span> Get In Touch
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg vibrant-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-cyan-400 text-sm font-medium">Email</p>
                    <p className="text-white font-medium">zadnaniths@gmail.com</p>
                    <a 
                      href="mailto:zadnaniths@gmail.com" 
                      className="text-xs text-cyan-300 hover:text-cyan-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send an email
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg vibrant-glow">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-emerald-400 text-sm font-medium">Phone (Sweden)</p>
                    <p className="text-white font-medium">+46 73 695 31 02</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg vibrant-glow">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-400 text-sm font-medium">WhatsApp</p>
                    <p className="text-white font-medium">+971 55 37 202 37</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg vibrant-glow">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-orange-400 text-sm font-medium">Location</p>
                    <p className="text-white font-medium">Stockholm, Sweden</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 p-6 text-lg font-medium shadow-2xl vibrant-glow transition-all duration-300">
                <Download className="w-5 h-5 mr-3" />
                Download Full CV
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white p-4 transition-all duration-300">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white p-4 transition-all duration-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-pink-400">📧</span> Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-cyan-400/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-purple-400/50 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-colors"
                    />
                  </div>
                </div>

                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-emerald-400/50 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400/20 transition-colors"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/10 border-orange-400/50 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400/20 transition-colors resize-none"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 p-4 text-lg font-medium shadow-2xl vibrant-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === 'success' && (
                  <div className="bg-emerald-900/50 border border-emerald-400 text-emerald-400 p-4 rounded-lg text-center">
                    ✨ Message sent successfully! I'll get back to you soon. ✨
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900/50 border border-red-400 text-red-400 p-4 rounded-lg text-center">
                    ❗ Failed to send message. Please try again or contact me directly.
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