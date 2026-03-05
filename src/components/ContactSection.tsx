import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Phone } from 'lucide-react';

function MagneticButton({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX * 0.3);
    y.set(mouseY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={`flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-colors ${className}`}
    >
      {children}
    </motion.a>
  );
}

export default function ContactSection() {
  return (
    <section className="relative w-full py-32 px-4 md:px-8 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">SOMETHING</span> <br />
                GREAT.
              </h2>
              <p className="text-white/50 max-w-md text-lg mb-12">
                Disponible pour des missions freelance, des collaborations innovantes ou simplement pour discuter tech & IA.
              </p>
              
              <div className="flex gap-4 mb-12">
                <MagneticButton href="https://github.com/mouadgua">
                  <Github size={24} className="text-white/80" />
                </MagneticButton>
                <MagneticButton href="https://www.linkedin.com/in/mouad-guarraz-a46174360/">
                  <Linkedin size={24} className="text-white/80" />
                </MagneticButton>
                <MagneticButton href="mailto:mouadguarraz@gmail.com">
                  <Mail size={24} className="text-white/80" />
                </MagneticButton>
              </div>
            </div>

            <div className="text-white/30 text-sm">
              <p>© 2026 Mouad Guarraz. All rights reserved.</p>
              <p>Rabat - Témara, Maroc</p>
            </div>
          </motion.div>

          {/* Right Column (Personal info) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center"
          >
            {/* replace src with your actual photo path or URL */}
            <img
              src="/pp.png"
              alt="Mouad Guarraz"
              className="w-50 h-50 rounded-full mb-6 object-cover"
            />
            <div className="flex flex-col items-start space-y-4 text-white">
              <div className="flex items-center gap-3 text-lg font-medium">
                <Phone className="w-6 h-6" />
                <a href="https://wa.me/your-number" className="hover:underline">+212 6 74 45 11 80</a>
              </div>
              <div className="flex items-center gap-3 text-lg font-medium">
                <Mail className="w-6 h-6" />
                <a href="mailto:mouadguarraz@gmail.com" className="hover:underline">mouadguarraz@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-lg font-medium">
                <Github className="w-6 h-6" />
                <a href="https://github.com/mouadgua" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/mouadgua</a>
              </div>
              <div className="flex items-center gap-3 text-lg font-medium">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>mouad#9468</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
