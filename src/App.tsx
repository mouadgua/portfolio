import { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ToolboxSection from './components/ToolboxSection';
import WorkflowSection from './components/WorkflowSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { motion } from 'motion/react';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-blue-500/30">
      <div className="noise-overlay" />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <HeroSection />
        <AboutSection />
        <ToolboxSection />
        <WorkflowSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
