import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../data/blog';
import { SectionTitle, Badge } from '../ui';

function ArticleCard({ post, index }) {
  const categoryColor = post.category === 'Técnico' ? '#4ADE80' : '#86EFAC';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="card-surface p-5 hover:border-accent-primary/20 transition-all duration-300 group flex flex-col gap-3"
      aria-label={`Artículo: ${post.title}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl leading-none" role="img" aria-hidden="true">{post.emoji}</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
            style={{ color: categoryColor, borderColor: categoryColor + '40', background: categoryColor + '10' }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-text-primary text-sm leading-snug group-hover:text-gradient transition-all line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-text-secondary text-xs leading-relaxed flex-1 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 text-[10px] font-mono text-text-muted border border-bg-border px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-bg-border">
        <div className="flex items-center gap-3 text-[10px] text-text-muted font-mono">
          <span className="flex items-center gap-1">
            <Clock size={9} aria-hidden="true" />
            {post.readTime}
          </span>
          <span>{new Date(post.date).toLocaleDateString('es-AR', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        </div>
        <a
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 text-[10px] font-mono text-text-muted hover:text-accent-primary transition-colors focus-ring rounded group/link"
          aria-label={`Leer: ${post.title}`}
        >
          Leer
          <ArrowRight size={9} className="group-hover/link:translate-x-0.5 transition-transform" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  const featured = BLOG_POSTS.filter(p => p.featured).slice(0, 2);
  const rest = filtered.filter(p => !p.featured || activeCategory !== 'Todos');

  return (
    <section id="blog" className="section-padding relative" aria-label="Blog y artículos">
      {/* Subtle bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 100% 50%, rgba(74,222,128,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionTitle
            label="Blog"
            title="Escribo sobre lo que construyo"
            subtitle="Artículos técnicos y reflexiones profesionales sobre desarrollo de sistemas reales."
          />

          {/* Category filter */}
          <div className="flex items-center gap-1.5 flex-shrink-0 pb-1" role="tablist" aria-label="Filtrar por categoría">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 focus-ring ${
                  activeCategory === cat
                    ? 'bg-accent-glow border border-accent-primary/30 text-accent-primary'
                    : 'text-text-muted border border-bg-border hover:text-text-secondary hover:border-bg-border/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured row — only on "Todos" */}
        <AnimatePresence mode="wait">
          {activeCategory === 'Todos' && (
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-6"
            >
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">
                Destacados
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {featured.map((post, i) => (
                  <ArticleCard key={post.id} post={post} index={i} />
                ))}
              </div>
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3">
                Más artículos
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Article grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {(activeCategory === 'Todos' ? rest : filtered).map((post, i) => (
              <ArticleCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA — coming soon note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 card-surface p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-accent-glow border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-lg" role="img" aria-label="escritura">✍️</span>
          </div>
          <div className="flex-1">
            <p className="text-text-primary text-sm font-medium mb-0.5">
              Artículos en progreso
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              Estoy documentando más aprendizajes de proyectos reales. Seguime en LinkedIn para enterarte cuando publique.
            </p>
          </div>
          <a
            href="https://linkedin.com/in/sdelgado"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-accent-primary/30 text-accent-primary text-xs font-mono hover:bg-accent-glow transition-all focus-ring flex-shrink-0"
          >
            Seguir en LinkedIn
            <ArrowRight size={11} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
