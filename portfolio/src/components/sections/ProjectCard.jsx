import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, CheckCircle2, LayoutDashboard, GitBranch } from 'lucide-react';
import { CTAButton, TechBadge } from '../ui';
import { ProjectMockup } from './ProjectMockups';
import { VetArchDiagram, POSArchDiagram } from './ArchDiagrams';

const archMap = {
  veterinary: VetArchDiagram,
  pos: POSArchDiagram,
};

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [view, setView] = useState('mockup'); // 'mockup' | 'arch'
  const ArchDiagram = archMap[project.mockupType];
  const hasArch = !!ArchDiagram;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface overflow-hidden hover:border-accent-primary/20 transition-all duration-300 group flex flex-col"
      aria-label={`Proyecto: ${project.title}`}
    >
      {/* Accent top bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}80, transparent)` }}
        aria-hidden="true"
      />

      {/* Visual area with view toggle */}
      <div className="relative" aria-hidden="true">
        {/* Tab switcher — only show if arch diagram exists */}
        {hasArch && (
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-bg-base/80 backdrop-blur-sm rounded-lg p-1 border border-bg-border">
            <button
              onClick={() => setView('mockup')}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono transition-all ${
                view === 'mockup'
                  ? 'bg-bg-elevated text-text-primary'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
              aria-label="Ver mockup UI"
            >
              <LayoutDashboard size={9} /> UI
            </button>
            <button
              onClick={() => setView('arch')}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono transition-all ${
                view === 'arch'
                  ? 'bg-bg-elevated text-text-primary'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
              aria-label="Ver arquitectura"
            >
              <GitBranch size={9} /> Arq.
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {view === 'mockup' || !hasArch ? (
            <motion.div
              key="mockup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`relative overflow-hidden bg-gradient-to-br ${project.gradient}`}
              style={{ aspectRatio: '340/200' }}
            >
              <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
              <div className="absolute inset-0 p-2">
                <ProjectMockup mockupType={project.mockupType} accentColor={project.accentColor} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="arch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden bg-bg-base p-4"
              style={{ minHeight: '200px' }}
            >
              <ArchDiagram />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-text-primary text-base mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.shortDesc}
        </p>

        {/* Impact metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg bg-bg-elevated border border-bg-border">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-bold text-sm leading-tight mb-0.5"
                  style={{ color: project.accentColor }}>
                  {m.value}
                </div>
                <div className="text-text-muted text-[10px] leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Tecnologías">
          {project.stack.map((tech) => <TechBadge key={tech} tech={tech} />)}
        </div>

        {/* Expandable */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-bg-border pt-4 mb-4 space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">Problema que resolví</p>
                    <p className="text-text-secondary text-xs leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">Valor generado</p>
                    <p className="text-text-secondary text-xs leading-relaxed">{project.value}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">Funcionalidades</p>
                  <ul className="space-y-1.5" role="list">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary text-xs">
                        <CheckCircle2 size={11} className="flex-shrink-0 mt-0.5"
                          style={{ color: project.accentColor }} aria-hidden="true" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg px-3 py-2.5 bg-bg-elevated border border-bg-border">
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">Mi rol</p>
                  <p className="text-text-secondary text-xs">{project.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4 border-t border-bg-border flex items-center justify-between gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent-primary transition-colors focus-ring rounded font-mono"
            aria-expanded={expanded}
          >
            {expanded ? <><ChevronUp size={11} /> Menos</> : <><ChevronDown size={11} /> Detalles</>}
          </button>
          <div className="flex items-center gap-2">
            <CTAButton href={project.github} variant="ghost" size="sm" external
              aria-label={`Código de ${project.title}`}>
              <Github size={11} /> Código
            </CTAButton>
            <CTAButton href={project.demo} variant="secondary" size="sm" external
              aria-label={`Demo de ${project.title}`}>
              <ExternalLink size={11} /> Demo
            </CTAButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
