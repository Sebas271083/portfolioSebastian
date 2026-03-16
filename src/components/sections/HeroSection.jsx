import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';
import { CTAButton, Badge } from '../ui';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        aria-hidden="true"
      />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,255,178,0.07) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-secondary/5 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <Badge variant="accent" className="mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse inline-block" />
              {PERSONAL_INFO.available ? 'Disponible para nuevas oportunidades' : 'No disponible actualmente'}
            </Badge>
          </motion.div>

          {/* Greeting + Name */}
          <motion.div variants={itemVariants} className="mb-2">
            <span className="font-mono text-sm text-text-muted tracking-widest uppercase">
              Hola, soy
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4 leading-[1.05] tracking-tight"
          >
            {PERSONAL_INFO.name.split(' ')[0]}{' '}
            <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary">
              {PERSONAL_INFO.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
          >
            Diseño y construyo{' '}
            <span className="text-text-primary font-medium">sistemas web completos</span>
            {' '}— desde la base de datos hasta la interfaz —{' '}
            con foco en{' '}
            <span className="text-accent-primary font-medium">escalabilidad, rendimiento y resultado de negocio</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 mb-12"
          >
            <CTAButton href="#projects" variant="primary" size="lg">
              Ver proyectos
              <ArrowRight size={16} />
            </CTAButton>
            <CTAButton href="#contact" variant="secondary" size="lg">
              Hablemos
            </CTAButton>
            <CTAButton
              href={PERSONAL_INFO.github}
              variant="ghost"
              size="lg"
              external
              aria-label="Ver perfil de GitHub"
            >
              <Github size={16} />
              GitHub
            </CTAButton>
          </motion.div>

          {/* Social + Location */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 text-sm text-text-muted"
          >
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-primary transition-colors focus-ring rounded"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <span className="hidden sm:block w-px h-4 bg-bg-border" aria-hidden="true" />
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 hover:text-accent-primary transition-colors focus-ring rounded"
              aria-label="Email"
            >
              <Mail size={14} />
              {PERSONAL_INFO.email}
            </a>
            <span className="hidden sm:block w-px h-4 bg-bg-border" aria-hidden="true" />
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {PERSONAL_INFO.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-bg-border rounded-2xl overflow-hidden border border-bg-border"
          role="list"
          aria-label="Estadísticas profesionales"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-bg-surface px-6 py-6 flex flex-col items-center justify-center hover:bg-bg-elevated transition-colors duration-200"
              role="listitem"
            >
              <span className="font-display font-bold text-2xl md:text-3xl text-gradient mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-text-muted text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
