import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { CTAButton, TechBadge } from '../ui';

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface overflow-hidden hover:border-accent-primary/20 transition-all duration-300 group flex flex-col"
      aria-label={`Proyecto: ${project.title}`}
    >
      {/* Gradient top bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/10', '/60')}`}
        aria-hidden="true"
      />

      {/* Visual header */}
      <div
        className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="relative text-4xl font-display font-black opacity-10 text-white select-none">
          {project.title.split(' ').map(w => w[0]).join('')}
        </div>
        <div
          className="absolute bottom-3 right-3 w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: project.accentColor }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title & desc */}
        <div className="mb-4">
          <h3 className="font-display font-bold text-text-primary text-lg mb-2 group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Tecnologías">
          {project.stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-bg-border pt-4 mb-4 space-y-4">
                {/* Problem & Value */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Problema que resuelve</p>
                    <p className="text-text-secondary text-xs leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Valor generado</p>
                    <p className="text-text-secondary text-xs leading-relaxed">{project.value}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2">Funcionalidades clave</p>
                  <ul className="space-y-1.5" role="list">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary text-xs">
                        <CheckCircle2 size={12} className="text-accent-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Role */}
                <div className="bg-bg-elevated rounded-lg px-4 py-3 border border-bg-border">
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Mi rol</p>
                  <p className="text-text-secondary text-xs">{project.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-primary transition-colors focus-ring rounded font-mono"
            aria-expanded={expanded}
          >
            {expanded ? (
              <><ChevronUp size={12} /> Menos detalles</>
            ) : (
              <><ChevronDown size={12} /> Ver detalles</>
            )}
          </button>

          <div className="flex items-center gap-2">
            <CTAButton
              href={project.github}
              variant="ghost"
              size="sm"
              external
              aria-label={`Ver código de ${project.title}`}
            >
              <Github size={12} />
              Código
            </CTAButton>
            <CTAButton
              href={project.demo}
              variant="secondary"
              size="sm"
              external
              aria-label={`Ver demo de ${project.title}`}
            >
              <ExternalLink size={12} />
              Demo
            </CTAButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
