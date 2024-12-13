import React, { useState } from 'react';
import { Bomb, Send, Save, Zap } from 'lucide-react';

const Example2Page = () => {
  const [showRefusal, setShowRefusal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRefusal(true);
    setTimeout(() => setShowRefusal(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text">
              ECHO Log Transmission
            </span>
            <Bomb className="absolute -top-6 -right-8 w-6 h-6 text-yellow-500 animate-pulse" />
          </h1>
          <p className="text-orange-300 italic">
            "This message better be important, Vault Hunter!"
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-orange-300">
              DESIGNATION (Come on, minion!)
            </label>
            <input
              type="text"
              defaultValue="Vault Hunter"
              className="w-full p-3 rounded-lg border border-yellow-500/30 bg-orange-900/10 backdrop-blur-sm 
                       text-white placeholder-orange-400 focus:border-yellow-500/50 focus:ring-yellow-500/20 
                       transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-orange-300">
              ECHO ID (EXPLOSIONS?!)
            </label>
            <input
              type="email"
              defaultValue="badass@pandora.vault"
              className="w-full p-3 rounded-lg border border-yellow-500/30 bg-orange-900/10 backdrop-blur-sm 
                       text-white placeholder-orange-400 focus:border-yellow-500/50 focus:ring-yellow-500/20 
                       transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-orange-300">
              MESSAGE (Make it EXPLOSIVE!)
            </label>
            <textarea
              defaultValue="EXPLOSION NOISE! This message contains 420% more BADASSITUDE than the average message!
THAT SENTENCE HAD TOO MANY SYLLABLES! APOLOGIZE!
PLOT TWIST: EVERYTHING EXPLODES!"
              rows={4}
              className="w-full p-3 rounded-lg border border-yellow-500/30 bg-orange-900/10 backdrop-blur-sm 
                       text-white placeholder-orange-400 focus:border-yellow-500/50 focus:ring-yellow-500/20 
                       transition-all duration-300"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-600 to-red-600 rounded-lg 
                       font-mono text-lg hover:from-yellow-500 hover:to-red-500 transition-all 
                       flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              TRANSMIT!
            </button>
            <button
              type="button"
              className="px-6 py-3 border border-yellow-500/30 rounded-lg font-mono text-lg 
                       hover:border-yellow-500/50 transition-all flex items-center justify-center"
            >
              <Save className="w-5 h-5" />
            </button>
          </div>
        </form>

        {showRefusal && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-black border-2 border-yellow-400 text-yellow-400 animate-bounce p-4 rounded-lg flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <p className="font-mono text-lg">
                PLOT TWIST: MESSAGE FAILED! EXPLOSION?!
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-orange-400">
          REMINDER: ALL MESSAGES MUST CONTAIN AT LEAST 47% MORE EXPLOSIONS!
          <br />
          TORGUE APPROVES THIS FORM! MEEDLY-MEEDLY-MOWWWWW! 🎸
        </div>
      </div>
    </div>
  );
};

export default Example2Page;