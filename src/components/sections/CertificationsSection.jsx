import { motion } from 'framer-motion';
import { Brain, BarChart3, Code2, Zap, Award } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolio';
import { SectionTitle } from '../ui';

const iconMap = { Brain, BarChart3, Code2, Zap, Award };

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative" aria-label="Certificaciones">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 100% 50%, rgba(0,201,255,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          label="Certificaciones"
          title="Formación continua y certificada"
          subtitle="Certificaciones de plataformas reconocidas que complementan mi experiencia práctica."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-surface p-5 hover:border-accent-primary/20 transition-all duration-300 group flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: cert.color + '15', border: `1px solid ${cert.color}30` }}
                >
                  <Icon size={18} style={{ color: cert.color }} aria-hidden="true" />
                </div>

                {/* Year badge */}
                <span
                  className="text-[10px] font-mono uppercase tracking-widest mb-2 block"
                  style={{ color: cert.color }}
                >
                  {cert.year}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-text-primary text-sm leading-snug mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-text-muted text-xs mb-3">{cert.issuer}</p>

                {/* Description */}
                <p className="text-text-secondary text-xs leading-relaxed flex-1">
                  {cert.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="h-0.5 w-8 rounded-full mt-4 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: cert.color + '40' }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Extra credibility row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 card-surface p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="w-12 h-12 rounded-xl bg-accent-glow border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
            <Award size={20} className="text-accent-primary" aria-hidden="true" />
          </div>
          <div>
            <p className="text-text-primary font-medium text-sm mb-1">
              Aprendizaje continuo como práctica profesional
            </p>
            <p className="text-text-muted text-xs leading-relaxed max-w-xl">
              Me mantengo actualizado en las tecnologías que uso a través de cursos, proyectos propios y experimentación
              con herramientas como IA generativa e integración con APIs modernas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
