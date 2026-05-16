import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <span className="text-gradient-purple glow-text">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </span>
  );
};

export default function Hero() {
  const name = "MAHABOOB SAMEER SAHEB SHAIK";

  // Animation variants for 3D text reveal
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants: any = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex-center flex-col relative z-10 container" style={{ paddingTop: '10vh' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ perspective: '1000px', textAlign: 'center' }}
      >
        <h1 className="heading-xl" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
          {name.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} style={{ display: 'flex' }}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  variants={childVariants}
                  style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
                  className="text-gradient glow-text"
                >
                  {char}
                </motion.span>
              ))}
              <span style={{ width: '1vw' }}></span>
            </span>
          ))}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        style={{ marginTop: '2rem', textAlign: 'center' }}
      >
        <h2 className="heading-md">
          <TypewriterText text="Software Developer" />
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4.5, duration: 0.5, type: 'spring' }}
        style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <button className="glow-btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          Explore My Work
        </button>
        <button className="glow-btn glow-btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}
