// ============================================================
// DATOS DEL PORTFOLIO — Reemplazar con tu información real
// ============================================================

export const PERSONAL_INFO = {
  name: "Sebastián Delgado",
  title: "Full Stack Developer",
  tagline: "Construyo sistemas web completos que resuelven problemas reales de negocio.",

  valueProp: "Soy de los pocos devs que entiende tanto la arquitectura técnica como el problema de negocio detrás. No entrego código — entrego sistemas que funcionan el día uno.",

  bio: "Desarrollador Full Stack con más de 3 años construyendo sistemas web para clientes reales en Argentina. Me especializo en digitalizar operaciones de negocios: clínicas, restaurantes, servicios profesionales. Trabajo solo o en equipo, de la base de datos a la UI, con criterio técnico y foco en el resultado.",

  location: "Argentina",
  available: true,
  openToWork: {
    roles: ["Full Stack Developer", "Backend Developer", "Node.js Developer"],
    modality: "Remoto · Híbrido · Presencial CABA/GBA",
    availability: "Disponible inmediatamente",
  },

  email: "sebastian.delgado@email.com",
  linkedin: "https://linkedin.com/in/sdelgado",
  github: "https://github.com/sdelgado",
  cvUrl: "/cv-sebastian.delgado.pdf",

  stats: [
    { value: "5+", label: "Sistemas entregados" },
    { value: "3+", label: "Años construyendo" },
    { value: "0", label: "Proyectos abandonados" },
    { value: "100%", label: "Clientes satisfechos" },
  ]
};

