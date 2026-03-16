import { motion } from 'framer-motion';
import { Monitor, Server, Database, Wrench } from 'lucide-react';
import { SKILLS } from '../../data/portfolio';
import { SectionTitle } from '../ui';

const iconMap = { Monitor, Server, Database, Wrench };

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative" aria-label="Habilidades técnicas">
      {/* Subtle bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,255,178,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          label="Stack técnico"
          title="Tecnologías que domino"
          subtitle="Construyo sistemas completos combinando estas herramientas con criterio arquitectónico."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((group, groupIndex) => {
            const Icon = iconMap[group.icon] || Monitor;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                className="card-surface p-5 hover:border-accent-primary/20 transition-all duration-300 group flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-accent-glow border border-accent-primary/20 flex items-center justify-center group-hover:border-accent-primary/40 transition-all">
                    <Icon size={14} className="text-accent-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-sm">
                    {group.category}
                  </h3>
                </div>

                {/* Skills list */}
                <ul className="flex flex-col gap-2.5 flex-1" role="list">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: groupIndex * 0.1 + skillIndex * 0.04, duration: 0.3 }}
                      className="flex items-center gap-2.5 group/item"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent-primary/40 group-hover/item:bg-accent-primary transition-colors flex-shrink-0" aria-hidden="true" />
                      <span className="text-text-secondary text-xs font-body leading-tight group-hover/item:text-text-primary transition-colors">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Extra visual row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 card-surface p-6 flex flex-wrap gap-3 items-center justify-center"
        >
          <span className="text-text-muted text-xs font-mono mr-2">También trabajo con:</span>
          {['REST APIs', 'JWT Auth', 'ORM', 'Git Flow', 'Postman', 'VS Code', 'Vite', 'Excel VBA', 'Python', 'SQL Avanzado', 'Framer Motion', 'Zod'].map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-bg-elevated border border-bg-border text-text-secondary hover:border-accent-primary/30 hover:text-accent-primary transition-all duration-200"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
