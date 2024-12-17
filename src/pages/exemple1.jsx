import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Award, Bookmark, ChevronRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    title: "Pixelle3",
    url: "https://webpixelle3.netlify.app",
    review: "A comprehensive web design platform that delivers exceptional results. Built with modern technologies and best practices, it offers scalable solutions for businesses of all sizes. The interface combines aesthetics with functionality, resulting in an outstanding user experience.",
    rating: "Outstanding Performance",
    metrics: {
      satisfaction: 98,
      reliability: 95,
      innovation: 92
    }
  },
  {
    title: "Tech Blog",
    url: "https://aliceleiserblog.netlify.app",
    review: "An insightful technical blog featuring in-depth analysis and practical solutions. The content focuses on emerging technologies and development practices, providing valuable resources for developers. Clean design and optimal performance enhance the reading experience.",
    rating: "Excellence in Content",
    metrics: {
      engagement: 94,
      content: 96,
      performance: 93
    }
  },
  {
    title: "QuizMapperJS",
    url: "https://quizmapperjs.netlify.app",
    review: "An innovative open-source framework that revolutionizes assessment creation. The sophisticated architecture handles complex variable mapping while maintaining excellent performance. A testament to modern JavaScript capabilities in data processing.",
    rating: "Technical Innovation",
    metrics: {
      innovation: 97,
      reliability: 94,
      scalability: 95
    }
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const MetricBar = ({ value, label }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span className="text-slate-300">{label}</span>
      <span className="text-indigo-300">{value}%</span>
    </div>
    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="relative p-8 rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
    >
      <div className="absolute top-4 right-4 flex gap-3">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Star className="w-5 h-5 text-indigo-400/40" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Award className="w-5 h-5 text-indigo-400/40" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Bookmark className="w-5 h-5 text-indigo-400/40" />
        </motion.div>
      </div>
      
      <motion.h2 
        className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text"
        whileHover={{ x: 10 }}
      >
        {project.title}
      </motion.h2>
      
      <p className="text-slate-300 mb-8 leading-relaxed">
        {project.review}
      </p>

      <div className="space-y-4 mb-8">
        {Object.entries(project.metrics).map(([key, value]) => (
          <MetricBar key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} value={value} />
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
            {project.rating}
          </span>
        </div>
        <motion.a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          View Project <ChevronRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const BackButton = () => (
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
);

const Example1Page = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900/20 to-slate-900 text-white pt-32 px-4">
      <BackButton />
      
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Showcasing a collection of innovative solutions that demonstrate technical excellence and creative problem-solving.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Example1Page;