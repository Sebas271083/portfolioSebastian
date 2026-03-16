import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolio';

export default function TestimonialSection() {
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;

  return (
    <section aria-label="Testimonio de cliente" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="h-px w-full mb-12"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,71,0.2), transparent)' }}
          aria-hidden="true"
        />

        {TESTIMONIALS.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Quote mark decorative */}
            <div
              className="absolute -top-4 -left-2 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(212,168,71,0.1)', border: '1px solid rgba(212,168,71,0.2)' }}
              aria-hidden="true"
            >
              <Quote size={16} className="text-accent-primary" />
            </div>

            <blockquote
              className="card-surface p-8 pl-10 border-l-2 ml-4"
              style={{ borderLeftColor: 'rgba(212,168,71,0.4)' }}
            >
              <p className="text-text-primary text-lg leading-relaxed font-body italic mb-6">
                "{t.quote}"
              </p>
              <footer className="flex items-center gap-3">
                {/* Initials avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-display font-bold flex-shrink-0"
                  style={{ background: 'rgba(212,168,71,0.15)', border: '1px solid rgba(212,168,71,0.3)', color: '#D4A847' }}
                  aria-hidden="true"
                >
                  {t.author.split(' ').map(w => w[0]).join('')}
                </div>
                <div>
                  <cite className="font-display font-semibold text-text-primary text-sm not-italic">
                    {t.author}
                  </cite>
                  <p className="text-text-muted text-xs mt-0.5">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        ))}

        <div
          className="h-px w-full mt-12"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,71,0.2), transparent)' }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
