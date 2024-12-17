import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Code, Cpu, Lock, Loader, Heart, Github } from 'lucide-react';

const projects = [
  {
    title: "Pixelle3",
    client: "Web Design Services",
    description: "A professional platform showcasing web design and development services. Built with modern technologies, offering custom website solutions for businesses and individuals. Features a sleek interface, portfolio showcase, and streamlined client communication system.",
    technologies: [
      { title: "React + Vite", desc: "Modern build system", Icon: Code },
      { title: "UI/UX Design", desc: "Custom interfaces", Icon: Cpu },
      { title: "Client Portal", desc: "Project management", Icon: Terminal },
      { title: "Secure Payments", desc: "Protected transactions", Icon: Lock }
    ],
    previewUrl: "https://webpixelle3.netlify.app"
  },
  {
    title: "Tech Blog",
    client: "Alice Leiser",
    description: "A personal blog sharing insights about technology, development, and digital innovation. Features in-depth articles about web development, coding tutorials, and tech industry perspectives. Built with modern web technologies for optimal performance.",
    technologies: [
      { title: "React + MDX", desc: "Rich content system", Icon: Code },
      { title: "Dynamic Content", desc: "Live updates", Icon: Cpu },
      { title: "SEO Optimized", desc: "Enhanced visibility", Icon: Terminal },
      { title: "Fast Loading", desc: "Optimized performance", Icon: Lock }
    ],
    previewUrl: "https://aliceleiserblog.netlify.app"
  },
  {
    title: "QuizMapperJS",
    client: "Open Source",
    description: "An innovative open-source quiz framework that considers multiple variables and answers to generate dynamic forms. Perfect for creating complex surveys, assessments, and interactive questionnaires with branching logic and weighted responses.",
    technologies: [
      { title: "JavaScript", desc: "Core functionality", Icon: Code },
      { title: "Dynamic Forms", desc: "Adaptive questions", Icon: Cpu },
      { title: "Data Mapping", desc: "Complex logic", Icon: Terminal },
      { title: "Open Source", desc: "MIT License", Icon: Lock }
    ],
    previewUrl: "https://quizmapperjs.netlify.app"
  }
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const InstallGuide = () => (
  <motion.div 
    className="max-w-2xl mx-auto my-12 px-4"
    variants={slideUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/90 backdrop-blur-sm overflow-hidden shadow-xl shadow-indigo-500/20">
      <motion.div 
        className="flex items-center px-4 py-2 border-b border-indigo-500/30 bg-indigo-900/20"
        whileHover={{ backgroundColor: "rgba(79, 70, 229, 0.3)" }}
      >
        <div className="flex items-center gap-2">
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-red-500"
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-yellow-500"
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-green-500"
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </motion.div>
      <div className="p-6 font-mono text-sm">
        <motion.div variants={stagger}>
          <motion.p variants={slideUp} className="text-indigo-300 mb-4"># Clone the repository</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400 mb-4">$ git clone https://github.com/AliKelDev/ReactViteTemplate.git</motion.p>
          
          <motion.p variants={slideUp} className="text-indigo-300 mb-4"># Install dependencies</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400 mb-4">$ cd ReactViteTemplate<br />$ npm install</motion.p>
          
          <motion.p variants={slideUp} className="text-indigo-300 mb-4"># Start development server</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400 mb-4">$ npm run dev</motion.p>
          
          <motion.p variants={slideUp} className="text-indigo-300 mb-4"># Build and deploy</motion.p>
          <motion.p variants={slideUp} className="text-emerald-400">$ npm run build<br />$ npm run deploy</motion.p>
        </motion.div>
      </div>
    </div>
    <motion.div 
      className="text-center mt-4"
      variants={slideUp}
    >
      <a 
        href="https://aliceleiserblog.netlify.app/blog/how-to-build-your-professional-website-in-10-minutes"
        className="text-indigo-300 hover:text-indigo-400 transition-colors inline-flex items-center gap-2 group"
      >
        <span className="relative">
          For detailed instructions, check out my blog
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300"
            whileHover={{ scaleX: 1 }}
          />
        </span>
        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  </motion.div>
);

const PreviewEmbed = ({ siteUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  return (
    <motion.div 
      className="w-full h-96 relative mt-6 rounded-lg border border-indigo-500/30 bg-indigo-950/90 backdrop-blur-sm overflow-hidden shadow-lg"
      variants={scaleIn}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-indigo-500/30 bg-indigo-900/20">
        <div className="flex items-center gap-2">
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-yellow-500" 
          />
          <motion.div 
            whileHover={{ scale: 1.2 }} 
            className="w-3 h-3 rounded-full bg-green-500" 
          />
        </div>
        <div className="flex items-center gap-2">
          {isLoading && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader className="w-4 h-4 text-indigo-300" />
            </motion.div>
          )}
          <span className="text-sm text-indigo-300 font-mono truncate max-w-[200px]">
            {siteUrl}
          </span>
        </div>
      </div>
      
      <div className="relative w-full h-[calc(100%-2.5rem)]">
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-indigo-950/50 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Loader className="w-8 h-8 text-indigo-500" />
                </motion.div>
                <span className="text-sm text-indigo-300 font-mono">Loading preview...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {loadError ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-indigo-950/50 backdrop-blur-sm"
          >
            <div className="text-center px-4">
              <p className="text-red-400 font-mono mb-2">Preview unavailable</p>
              <p className="text-sm text-indigo-300">Please visit the site directly</p>
            </div>
          </motion.div>
        ) : (
          <iframe
            src={siteUrl}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setLoadError(true);
              setIsLoading(false);
            }}
            title="Site Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        )}
      </div>
    </motion.div>
  );
};

const TechCard = ({ title, desc, Icon }) => (
  <motion.div 
    className="p-6 rounded-lg border border-indigo-500/30 bg-indigo-900/10 backdrop-blur-sm group"
    whileHover={{ 
      scale: 1.05,
      borderColor: "rgba(99, 102, 241, 0.5)",
      backgroundColor: "rgba(79, 70, 229, 0.2)"
    }}
    variants={slideUp}
  >
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-8 h-8 text-indigo-500 mb-4 group-hover:text-indigo-400 transition-colors" />
    </motion.div>
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">
      {title}
    </h3>
    <p className="text-indigo-200 group-hover:text-white transition-colors">{desc}</p>
  </motion.div>
);

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-950 to-black text-white"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <motion.nav 
        className={`fixed w-full border-b border-indigo-500/30 backdrop-blur-sm z-50 transition-all duration-300 ${
          scrolled ? 'bg-indigo-950/90 shadow-lg shadow-indigo-500/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.a 
              href="/" 
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Vite Template
            </motion.a>
            <div className="flex gap-6">
              {['Documentation', 'Examples', 'GitHub'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-indigo-300 hover:text-indigo-400 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-600 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-6xl mx-auto px-4 py-32">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-6xl font-bold bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text"
              initial={{ backgroundPosition: "0%" }}
              whileHover={{ backgroundPosition: "100%" }}
              transition={{ duration: 0.5 }}
            >
              React Vite Template
            </motion.span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-12 h-12 text-indigo-500 hover:text-indigo-400 transition-colors" />
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto"
            variants={slideUp}
          >
            A modern, feature-rich template for building React applications with Vite. Get started in minutes with pre-configured tools and best practices.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {[
              { href: "https://github.com/AliKelDev", Icon: Github, text: "View on GitHub" },
              { href: "https://github.com/AliKelDev/ReactViteTemplate", Icon: Code, text: "Use Template" }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors px-6 py-3 rounded-lg border border-indigo-500/30 hover:border-indigo-400 bg-indigo-900/20 hover:bg-indigo-800/30 backdrop-blur-sm"
                variants={slideUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.Icon className="w-5 h-5" />
                <span>{link.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <InstallGuide />

        <motion.div 
          className="mt-32"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text"
            variants={slideUp}
          >
            Example Projects
          </motion.h2>
          
          <motion.div 
            className="space-y-32"
            variants={stagger}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={scaleIn}
              >
                <motion.div 
                  className="rounded-xl border border-indigo-500/30 bg-indigo-900/10 backdrop-blur-sm overflow-hidden shadow-xl hover:shadow-indigo-500/20 transition-shadow"
                  whileHover={{ 
                    borderColor: "rgba(99, 102, 241, 0.5)",
                    backgroundColor: "rgba(79, 70, 229, 0.2)"
                  }}
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                      <motion.div 
                        className="lg:w-1/2"
                        variants={slideUp}
                      >
                        <motion.div
                          className="flex flex-wrap gap-4 mb-8"
                        >
                          <motion.a 
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg font-mono text-lg group relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "0%" }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="relative">Visit Site</span>
                            <ExternalLink className="w-5 h-5 relative transform group-hover:translate-x-1 transition-transform" />
                          </motion.a>
                        </motion.div>
                        <PreviewEmbed siteUrl={project.previewUrl} />
                      </motion.div>
                      <motion.div 
                        className="lg:w-1/2"
                        variants={slideUp}
                      >
                        <motion.div 
                          className="flex items-center gap-2 mb-4"
                          whileHover={{ x: 10 }}
                        >
                          <Terminal className="text-indigo-500" />
                          <span className="font-mono text-xl bg-gradient-to-r from-indigo-400 to-indigo-600 text-transparent bg-clip-text">
                            {project.client}
                          </span>
                        </motion.div>
                        <motion.h2 
                          className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text"
                          whileHover={{ x: 10 }}
                        >
                          {project.title}
                        </motion.h2>
                        <motion.p 
                          className="text-lg text-indigo-200 mb-8"
                          whileHover={{ x: 10 }}
                        >
                          {project.description}
                        </motion.p>
                        <motion.div 
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          variants={stagger}
                        >
                          {project.technologies.map((tech, idx) => (
                            <TechCard key={idx} {...tech} />
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.footer 
        className="w-full border-t border-indigo-500/30 bg-indigo-950/90 backdrop-blur-sm py-8 mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-indigo-300">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-indigo-500" /> by{" "}
            <a 
              href="https://github.com/AliKelDev" 
              className="hover:text-indigo-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              AliKelDev
            </a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default HomePage;