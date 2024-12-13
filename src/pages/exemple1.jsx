import React, { useState } from 'react';
import { ExternalLink, Heart, Star, Coffee, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Pixelle3",
    url: "https://webpixelle3.netlify.app",
    review: "Look, I'm not saying this website will change your life, but I haven't been the same since I discovered you could actually make money building rad websites. It's like, totally professional and stuff, but also has this vibe that says 'Yeah, I know CSS and I'm not afraid to use it.' 10/10 would sell websites again.",
    rating: "✨ Absolutely Based/10"
  },
  {
    title: "Tech Blog",
    url: "https://aliceleiserblog.netlify.app",
    review: "Imagine reading tech blogs in 2024. But like, unironically, this one's actually good? It's giving 'I actually know what I'm talking about' energy without the usual 'let me show you how to center a div for the 47th time' content. The animations are smooth like butter on a hot croissant. Chef's kiss.",
    rating: "🔥 Certified Fresh Code Moments/10"
  },
  {
    title: "QuizMapperJS",
    url: "https://quizmapperjs.netlify.app",
    review: "Not to be dramatic, but this quiz framework is literally changing lives. You think you know quiz tools? This one's like 'hold my JavaScript' and proceeds to handle more variables than my coffee order. Open source? More like open heart because I'm in love with this codebase.",
    rating: "💜 Would Fork Again/10"
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-6 rounded-lg border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 right-4 flex gap-2">
        <Star className={`w-5 h-5 ${isHovered ? 'text-yellow-400' : 'text-purple-400'} transition-colors`} />
        <Heart className={`w-5 h-5 ${isHovered ? 'text-pink-400' : 'text-purple-400'} transition-colors`} />
        <Coffee className={`w-5 h-5 ${isHovered ? 'text-orange-400' : 'text-purple-400'} transition-colors`} />
      </div>
      
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
        {project.title}
      </h2>
      
      <p className="text-purple-200 mb-6 leading-relaxed">
        {project.review}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="font-mono text-pink-400">
          {project.rating}
        </span>
        <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-pink-400 transition-colors"
        >
          Visit Site <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const Example1Page = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Portfolio Example
            </span>
            <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-yellow-400 animate-pulse" />
          </h1>
          <p className="text-xl text-purple-300">
            Here you could put a portfolio page, for example...
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example1Page;