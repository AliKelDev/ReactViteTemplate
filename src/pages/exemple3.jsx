import React, { useState } from 'react';
import { Sparkles, Shield, Swords, Crown, Scroll } from 'lucide-react';

// Separate PricingTier component
const PricingTier = ({ tier, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-lg border ${
        tier.popular 
          ? 'border-yellow-500/50 bg-purple-900/20' 
          : 'border-purple-500/30 bg-purple-900/10'
      } backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
          {tier.name}
        </h3>
        <tier.icon className={`w-6 h-6 ${
          isHovered ? 'text-pink-400' : 'text-purple-400'
        } transition-colors`} />
      </div>

      <p className="text-purple-200 mb-6">{tier.description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${tier.price}</span>
        <span className="text-purple-300">/month</span>
      </div>

      <ul className="space-y-3 mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-purple-200">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 
                 rounded-lg font-mono text-lg hover:from-pink-500 hover:to-purple-500 
                 transition-all flex items-center justify-center gap-2"
      >
        Subscribe Now
        {tier.popular && <Sparkles className="w-5 h-5" />}
      </button>
    </div>
  );
};

const Example3Page = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('');

  const handlePurchase = () => {
    const messages = [
      "You must gather your party before venturing forth.",
      "Go for the eyes, Boo! ...Sorry, wrong window.",
      "Insufficient funds in your gem pouch",
      "Your subscription roll failed its saving throw",
      "Error: Mind flayer detected in payment system"
    ];
    setMessageType(messages[Math.floor(Math.random() * messages.length)]);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const pricingTiers = [
    {
      name: "Starter Pack",
      price: 9.99,
      description: "For those just starting their journey from Candlekeep",
      icon: Shield,
      features: [
        "Basic toolkit access",
        "Standard documentation",
        "Limited daily uses",
        "Community tavern access"
      ]
    },
    {
      name: "Adventurer's Kit",
      price: 29.99,
      popular: true,
      icon: Swords,
      description: "Perfect for those seeking glory in the Sword Coast",
      features: [
        "Enhanced toolkit features",
        "Priority support scrolls",
        "Unlimited daily castings",
        "Premium tavern access",
        "Extra saving throws"
      ]
    },
    {
      name: "Legendary Bundle",
      price: 49.99,
      icon: Crown,
      description: "For those worthy of ascending to godhood",
      features: [
        "Archmage level access",
        "24/7 telepathic support",
        "Unlimited power usage",
        "Exclusive content vault",
        "Divine intervention priority"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Choose Your Path
            </span>
            <Scroll className="absolute -top-6 -right-8 w-8 h-8 text-yellow-400 animate-pulse" />
          </h1>
          <p className="text-xl text-purple-300">
            Every adventure needs proper preparation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier 
              key={index} 
              tier={tier} 
              onSelect={handlePurchase} 
            />
          ))}
        </div>

        <div className="mt-12 text-center text-purple-400">
          "Life is so hollow without proper documentation."
        </div>

        {showMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-black border-2 border-yellow-400 text-yellow-400 animate-bounce p-4 rounded-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <p className="font-mono text-lg">
                {messageType}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Example3Page;