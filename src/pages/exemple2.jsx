import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Save, ArrowLeft, CheckCircle, AlertCircle, Coffee } from 'lucide-react';

const Example2Page = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Anderson',
    email: 'j.anderson@company.com',
    message: 'Hi there,\n\nI am interested in discussing a potential collaboration on an upcoming project. Our team is looking for expertise in web development and system architecture.\n\nLooking forward to your response.\n\nBest regards,\nJohn'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900 text-white pt-20 px-4">
      <motion.a
        href="/"
        className="fixed top-8 left-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-700/50 text-slate-300 hover:text-white hover:border-indigo-500/30 backdrop-blur-sm transition-colors z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </motion.a>

      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white text-transparent bg-clip-text">
              Contact Us
            </span>
          </motion.h1>
          <motion.p 
            className="text-slate-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss your next project
          </motion.p>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-indigo-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-slate-700/50 bg-slate-800/50 
                       text-white placeholder-slate-400 focus:border-indigo-500/50 focus:ring-indigo-500/20 
                       transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-indigo-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-slate-700/50 bg-slate-800/50 
                       text-white placeholder-slate-400 focus:border-indigo-500/50 focus:ring-indigo-500/20 
                       transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-indigo-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 rounded-lg border border-slate-700/50 bg-slate-800/50 
                       text-white placeholder-slate-400 focus:border-indigo-500/50 focus:ring-indigo-500/20 
                       transition-all duration-300"
            />
          </div>

          <div className="flex gap-4">
            <motion.button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg 
                       font-medium text-lg hover:from-indigo-500 hover:to-purple-500 transition-all 
                       flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </motion.button>
            <motion.button
              type="button"
              className="px-6 py-3 border border-slate-700/50 rounded-lg font-medium text-lg 
                       hover:border-indigo-500/50 transition-all flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Save className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.form>

        <AnimatePresence>
          {showNotification && (
            <motion.div 
              className="fixed bottom-8 right-8 bg-slate-900/95 border border-indigo-500/30 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400" />
                <span className="font-medium">Message sent successfully!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="mt-8 text-center text-sm text-slate-400 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>We typically respond within 24-48 business hours.</p>
          <p className="flex items-center justify-center gap-2">
            <Coffee className="w-4 h-4" />
            <span>Available for meetings and consultations</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Example2Page;