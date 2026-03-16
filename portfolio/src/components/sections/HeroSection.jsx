import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download, ChevronDown, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';
import { CTAButton, Badge } from '../ui';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
      <div className="absolute inset-0 bg-grid-pattern bg-grid" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,168,71,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-accent-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full bg-accent-secondary/4 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Open to Work badge — lo primero que ve el reclutador */}
          <motion.div variants={itemVariants} className="mb-5 flex flex-col sm:flex-row items-center gap-2">
            <Badge variant="accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse inline-block" />
              Disponible ahora
            </Badge>
            <div className="flex flex-wrap justify-center gap-1.5">
              {PERSONAL_INFO.openToWork.roles.map((role) => (
                <span key={role} className="text-xs font-mono text-text-muted border border-bg-border px-2.5 py-1 rounded-full">
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="font-mono text-xs text-text-muted tracking-[0.3em] uppercase mb-2">
            Hola, soy
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary mb-3 leading-[1.02] tracking-tight"
          >
            {PERSONAL_INFO.name.split(' ')[0]}{' '}
            <span className="text-gradient">{PERSONAL_INFO.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={itemVariants} className="font-display text-xl sm:text-2xl font-medium text-text-secondary mb-5">
            {PERSONAL_INFO.title}
          </motion.p>

          {/* Value prop — diferenciador clave */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mb-4 px-5 py-4 rounded-xl border border-bg-border bg-bg-surface/50 backdrop-blur-sm"
          >
            <p className="text-text-secondary text-base leading-relaxed">
              {PERSONAL_INFO.valueProp}
            </p>
          </motion.div>

          {/* Modality pill */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <Briefcase size={12} className="text-text-muted" aria-hidden="true" />
            <span className="text-xs text-text-muted font-mono">{PERSONAL_INFO.openToWork.modality}</span>
            <span className="w-px h-3 bg-bg-border" aria-hidden="true" />
            <MapPin size={12} className="text-text-muted" aria-hidden="true" />
            <span className="text-xs text-text-muted font-mono">{PERSONAL_INFO.location}</span>
          </motion.div>

          {/* CTAs — primary: ver proyectos, secondary: descargar CV */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 mb-10"
          >
            <CTAButton href="#projects" variant="primary" size="lg">
              Ver proyectos
              <ArrowRight size={15} aria-hidden="true" />
            </CTAButton>

            <CTAButton
              href={PERSONAL_INFO.cvUrl}
              variant="secondary"
              size="lg"
              external
              aria-label="Descargar CV en PDF"
            >
              <Download size={15} aria-hidden="true" />
              Descargar CV
            </CTAButton>

            <CTAButton href="#contact" variant="ghost" size="lg">
              Hablemos
            </CTAButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 text-sm text-text-muted"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-primary transition-colors focus-ring rounded"
              aria-label="Ver GitHub"
            >
              <Github size={14} aria-hidden="true" /> GitHub
            </a>
            <span className="w-px h-4 bg-bg-border" aria-hidden="true" />
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-primary transition-colors focus-ring rounded"
              aria-label="Ver LinkedIn"
            >
              <Linkedin size={14} aria-hidden="true" /> LinkedIn
            </a>
            <span className="w-px h-4 bg-bg-border" aria-hidden="true" />
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-accent-primary transition-colors focus-ring rounded"
              aria-label="Enviar email"
            >
              <Mail size={14} aria-hidden="true" /> Email
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-bg-border rounded-2xl overflow-hidden border border-bg-border"
          role="list"
          aria-label="Estadísticas profesionales"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-bg-surface px-6 py-5 flex flex-col items-center justify-center hover:bg-bg-elevated transition-colors duration-200"
              role="listitem"
            >
              <span className="font-display font-bold text-2xl md:text-3xl text-gradient mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-text-muted text-center leading-tight">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
