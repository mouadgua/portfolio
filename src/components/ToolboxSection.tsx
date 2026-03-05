import { motion } from 'motion/react';
import { Code2, Database, BrainCircuit, Video, Layers, Sparkles } from 'lucide-react';

const tools = [
  { name: 'React', icon: <Code2 size={24} /> },
  { name: 'Laravel', icon: <Layers size={24} /> },
  { name: 'Python', icon: <Code2 size={24} /> },
  { name: 'PHP', icon: <Code2 size={24} /> },
  { name: 'MySQL', icon: <Database size={24} /> },
  { name: 'MongoDB', icon: <Database size={24} /> },
  { name: 'Git', icon: <Code2 size={24} /> },
];

const aiStack = [
  { name: 'Gemini', icon: <BrainCircuit size={24} /> },
  { name: 'Google AI Studio', icon: <BrainCircuit size={24} /> },
  { name: 'DeepSeek', icon: <BrainCircuit size={24} /> },
  { name: 'Cursor', icon: <Code2 size={24} /> },
];

const solutions = [
  "SaaS Architectures",
  "AI-Driven Workflows",
  "Professional Video Editing",
];

export default function ToolboxSection() {
  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            TOOLBOX & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">SOLUTIONS</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Une stack technique moderne et polyvalente, orientée vers la performance, l'intelligence artificielle et la création multimédia.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Core Stack */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50" />
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code2 className="text-blue-400" /> Core Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:border-blue-500/50 transition-colors">
                  {tool.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Stack */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-50" />
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BrainCircuit className="text-purple-400" /> AI Stack
            </h3>
            <div className="flex flex-col gap-3">
              {aiStack.map((ai, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
                  <span className="text-purple-400/50">{ai.icon}</span>
                  {ai.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Multimedia */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent opacity-50" />
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Video className="text-pink-400" /> Multimédia
            </h3>
            <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                <Video size={40} className="text-pink-400" />
              </div>
              <p className="text-lg font-semibold text-center">DaVinci Resolve</p>
              <p className="text-sm text-white/50 text-center mt-2">Montage vidéo professionnel & Colorimétrie</p>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/40 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-50" />
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="text-cyan-400" /> Solutions Proposées
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {solutions.map((solution, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center gap-3 hover:bg-black/60 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    {idx === 0 ? <Layers /> : idx === 1 ? <BrainCircuit /> : <Video />}
                  </div>
                  <span className="font-semibold text-sm">{solution}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
