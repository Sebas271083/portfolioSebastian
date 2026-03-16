// Blog articles — contenido mixto: técnico + profesional
// Reemplazar con artículos reales cuando estén escritos
// Formato soportado: Markdown en /public/blog/ o CMS externo (Notion, Dev.to, Hashnode)

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "como-modelar-sistema-turnos-sin-doble-booking",
    title: "Cómo modelar un sistema de turnos que garantice cero superposiciones",
    excerpt: "El problema del doble-booking no es solo de UI — es un problema de base de datos. Acá explico la lógica de bloqueo y validación que implementé en producción.",
    category: "Técnico",
    tags: ["MySQL", "Node.js", "Arquitectura"],
    readTime: "7 min",
    date: "2024-11-12",
    featured: true,
    emoji: "🗓",
  },
  {
    id: 2,
    slug: "jwt-vs-sessions-en-sistemas-de-negocio",
    title: "JWT vs Sesiones: cuándo usar cada uno en sistemas reales",
    excerpt: "No hay una respuesta universal. Después de implementar ambos en diferentes proyectos, acá están mis criterios para elegir según el contexto.",
    category: "Técnico",
    tags: ["Seguridad", "Auth", "Backend"],
    readTime: "5 min",
    date: "2024-10-03",
    featured: true,
    emoji: "🔐",
  },
  {
    id: 3,
    slug: "lo-que-aprendi-construyendo-para-clientes-reales",
    title: "Lo que aprendí construyendo sistemas para negocios reales",
    excerpt: "Los proyectos de clientes te enseñan cosas que ningún tutorial cubre: cómo gestionar expectativas, entregar en plazos y hacer que el sistema sea adoptado.",
    category: "Profesional",
    tags: ["Freelance", "Clientes", "Proceso"],
    readTime: "6 min",
    date: "2024-09-15",
    featured: false,
    emoji: "💡",
  },
  {
    id: 4,
    slug: "estructura-express-que-escala",
    title: "La estructura de Express.js que uso en todos mis proyectos",
    excerpt: "Después de varios proyectos con arquitecturas distintas, encontré un patrón que me funciona: cómo organizo rutas, middlewares, servicios y modelos.",
    category: "Técnico",
    tags: ["Node.js", "Express", "Arquitectura"],
    readTime: "8 min",
    date: "2024-08-20",
    featured: false,
    emoji: "🏗",
  },
  {
    id: 5,
    slug: "de-excel-a-sistema-web-cuando-tiene-sentido",
    title: "De Excel a sistema web: cuándo el salto tiene sentido",
    excerpt: "Excel no es el enemigo. Pero hay señales claras de cuándo un negocio necesita algo más. Las aprendí trabajando con clientes reales.",
    category: "Profesional",
    tags: ["Negocio", "Producto", "Decisiones"],
    readTime: "4 min",
    date: "2024-07-08",
    featured: false,
    emoji: "📊",
  },
];

export const BLOG_CATEGORIES = ["Todos", "Técnico", "Profesional"];