export const SKILLS = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: ["React", "JavaScript (ES6+)", "HTML5 Semántico", "CSS3 / Tailwind CSS", "Vite", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "APIs REST", "JWT / Auth", "Middlewares", "Validaciones Zod"]
  },
  {
    category: "Bases de Datos",
    icon: "Database",
    skills: ["MySQL", "SQL Server", "Sequelize ORM", "Diseño Relacional", "Consultas Avanzadas", "Migraciones"]
  },
  {
    category: "Herramientas & Más",
    icon: "Wrench",
    skills: ["Git / GitHub", "Python", "Excel VBA", "Integración IA", "Arquitectura de Sistemas", "Despliegues"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Sistema de Gestión Veterinaria",
    shortDesc: "Eliminó el 100% de los doble-bookings y centralizó la operación completa de una clínica.",
    description: "Una clínica veterinaria con 3 profesionales gestionaba turnos, historia clínica, stock de farmacia y recordatorios de vacunas en papel y hojas de cálculo separadas. El resultado: turnos superpuestos, historias clínicas incompletas y tiempo del personal perdido en tareas administrativas. Construí un sistema integral que centraliza toda la operación en una sola interfaz web, accesible desde cualquier dispositivo.",
    problem: "Doble-booking semanal, historial de pacientes fragmentado y sin control real de stock de farmacia ni de internaciones activas.",
    value: "0 superposiciones de turno desde el deploy · Tiempo de búsqueda de historia clínica: de 5 minutos a segundos · Stock de farmacia siempre actualizado.",
    metrics: [
      { label: "Doble-bookings", value: "−100%" },
      { label: "Módulos integrados", value: "6" },
      { label: "Consulta historia clínica", value: "−95%" },
    ],
    features: [
      "Historia clínica completa por mascota, con acceso instantáneo",
      "Sistema de turnos con prevención automática de superposición",
      "Módulo de internaciones con estado en tiempo real",
      "Farmacia integrada con alertas de stock bajo",
      "Recordatorios automáticos de vacunas y controles",
      "Panel administrativo con métricas de ocupación",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT"],
    role: "Desarrollador Full Stack — Relevamiento, arquitectura, backend, base de datos y frontend",
    demo: "#",
    github: "#",
    featured: true,
    mockupType: "veterinary",
    gradient: "from-emerald-500/10 to-green-500/10",
    accentColor: "#4ADE80",
  },
  {
    id: 2,
    title: "Sistema POS para Restaurantes",
    shortDesc: "Digitalizó sala, cocina y caja de un restaurante en un solo flujo en tiempo real.",
    description: "Un restaurante de 12 mesas operaba con comandas en papel y comunicación verbal entre sala y cocina, generando pedidos perdidos, errores de cuenta y cierres de caja inconsistentes. Diseñé e implementé un POS web que reemplaza todo ese flujo por un sistema digital en tiempo real, accesible desde tablets en sala y pantalla fija en cocina.",
    problem: "Pedidos perdidos por errores verbales, cierres de caja con diferencias manuales y sin visibilidad de stock ni ventas por ítem.",
    value: "Errores de pedido reducidos a cero · Cierre de caja automatizado · Reportes de ventas al instante para el dueño.",
    metrics: [
      { label: "Errores de pedido", value: "−100%" },
      { label: "Tiempo cierre de caja", value: "−80%" },
      { label: "Visibilidad de ventas", value: "Tiempo real" },
    ],
    features: [
      "Mapa de mesas con estado visual en tiempo real",
      "Pedidos sincronizados instantáneamente con cocina",
      "Caja y cierre diario automatizado",
      "Control de stock e ingredientes por plato",
      "Reporte de ventas por ítem, turno y fecha",
      "Roles diferenciados: mozo, cocina, cajero, admin",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "CSS3"],
    role: "Desarrollador Full Stack — Sistema completo desde cero, incluyendo capacitación",
    demo: "#",
    github: "#",
    featured: true,
    mockupType: "pos",
    gradient: "from-teal-500/10 to-emerald-500/10",
    accentColor: "#34D399",
  },
  {
    id: 3,
    title: "Plataforma de Turnos Online",
    shortDesc: "Automatizó la agenda de 3 profesionales y liberó ~8 horas semanales de gestión manual.",
    description: "Un consultorio con 3 profesionales recibía reservas exclusivamente por teléfono, invirtiendo horas semanales en gestión manual con riesgo constante de superposición. La plataforma permite a los pacientes reservar online con disponibilidad en tiempo real, mientras los profesionales gestionan su agenda desde un panel completo.",
    problem: "2–3 horas semanales por profesional gestionando agendas por teléfono, con doble-bookings frecuentes y sin historial de asistencia.",
    value: "Reservas automáticas 24/7 · 0 superposiciones · ~8 horas semanales liberadas en administración.",
    metrics: [
      { label: "Horas admin ahorradas/sem", value: "~8hs" },
      { label: "Disponibilidad de reservas", value: "24/7" },
      { label: "Superposiciones de turno", value: "0" },
    ],
    features: [
      "Reserva online con disponibilidad en tiempo real por profesional",
      "Panel administrativo con vista semanal y mensual",
      "Configuración de horarios y bloqueos por profesional",
      "Cancelación y reprogramación con historial",
      "Métricas de ocupación y tasa de ausentismo",
      "Roles: admin, profesional, recepcionista",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT"],
    role: "Desarrollador Full Stack — Arquitectura del sistema, backend y UI",
    demo: "#",
    github: "#",
    featured: false,
    mockupType: "turnos",
    gradient: "from-green-500/10 to-emerald-500/10",
    accentColor: "#4ADE80",
  },
  {
    id: 4,
    title: "Dashboard Financiero en Excel VBA",
    shortDesc: "Redujo la generación de reportes mensuales de 2 días de trabajo a menos de 5 minutos.",
    description: "Una empresa de servicios generaba reportes financieros mensuales manualmente: extraer datos, consolidar en Excel, construir gráficos y exportar a PDF. Proceso de 2 días completos, propenso a errores. Automaticé todo el flujo con VBA: un botón genera el reporte completo con gráficos, alertas de desvío y exportación.",
    problem: "2 días de trabajo manual mensual para consolidar reportes, con errores de fórmulas frecuentes y formatos inconsistentes.",
    value: "Reportes en menos de 5 minutos · Cero errores de fórmulas · Alertas automáticas de desvíos vs presupuesto.",
    metrics: [
      { label: "Tiempo de reporte", value: "2d → 5min" },
      { label: "Ahorro mensual", value: "~16hs" },
      { label: "Errores de fórmula", value: "−100%" },
    ],
    features: [
      "Dashboard ejecutivo actualizable con un click",
      "Comparación automática real vs presupuesto por período",
      "Alertas visuales de desvíos sobre umbral configurable",
      "Exportación a PDF lista para presentar",
      "Gráficos dinámicos conectados a datos fuente",
      "Macros de limpieza y normalización de datos",
    ],
    stack: ["Excel VBA", "Macros", "Power Query", "Gráficos Dinámicos"],
    role: "Desarrollador y consultor — Diseño completo + capacitación al equipo usuario",
    demo: "#",
    github: "#",
    featured: false,
    mockupType: "excel",
    gradient: "from-emerald-400/10 to-teal-400/10",
    accentColor: "#6EE7B7",
  },
  {
    id: 5,
    title: "Sistema de Gestión 3D Print",
    shortDesc: "Reemplazó WhatsApp + hojas de cálculo con un pipeline digital de pedidos sin pérdidas.",
    description: "Un servicio de impresión 3D recibía pedidos por WhatsApp, los anotaba en hojas de cálculo y perdía trazabilidad constantemente. Pedidos olvidados, materiales mal calculados y clientes sin información de estado. Diseñé un sistema que digitaliza todo el flujo desde la carga del archivo hasta la entrega.",
    problem: "Pedidos sin trazabilidad, estimaciones de costo manuales y clientes sin visibilidad del estado de su pedido.",
    value: "Pipeline digitalizado · Estimación de costos automática · 0 pedidos perdidos desde el deploy.",
    metrics: [
      { label: "Pedidos perdidos", value: "0 desde deploy" },
      { label: "Estimación de costo", value: "Automática" },
      { label: "Visibilidad cliente", value: "Tiempo real" },
    ],
    features: [
      "Carga y gestión de modelos STL",
      "Pipeline Kanban con estados personalizables",
      "Estimación automática de costos por material y tiempo",
      "Panel admin con métricas de producción",
      "Portal de seguimiento para clientes",
      "Historial completo por cliente y modelo",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "Tailwind"],
    role: "Desarrollador Full Stack — Sistema completo end-to-end",
    demo: "#",
    github: "#",
    featured: false,
    mockupType: "print3d",
    gradient: "from-teal-600/10 to-green-600/10",
    accentColor: "#86EFAC",
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Alex entregó el sistema completo en el plazo acordado y funcionó desde el primer día sin problemas. Lo que más nos sorprendió fue que entendió exactamente lo que necesitábamos sin que tuviéramos que explicarlo dos veces.",
    author: "M. González",
    role: "Directora, Clínica Veterinaria",
    projectId: 1,
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Desarrollador Full Stack Freelance",
    company: "Independiente",
    period: "2022 — Presente",
    type: "Freelance",
    description: "Diseño y desarrollo de sistemas web completos para clientes en Argentina. Cubro toda la cadena: relevamiento, arquitectura, backend, frontend, base de datos y despliegue. Cada proyecto fue entregado en plazo y funcionando en producción.",
    highlights: [
      "5 sistemas web completos entregados y en producción",
      "Sectores: salud, gastronomía, servicios profesionales y manufactura",
      "Reducción documentada de horas de trabajo administrativo en cada cliente",
      "Arquitectura de bases de datos relacionales con MySQL y SQL Server",
    ],
    tech: ["React", "Node.js", "MySQL", "Express", "JWT", "Tailwind"]
  },
  {
    id: 2,
    role: "Desarrollador de Automatizaciones y Análisis",
    company: "Consultoría Financiera (Proyecto)",
    period: "2021 — 2022",
    type: "Proyecto",
    description: "Automatización de reportes financieros y dashboards ejecutivos en Excel VBA. Reduje el tiempo de generación de reportes mensuales de 2 días a menos de 5 minutos.",
    highlights: [
      "Reducción de reportes mensuales: de 2 días a menos de 5 minutos",
      "Dashboard ejecutivo con comparación automática real vs presupuesto",
      "Capacitación completa al equipo — adopción sin fricción",
    ],
    tech: ["Excel VBA", "Power Query", "Macros", "Python"]
  },
  {
    id: 3,
    role: "Formación Intensiva Full Stack",
    company: "Autoformación + Proyectos propios",
    period: "2020 — 2022",
    type: "Formación",
    description: "Formación intensiva en desarrollo Full Stack combinando certificaciones (IBM, Google, freeCodeCamp) con proyectos propios de complejidad creciente que derivaron en los primeros clientes reales.",
    highlights: [
      "Certificaciones IBM Generative AI y Google Data Analytics",
      "Proyectos propios completos con backend, frontend y base de datos",
      "Transición directa a primeros clientes pagos al finalizar",
    ],
    tech: ["JavaScript", "Python", "React", "Node.js", "SQL"]
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "IBM Generative AI for Developers",
    issuer: "IBM / Coursera",
    year: "2024",
    description: "Integración de modelos de IA generativa en aplicaciones. LLMs, prompting avanzado y casos de uso reales en desarrollo de software.",
    icon: "Brain",
    color: "#4ADE80"
  },
  {
    id: 2,
    title: "Google Data Analytics Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    description: "Análisis de datos, visualización, SQL avanzado y herramientas de analítica profesional con Google.",
    icon: "BarChart3",
    color: "#34D399"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "Plataforma especializada",
    year: "2022",
    description: "Desarrollo completo con React, Node.js, Express y bases de datos relacionales. Proyectos prácticos end-to-end.",
    icon: "Code2",
    color: "#6EE7B7"
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
    description: "Fundamentos avanzados de JavaScript, algoritmos, estructuras de datos y programación funcional.",
    icon: "Zap",
    color: "#A7F3D0"
  }
];

export const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contact" },
];
