import { motion } from 'framer-motion';

// ─── Badge ───────────────────────────────────────────────────
export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-bg-elevated border border-bg-border text-text-secondary',
    accent: 'bg-accent-glow border border-accent-primary/30 text-accent-primary',
    subtle: 'bg-bg-surface border border-bg-border text-text-muted',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

// ─── SectionTitle ──────────────────────────────────────────────
export function SectionTitle({ label, title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      {label && (
        <span className="font-mono text-xs text-accent-primary tracking-[0.2em] uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight ${align === 'center' ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-secondary text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// ─── CTAButton ─────────────────────────────────────────────────
export function CTAButton({ children, href, onClick, variant = 'primary', size = 'md', className = '', external = false, ...props }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  const variants = {
    primary: `bg-accent-primary text-bg-base font-semibold hover:brightness-110 hover:shadow-[0_0_25px_rgba(0,255,178,0.4)] transition-all duration-200`,
    secondary: `border border-accent-primary/40 text-accent-primary hover:bg-accent-glow hover:border-accent-primary transition-all duration-200`,
    ghost: `text-text-secondary hover:text-text-primary border border-bg-border hover:border-bg-border/60 transition-all duration-200`,
  };

  const classes = `inline-flex items-center gap-2 rounded-lg font-body font-medium focus-ring ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// ─── TechBadge ─────────────────────────────────────────────────
export function TechBadge({ tech }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-bg-elevated border border-bg-border text-text-secondary hover:border-accent-primary/30 hover:text-accent-primary transition-colors duration-200">
      {tech}
    </span>
  );
}

// ─── Divider ───────────────────────────────────────────────────
export function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-bg-border to-transparent my-8" />
  );
}
