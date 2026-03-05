import { motion } from 'motion/react';
import { MessageSquare, Search, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Dialogue & Vision",
    description: "Comprendre vos objectifs et votre secteur d'activité.",
    icon: <MessageSquare size={24} />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Audit du Problème",
    description: "Définir précisément le verrou technique ou métier à lever.",
    icon: <Search size={24} />,
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    title: "Architecture & Design",
    description: "Concevoir une solution sur mesure (UI/UX et structure Laravel/React).",
    icon: <PenTool size={24} />,
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: 4,
    title: "Déploiement",
    description: "Développement, intégration IA et mise en ligne de la solution finale.",
    icon: <Rocket size={24} />,
    color: "from-orange-500 to-amber-400"
  }
];

export default function WorkflowSection() {
  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            WORKFLOW <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">FREELANCE</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Une approche méthodique et transparente pour transformer vos idées en solutions concrètes.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/5 hidden md:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number/Icon Container */}
              <div className="relative mb-8 z-10">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full" />
                <div className={`w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-colors duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <span className="text-white/80 group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </span>
                </div>
                
                {/* Number Badge */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                  0{step.id}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
