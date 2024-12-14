import React, { useState } from 'react';
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

const InstallGuide = () => (
  <div className="max-w-2xl mx-auto my-12 px-4">
    <div className="rounded-lg border border-purple-500/30 bg-black/90 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center px-4 py-2 border-b border-purple-500/30 bg-purple-900/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="p-6 font-mono text-sm">
        <p className="text-purple-300 mb-4"># Clone the repository</p>
        <p className="text-green-400 mb-4">$ git clone https://github.com/AliKelDev/ReactViteTemplate.git</p>
        
        <p className="text-purple-300 mb-4"># Install dependencies</p>
        <p className="text-green-400 mb-4">$ cd ReactViteTemplate<br />$ npm install</p>
        
        <p className="text-purple-300 mb-4"># Start development server</p>
        <p className="text-green-400 mb-4">$ npm run dev</p>
        
        <p className="text-purple-300 mb-4"># Build and deploy</p>
        <p className="text-green-400">$ npm run build<br />$ npm run deploy</p>
      </div>
    </div>
    <div className="text-center mt-4">
      <a 
        href="https://aliceleiserblog.netlify.app/blog/how-to-build-your-professional-website-in-10-minutes"
        className="text-purple-300 hover:text-pink-400 transition-colors inline-flex items-center gap-2"
      >
        For detailed instructions, check out my blog <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const PreviewEmbed = ({ siteUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  return (
    <div className="w-full h-96 relative mt-6 rounded-lg border border-purple-500/30 bg-black/90 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-purple-500/30 bg-purple-900/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-2">
          {isLoading && <Loader className="w-4 h-4 text-purple-300 animate-spin" />}
          <span className="text-sm text-purple-300 font-mono truncate max-w-[200px]">
            {siteUrl}
          </span>
        </div>
      </div>
      
      <div className="relative w-full h-[calc(100%-2.5rem)]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <Loader className="w-8 h-8 text-pink-500 animate-spin" />
              <span className="text-sm text-purple-300 font-mono">Loading preview...</span>
            </div>
          </div>
        )}
        {loadError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center px-4">
              <p className="text-red-400 font-mono mb-2">Preview unavailable</p>
              <p className="text-sm text-purple-300">Please visit the site directly</p>
            </div>
          </div>
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
    </div>
  );
};

const TechCard = ({ title, desc, Icon }) => (
  <div className="p-6 rounded-lg border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
    <Icon className="w-8 h-8 text-pink-500 mb-4" />
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
      {title}
    </h3>
    <p className="text-purple-200">{desc}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <nav className="w-full border-b border-purple-500/30 bg-black/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Template Project
            </a>
            <div className="flex gap-6">
              <a href="/exemple1" className="text-purple-300 hover:text-pink-400 transition-colors">Example 1</a>
              <a href="/exemple2" className="text-purple-300 hover:text-pink-400 transition-colors">Example 2</a>
              <a href="/exemple3" className="text-purple-300 hover:text-pink-400 transition-colors">Example 3</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <a
            href="https://x.com/AliLeisR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-4xl font-bold group"
          >
            <span className="bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              Made by Alice Leiser
            </span>
            <Heart className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors animate-pulse" />
          </a>
          
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/AliKelDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-pink-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://github.com/AliKelDev/ReactViteTemplate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-pink-400 transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>Template Repo</span>
            </a>
          </div>
        </div>

        <InstallGuide />

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <div className="rounded-xl border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                      <div className="lg:w-1/2">
                        <a 
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-mono text-lg hover:from-pink-500 hover:to-purple-500 transition-all"
                        >
                          Visit Site
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <PreviewEmbed siteUrl={project.previewUrl} />
                      </div>
                      <div className="lg:w-1/2">
                        <div className="flex items-center gap-2 mb-4">
                          <Terminal className="text-pink-500" />
                          <span className="font-mono text-xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                            {project.client}
                          </span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
                          {project.title}
                        </h2>
                        <p className="text-lg text-purple-200 mb-8">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {project.technologies.map((tech, idx) => (
                            <TechCard key={idx} {...tech} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;