import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';
import { SectionTitle, Badge } from '../ui';

const strengths = [
  {
    icon: Layers,
    title: "Sistemas Completos",
    desc: "Desarrollo end-to-end: desde el modelo de datos hasta la UI. Sin dependencias de terceros para lo que puedo construir yo.",
  },
  {
    icon: Code2,
    title: "Código Limpio",
    desc: "Arquitectura modular, código mantenible, convenciones claras. El código que entrego es escalable y fácil de iterar.",
  },
  {
    icon: Target,
    title: "Enfoque en Negocio",
    desc: "Pienso en términos de valor, no solo de líneas de código. Cada decisión técnica está alineada con el objetivo del proyecto.",
  },
  {
    icon: Zap,
    title: "Entrega Real",
    desc: "No hago demos que no funcionan. Construyo sistemas que resuelven problemas reales y que los usuarios pueden usar desde el día uno.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative" aria-label="Sobre mí">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Text */}
          <div>
            <SectionTitle
              label="Sobre mí"
              title="Desarrollador Full Stack con enfoque en sistemas reales"
              subtitle={PERSONAL_INFO.bio}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4 text-text-secondary leading-relaxed"
            >
              <p>
                Me apasiona construir sistemas que resuelvan <strong className="text-text-primary font-medium">problemas operativos concretos</strong> —
                paneles administrativos, plataformas de gestión, APIs robustas y flujos de trabajo digitalizados
                que reemplazan procesos manuales lentos o propensos a errores.
              </p>
              <p>
                Tengo experiencia en todo el stack: modelado relacional, APIs REST, autenticación segura,
                interfaces modernas y despliegue. Integro herramientas como IA cuando aporta valor real al sistema.
              </p>
              <p>
                Trabajo con un enfoque de <strong className="text-text-primary font-medium">producto</strong> —
                pienso en la experiencia del usuario, en la mantenibilidad del código y en que lo que entrego
                sea útil desde el primer día.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {['React', 'Node.js', 'MySQL', 'Express', 'JWT', 'Tailwind', 'Git'].map((tech) => (
                <Badge key={tech} variant="accent">{tech}</Badge>
              ))}
            </motion.div>
          </div>

          {/* Right: Strengths grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="card-surface p-5 hover:border-accent-primary/20 hover:bg-bg-elevated transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent-glow border border-accent-primary/20 flex items-center justify-center mb-4 group-hover:border-accent-primary/40 transition-all">
                  <item.icon size={16} className="text-accent-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="sm:col-span-2 card-surface p-5 border-accent-primary/20 bg-accent-glow/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent-primary animate-pulse" aria-hidden="true" />
                <div>
                  <p className="text-text-primary font-medium text-sm">
                    Disponible para proyectos y empleo
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">
                    Abierto a posiciones full-time, part-time o freelance. Tiempo de respuesta: mismo día.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
