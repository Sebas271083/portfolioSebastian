import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../data/portfolio';
import { CTAButton } from '../ui';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-base/90 backdrop-blur-xl border-b border-bg-border/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 focus-ring rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center">
                <Terminal size={14} className="text-accent-primary" />
              </div>
              <span className="font-display font-bold text-text-primary text-sm">
                {PERSONAL_INFO.name.split(' ')[0]}
                <span className="text-accent-primary">.</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-bg-elevated transition-all duration-200 font-body focus-ring"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <CTAButton
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
              >
                Hablemos
              </CTAButton>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 rounded-lg border border-bg-border text-text-secondary hover:text-text-primary hover:border-accent-primary/30 transition-all duration-200 focus-ring"
                aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-bg-base/95 backdrop-blur-xl" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-bg-surface border-l border-bg-border flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-bg-border">
                <span className="font-display font-bold text-text-primary">
                  {PERSONAL_INFO.name.split(' ')[0]}<span className="text-accent-primary">.</span>
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-bg-elevated text-text-secondary focus-ring"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex-1 p-4 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center w-full px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-all duration-200 font-body text-left focus-ring"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-4 border-t border-bg-border">
                <CTAButton
                  onClick={() => handleNavClick('#contact')}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Hablemos
                </CTAButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
