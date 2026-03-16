import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/portfolio';
import { SectionTitle } from '../ui';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);
  const visible = showAll ? PROJECTS : featured;

  return (
    <section id="projects" className="section-padding relative" aria-label="Proyectos destacados">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Proyectos"
          title="Sistemas que construí para clientes reales"
          subtitle="Cada proyecto resuelve un problema operativo concreto. No son demos ni ejercicios — son sistemas que están en uso."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {(showAll || !showAll) && (
          <motion.div
            initial={false}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: showAll ? 1 : 0, scale: showAll ? 1 : 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{ display: showAll ? 'block' : 'none' }}
              >
                <ProjectCard project={project} index={i + featured.length} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Show more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-lg border border-bg-border text-text-secondary hover:border-accent-primary/30 hover:text-accent-primary transition-all duration-200 font-mono text-sm focus-ring"
          >
            {showAll ? `Mostrar menos` : `Ver todos los proyectos (${rest.length} más)`}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
