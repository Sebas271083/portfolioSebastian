import { motion } from 'framer-motion';
import { Briefcase, Code2, BookOpen } from 'lucide-react';
import { EXPERIENCE } from '../../data/portfolio';
import { SectionTitle, Badge, TechBadge } from '../ui';

const typeConfig = {
  Freelance: { icon: Briefcase, color: '#00FFB2', label: 'Freelance' },
  Proyecto: { icon: Code2, color: '#00C9FF', label: 'Proyecto' },
  Formación: { icon: BookOpen, color: '#A855F7', label: 'Formación' },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative" aria-label="Experiencia profesional">
      {/* bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 0% 50%, rgba(0,255,178,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          label="Experiencia"
          title="Trayectoria profesional"
          subtitle="Proyectos y roles donde apliqué y desarrollé mis habilidades de manera real."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/30 via-bg-border to-transparent hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => {
              const config = typeConfig[exp.type] || typeConfig.Proyecto;
              const Icon = config.icon;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2.5 top-6 w-5 h-5 rounded-full border-2 border-bg-base flex items-center justify-center -translate-x-1/2 hidden md:flex"
                    style={{ backgroundColor: config.color + '30', borderColor: config.color + '60' }}
                    aria-hidden="true"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: config.color }} />
                  </div>

                  {/* Card */}
                  <div className="card-surface p-6 hover:border-accent-primary/20 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: config.color + '15', border: `1px solid ${config.color}30` }}
                        >
                          <Icon size={15} style={{ color: config.color }} aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-text-primary mb-0.5">
                            {exp.role}
                          </h3>
                          <p className="text-text-secondary text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge variant="subtle">{exp.period}</Badge>
                        <Badge
                          className="hidden sm:inline-flex"
                          style={{ color: config.color, borderColor: config.color + '30', backgroundColor: config.color + '10' }}
                        >
                          {config.label}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4" role="list">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-text-secondary text-xs">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: config.color }}
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-bg-border" role="list" aria-label="Tecnologías usadas">
                      {exp.tech.map((t) => (
                        <TechBadge key={t} tech={t} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
