import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-bg-border" role="contentinfo">
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,71,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-accent-glow border border-accent-primary/30 flex items-center justify-center">
                <Terminal size={12} className="text-accent-primary" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-text-primary text-sm">
                {PERSONAL_INFO.name.split(' ')[0]}<span className="text-accent-primary">.</span>
              </span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed max-w-[200px]">
              {PERSONAL_INFO.title} — construyendo sistemas que funcionan.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">
              Navegación
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-text-secondary hover:text-accent-primary transition-colors focus-ring rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">
              Contacto
            </p>
            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-primary transition-colors focus-ring rounded group"
                aria-label="GitHub"
              >
                <Github size={13} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-primary transition-colors focus-ring rounded"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-xs text-text-secondary hover:text-accent-primary transition-colors focus-ring rounded"
                aria-label="Email"
              >
                <Mail size={13} aria-hidden="true" />
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bg-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-text-muted">
          <p>
            © {year} {PERSONAL_INFO.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Construido con React, Vite & Tailwind
            <Heart size={10} className="text-accent-primary" fill="currentColor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
