import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Swords, Crown, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const PricingTier = ({ tier, onSelect }) => {
  return (
    <motion.div
      className={`relative p-8 rounded-xl border ${
        tier.popular 
          ? 'border-indigo-500/50 bg-slate-800/50' 
          : 'border-slate-700/50 bg-slate-900/50'
      } backdrop-blur-sm`}
      whileHover={{ scale: 1.03, borderColor: 'rgba(99, 102, 241, 0.5)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {tier.popular && (
        <motion.div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Most Popular
        </motion.div>
      )}

      <div className="flex justify-between items-start mb-6">
        <motion.h3 
          className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text"
          whileHover={{ x: 5 }}
        >
          {tier.name}
        </motion.h3>
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <tier.icon className="w-6 h-6 text-indigo-400" />
        </motion.div>
      </div>

      <p className="text-slate-300 mb-8 h-12">{tier.description}</p>

      <div className="mb-8">
        <span className="text-4xl font-bold text-white">${tier.price}</span>
        <span className="text-slate-400">/month</span>
      </div>

      <motion.ul 
        className="space-y-4 mb-8"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {tier.features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start gap-3 text-slate-300"
            variants={{
              hover: { x: 10 }
            }}
          >
            <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        onClick={onSelect}
        className={`w-full px-6 py-3 rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2 ${
          tier.popular
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white'
            : 'border border-slate-700 hover:border-indigo-500/50 text-slate-200'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

const Example3Page = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('');

  const handlePurchase = () => {
    const messages = [
      "Your subscription request is being processed",
      "Please complete payment details to continue",
      "Verifying your account information",
      "Subscription confirmation pending",
      "Please review terms before proceeding"
    ];
    setMessageType(messages[Math.floor(Math.random() * messages.length)]);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const pricingTiers = [
    {
      name: "Basic",
      price: 9.99,
      description: "Essential features for individuals and small teams",
      icon: Shield,
      features: [
        "Basic feature access",
        "Standard support",
        "Up to 1,000 monthly operations",
        "Community forums access",
        "Basic analytics"
      ]
    },
    {
      name: "Professional",
      price: 29.99,
      popular: true,
      icon: Swords,
      description: "Advanced features for growing businesses",
      features: [
        "Advanced feature set",
        "Priority support response",
        "Unlimited operations",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: 49.99,
      icon: Crown,
      description: "Complete solution for large organizations",
      features: [
        "Full platform access",
        "24/7 dedicated support",
        "Unlimited resources",
        "Custom solutions",
        "Advanced security",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-indigo-900/20 to-slate-900 text-white pt-20 px-4">
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
        className="max-w-6xl mx-auto"
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white text-transparent bg-clip-text">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier 
              key={index} 
              tier={tier} 
              onSelect={handlePurchase} 
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center text-slate-400 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>All plans include our standard security features and regular updates</p>
          <p className="text-sm">Prices shown in USD. Billed monthly.</p>
        </motion.div>

        <AnimatePresence>
          {showMessage && (
            <motion.div 
              className="fixed bottom-8 right-8 bg-slate-900/95 border border-indigo-500/30 text-white p-4 rounded-lg shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-indigo-400" />
                <span className="font-medium">{messageType}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Example3Page;