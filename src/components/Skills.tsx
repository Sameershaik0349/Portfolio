import { motion } from 'framer-motion';

const TiltCard = ({ title, items, color }: { title: string, items: string[], color: string }) => {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 100, rotateY: 45, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
      whileHover={{ y: -15, boxShadow: `0 20px 40px ${color}40`, borderColor: color, transition: { duration: 0.3, ease: 'easeOut' } }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: 'spring', damping: 20, stiffness: 80 }}
      style={{ minHeight: '300px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'none' }}
    >
      <h3 className="heading-md" style={{ color, marginBottom: '2rem', textAlign: 'center' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {items.map((item, idx) => (
          <motion.span
            key={idx}
            whileHover={{ 
              y: -5, 
              boxShadow: `0 10px 20px ${color}60`, 
              backgroundColor: `rgba(255, 255, 255, 0.1)`,
              borderColor: color,
              transition: { duration: 0.2, ease: 'easeOut' }
            }}
            style={{
              background: `rgba(255, 255, 255, 0.05)`,
              border: `1px solid ${color}40`,
              padding: '0.8rem 1.5rem',
              borderRadius: '30px',
              fontSize: '1rem',
              color: 'var(--color-starlight)',
              boxShadow: `0 4px 15px ${color}20`,
              cursor: 'default',
              display: 'inline-block'
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const techSkills = ['Python', 'PHP', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node.js', 'MongoDB', 'MySQL'];
  const coreSkills = ['Problem Solving', 'Excellent Communication', 'Decision Making', 'Teamwork'];

  return (
    <section id="skills" className="section-padding container relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 50, rotateX: 90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ type: 'spring', damping: 15 }}
        className="heading-lg text-gradient text-center"
        style={{ perspective: '1000px', transformOrigin: 'bottom', marginBottom: '4rem' }}
      >
        Technical Skills
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        <TiltCard title="Languages & Frameworks" items={techSkills} color="#00d4ff" />
        <TiltCard title="Core Competencies" items={coreSkills} color="#d800ff" />
      </div>
    </section>
  );
}
