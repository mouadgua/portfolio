import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "ON hair salon",
    description: "Site-web vitrine pour onhair coiffeur a agdal ",
    tags: ["html", "css" , "bootstrap" , "tailwind"],
    image: "",
    color: "from-purple-500/20 to-pink-500/20",
    github:"",
    link:"https://onhair.ma"
  },
  {
    title: "Real estate app",
    description: "app test pour agence d'immobilier ",
    tags: ["Python", "Gemini API", "DeepSeek", "Next.js"],
    image: "https://vercel.com/mouads-projects-73e29ded",
    color: "from-blue-500/20 to-cyan-500/20",
    github:"",
  },
];

function TiltCard({ project }: { project: typeof projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden cursor-pointer group"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>

      {/* Content */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 p-8 flex flex-col justify-end z-10"
      >
        <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-white/70 mb-6 text-sm leading-relaxed max-w-md">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
          <button className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400 transition-colors">
            <ExternalLink size={16} /> <a href={project.link} target="_blank" >Live Demo</a>
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold hover:text-white/70 transition-colors">
            <Github size={16} /> <a href={project.github} target="_blank" >Live Demo</a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              PROJETS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">RÉCENTS</span>
            </h2>
            <p className="text-white/50 max-w-xl">
              Une sélection de mes réalisations combinant développement full-stack, intelligence artificielle et design interactif.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold hidden md:block">
            Voir tout sur GitHub
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ perspective: 1000 }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={index === 2 ? "lg:col-span-2 lg:w-2/3 mx-auto" : ""}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
