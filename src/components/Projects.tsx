import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Server, Layout, Bot, Building2, Languages } from 'lucide-react';

const projects = [
  {
    id: 3,
    title: 'Jarvis AI Assistant',
    subtitle: 'Voice-Controlled AI',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript', 'Web Speech API'],
    description: 'A highly responsive, multi-tasking voice-activated AI assistant featuring a futuristic web-based HUD. Implements continuous listening and an intelligent execution engine.',
    icon: <Bot size={40} color="#00ffcc" />
  },
  {
    id: 4,
    title: 'Bank of Mahishmathi',
    subtitle: 'Banking Web Application',
    tech: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    description: 'A Django-based banking web application featuring real-world banking rules, strong security practices, user dashboard with transaction history, and an interactive frontend.',
    icon: <Building2 size={40} color="#ffcc00" />
  },
  {
    id: 5,
    title: 'AI Translator',
    subtitle: 'Real-time Translation App',
    tech: ['React', 'FastAPI', 'Python', 'deep-translator'],
    description: 'A full-stack application for real-time text translation with language auto-detection, built using React for the frontend and FastAPI on the backend.',
    icon: <Languages size={40} color="#ff3366" />
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding container relative z-10 min-h-screen flex-col flex-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="heading-lg text-gradient-purple text-center"
        style={{ marginBottom: '4rem' }}
      >
        Projects Showcase
      </motion.h2>

      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            className="glass-card"
            style={{
              position: 'absolute',
              width: '100%',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 className="heading-md" style={{ marginBottom: '0.5rem' }}>{projects[currentIndex].title}</h3>
                <p style={{ color: 'var(--color-accent-blue)', fontWeight: 600 }}>{projects[currentIndex].subtitle}</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px' }}>
                {projects[currentIndex].icon}
              </div>
            </div>

            <p className="text-lead" style={{ margin: '1rem 0' }}>{projects[currentIndex].description}</p>

            <div>
              <h4 style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.8rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Technologies Used</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {projects[currentIndex].tech.map((t, idx) => (
                  <span key={idx} style={{ background: 'rgba(112, 0, 255, 0.2)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          onClick={prevProject}
          style={{ position: 'absolute', left: '-2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.1)', border: 'none', borderRadius: '50%', padding: '1rem', cursor: 'pointer', color: '#fff', zIndex: 20 }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextProject}
          style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255, 255, 255, 0.1)', border: 'none', borderRadius: '50%', padding: '1rem', cursor: 'pointer', color: '#fff', zIndex: 20 }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Indicators */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
        {projects.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: idx === currentIndex ? 'var(--color-accent-blue)' : 'rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              boxShadow: idx === currentIndex ? '0 0 10px var(--color-accent-blue)' : 'none',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
}
