import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Blockchain Intern',
    company: 'Vodafone Intelligent Solution (VoIS)',
    date: 'Jan 2025 - Feb 2025',
    details: 'Remote position focused on Blockchain Technology and Applications.',
    color: '#00d4ff'
  },
  {
    id: 2,
    role: 'AI Intern',
    company: 'Shell Internship Program',
    date: 'Jan 2025 - Feb 2025',
    details: 'Remote AICTE internship focusing on Artificial Intelligence.',
    color: '#d800ff'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding container relative z-10 min-h-screen flex-col flex-center">
      <motion.h2
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ type: 'spring', damping: 15 }}
        className="heading-lg text-gradient text-center"
        style={{ perspective: '1000px', transformOrigin: 'top', marginBottom: '5rem' }}
      >
        Experience & Internships
      </motion.h2>

      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        {/* Constellation Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, rgba(0, 212, 255, 0.5), rgba(216, 0, 255, 0.5))',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? 45 : -45, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            style={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              paddingLeft: index % 2 === 0 ? 0 : '50%',
              paddingRight: index % 2 === 0 ? '50%' : 0,
              position: 'relative',
              marginBottom: '4rem',
              width: '100%'
            }}
          >
            {/* Glowing Node */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '20px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: exp.color,
              transform: 'translateX(-50%)',
              boxShadow: `0 0 15px ${exp.color}`,
              zIndex: 2,
              border: '3px solid var(--color-space-black)'
            }}></div>

            {/* Content Card */}
            <div className="glass-card" style={{
              width: '90%',
              padding: '2rem',
              margin: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem',
              position: 'relative'
            }}>
              <h3 className="heading-md" style={{ color: exp.color, fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                {exp.role}
              </h3>
              <h4 style={{ color: 'var(--color-starlight)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                {exp.company}
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {exp.date}
              </p>
              <p className="text-lead" style={{ fontSize: '1rem' }}>
                {exp.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
