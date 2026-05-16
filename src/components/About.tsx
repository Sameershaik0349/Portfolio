import { motion, type Variants } from 'framer-motion';
import { Target, GraduationCap, Heart, Globe2 } from 'lucide-react';

export default function About() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 100, rotateX: 45, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 } 
    }
  };

  return (
    <section id="about" className="section-padding container relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex-col gap-8"
        style={{ perspective: '1000px' }}
      >
        <motion.h2 variants={fadeInUp} className="heading-lg text-gradient-purple text-center" style={{ marginBottom: '3rem' }}>
          About Me
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Objective */}
          <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(112, 0, 255, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                <Target size={24} color="#00d4ff" />
              </div>
              <h3 className="heading-md" style={{ margin: 0, fontSize: '1.5rem' }}>Objective</h3>
            </div>
            <p className="text-lead">
              Seeking a challenging position to utilize technical skills, learn new technologies, and contribute to company growth.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '2rem', gridRow: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(112, 0, 255, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                <GraduationCap size={24} color="#00d4ff" />
              </div>
              <h3 className="heading-md" style={{ margin: 0, fontSize: '1.5rem' }}>Education</h3>
            </div>
            
            <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(112, 0, 255, 0.5)' }}>
              <div style={{ marginBottom: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.85rem', top: '0.2rem', width: '12px', height: '12px', background: '#00d4ff', borderRadius: '50%', boxShadow: '0 0 10px #00d4ff' }}></div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-starlight)' }}>Bachelor of Technology (B.Tech)</h4>
                <p style={{ color: 'var(--color-accent-blue)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>2023 - 2026</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Computer Science - AI & ML<br/>VSM College of Engineering</p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.85rem', top: '0.2rem', width: '12px', height: '12px', background: '#d800ff', borderRadius: '50%', boxShadow: '0 0 10px #d800ff' }}></div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-starlight)' }}>Diploma in EEE</h4>
                <p style={{ color: 'var(--color-accent-blue)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>2020 - 2023</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Electrical and Electronics Engineering<br/>Government Polytechnic College</p>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(112, 0, 255, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                <Heart size={24} color="#00d4ff" />
              </div>
              <h3 className="heading-md" style={{ margin: 0, fontSize: '1.5rem' }}>Personal Interests</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {['Travelling', 'Watching tech videos', 'Cricket', 'Content Creation', 'Learning new technologies'].map((interest, idx) => (
                <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(112, 0, 255, 0.2)', padding: '1rem', borderRadius: '50%' }}>
                <Globe2 size={24} color="#00d4ff" />
              </div>
              <h3 className="heading-md" style={{ margin: 0, fontSize: '1.5rem' }}>Languages</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {['English', 'Hindi', 'Telugu', 'Urdu'].map((lang, idx) => (
                <span key={idx} style={{ background: 'rgba(112, 0, 255, 0.15)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid rgba(112, 0, 255, 0.3)', color: '#e0e7ff' }}>
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
