import { motion } from 'framer-motion';
import { Phone, Mail, Link, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding container relative z-10 min-h-screen flex-center flex-col">
      <motion.h2
        initial={{ opacity: 0, y: 50, rotateX: 90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ type: 'spring', damping: 15 }}
        className="heading-lg text-gradient-purple text-center"
        style={{ perspective: '1000px', transformOrigin: 'bottom', marginBottom: '4rem' }}
      >
        Get In Touch
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', width: '100%', maxWidth: '1000px' }}>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -45, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', perspective: '1000px' }}
        >
          <h3 className="heading-md">Let's Connect</h3>
          <p className="text-lead" style={{ marginBottom: '2rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(0, 212, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: '#00d4ff' }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>Phone</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>+91-7032175956</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(216, 0, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: '#d800ff' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>Email</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>sksameer46644@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(112, 0, 255, 0.1)', padding: '1rem', borderRadius: '50%', color: '#7000ff' }}>
                <Link size={24} />
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem' }}>LinkedIn</p>
                <a href="https://linkedin.com/in/sameer-shaik03" target="_blank" rel="noreferrer" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 500, transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#00d4ff'} onMouseLeave={(e) => e.currentTarget.style.color = '#e0e7ff'}>
                  linkedin.com/in/sameer-shaik03
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 45, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{ perspective: '1000px' }}
        >
          <form className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.7)' }}>Name</label>
              <input type="text" style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }} placeholder="John Doe" />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.7)' }}>Email</label>
              <input type="email" style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }} placeholder="john@example.com" />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.7)' }}>Message</label>
              <textarea rows={4} style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'vertical' }} placeholder="Your message here..."></textarea>
            </div>

            <button type="submit" className="glow-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div style={{ marginTop: '6rem', width: '100%', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', color: 'rgba(255, 255, 255, 0.5)' }}>
        <p>© {new Date().getFullYear()} Mahaboob Sameer Saheb Shaik. Designed with React & Three.js.</p>
      </div>
    </section>
  );
}
