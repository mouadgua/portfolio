import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "2024",
    title: "L'Éveil",
    subtitle: "Baccalauréat Sciences Physiques",
    location: "Lycée Lalla Aicha (Rabat)",
    description: "Bases scientifiques solides. Première approche de la logique et de la résolution de problèmes complexes.",
  },
  {
    year: "2024-2025",
    title: "Fondations",
    subtitle: "Tronc Commun Développement Digital",
    location: "ISTA Souissi",
    description: "Immersion dans l'algorithmique et le code. Maîtrise des fondamentaux du développement web et des bases de données.",
  },
  {
    year: "Présent",
    title: "L'Excellence",
    subtitle: "Groupe d'Excellence Web Full Stack",
    location: "CMC Rabat-Témara",
    description: "Spécialisation Full Stack et rôle d'Ambassadeur. Intégration d'IA, architectures avancées et leadership technique.",
  }
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.fromTo(lineRef.current, 
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        }
      );

      // Animate each item
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 px-4 md:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center tracking-tighter">
          MON <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">PARCOURS</span>
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <div 
            ref={lineRef} 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent -translate-x-1/2 hidden md:block" 
          />

          <div className="space-y-24 md:space-y-32">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                ref={el => itemsRef.current[index] = el}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:block z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-mono mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <h4 className="text-lg text-white/70 mb-2">{item.subtitle}</h4>
                    <p className="text-sm text-blue-400/80 mb-4 uppercase tracking-wider font-semibold">
                      {item.location}
                    </p>
                    <p className="text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
