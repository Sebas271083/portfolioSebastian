// ============================================================
// DATOS DEL PORTFOLIO — Reemplazar con información real
// ============================================================

export const PERSONAL_INFO = {
  name: "Sebastian Delgado",
  title: "Full Stack Developer",
  tagline: "Construyo sistemas web completos que resuelven problemas reales.",
  bio: "Soy un desarrollador Full Stack con experiencia en el diseño y construcción de sistemas web completos, desde la arquitectura de base de datos hasta interfaces de usuario modernas. Me especializo en crear soluciones escalables para negocios reales, combinando criterio técnico con visión de producto.",
  location: "Argentina",
  available: true,
  email: "sebdelgado83@email.com",
  linkedin: "https://linkedin.com/in/sebastian--delgado",
  github: "https://github.com/Sebas271083",
  stats: [
    { value: "5+", label: "Proyectos entregados" },
    { value: "3+", label: "Años de experiencia" },
    { value: "10+", label: "Tecnologías dominadas" },
    { value: "100%", label: "Orientado a resultados" },
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
    shortDesc: "Sistema integral para clínicas veterinarias con gestión completa de operaciones.",
    description: "Plataforma completa para la operación diaria de clínicas veterinarias. Resuelve el caos operativo de clínicas que gestionaban clientes, mascotas, turnos y tratamientos en papel o en hojas de cálculo dispersas. El sistema centraliza toda la operación clínica en una sola interfaz, reduciendo errores, mejorando la trazabilidad y optimizando los tiempos del personal.",
    problem: "Las clínicas veterinarias perdían información crítica de pacientes, tenían doble-booking de turnos y no podían hacer seguimiento efectivo de tratamientos activos.",
    value: "Centralización total de la operación clínica, eliminación de errores de doble turno, acceso instantáneo a historia clínica completa por mascota.",
    features: [
      "Gestión de clientes y mascotas con historia clínica completa",
      "Sistema de turnos con control de disponibilidad y prevención de superposición",
      "Módulo de internaciones con seguimiento en tiempo real",
      "Farmacia integrada con control de stock",
      "Recordatorios automáticos para vacunas y controles",
      "Panel administrativo con métricas clave",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT"],
    role: "Desarrollador Full Stack — Arquitectura, backend, base de datos y frontend",
    demo: "#",
    github: "#",
    featured: true,
    gradient: "from-amber-500/10 to-yellow-500/10",
    accentColor: "#D4A847",
  },
  {
    id: 2,
    title: "Sistema POS para Restaurantes",
    shortDesc: "Solución integral de punto de venta para gestión operativa de restaurantes.",
    description: "Sistema POS pensado para mejorar la eficiencia operativa de restaurantes y bares. Reemplaza procesos manuales y comunicación verbal entre sala y cocina por un flujo digital que reduce errores, acelera tiempos de atención y da visibilidad completa al dueño sobre el estado del negocio en tiempo real.",
    problem: "Los restaurantes perdían pedidos por errores de comunicación, no tenían visibilidad del estado de mesas y el control de caja era propenso a errores.",
    value: "Reducción de errores en pedidos, mejor comunicación sala-cocina, control de caja confiable y métricas de negocio disponibles al instante.",
    features: [
      "Gestión visual de mesas con estado en tiempo real",
      "Sistema de pedidos integrado con vista de cocina",
      "Gestión de caja y cierre diario automatizado",
      "Control de stock e ingredientes",
      "Reportes de ventas y productos más pedidos",
      "Soporte para múltiples usuarios con roles",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "CSS3"],
    role: "Desarrollador Full Stack — Sistema completo desde cero",
    demo: "#",
    github: "#",
    featured: true,
    gradient: "from-orange-500/10 to-amber-500/10",
    accentColor: "#C8923A",
  },
  {
    id: 3,
    title: "Plataforma de Turnos Online",
    shortDesc: "Sistema de reservas inteligente con agenda por profesional y control de disponibilidad.",
    description: "Plataforma de gestión de turnos orientada a profesionales independientes y consultorios. Permite a los pacientes o clientes reservar turnos en línea con disponibilidad en tiempo real, eliminando llamadas telefónicas y el riesgo de superposición. Incluye panel administrativo completo para gestionar agendas, cancelaciones y reportes.",
    problem: "Profesionales independientes y consultorios invertían horas semanales gestionando agendas manualmente, con frecuentes errores de doble booking.",
    value: "Ahorro de tiempo en gestión administrativa, cero superposición de turnos, mejor experiencia para el paciente/cliente y datos de ocupación disponibles.",
    features: [
      "Reserva de turnos con disponibilidad en tiempo real",
      "Agenda por profesional con configuración de horarios",
      "Panel administrativo con vista de calendario",
      "Prevención automática de superposición de turnos",
      "Cancelación y reprogramación con notificaciones",
      "Historial completo de turnos por cliente",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT"],
    role: "Desarrollador Full Stack — Diseño de arquitectura, backend y UI",
    demo: "#",
    github: "#",
    featured: false,
    gradient: "from-amber-500/10 to-stone-500/10",
    accentColor: "#D4A847",
  },
  {
    id: 4,
    title: "Dashboard Financiero en Excel VBA",
    shortDesc: "Herramienta de análisis financiero con dashboards interactivos y reportes automáticos.",
    description: "Suite financiera desarrollada en Excel con VBA para una empresa que necesitaba análisis financiero avanzado sin invertir en software costoso. La solución permite visualizar KPIs, comparar períodos, generar reportes en PDF automáticamente y detectar desvíos de presupuesto con alertas visuales.",
    problem: "La empresa generaba reportes financieros manualmente cada mes, proceso que tomaba días y era propenso a errores de fórmulas.",
    value: "Generación de reportes automática en minutos, alertas de desvíos en tiempo real, dashboards ejecutivos listos para presentar sin esfuerzo manual.",
    features: [
      "Dashboard ejecutivo con KPIs y métricas clave",
      "Comparación de períodos con variaciones automáticas",
      "Exportación de reportes a PDF con un click",
      "Alertas visuales de desvíos presupuestarios",
      "Actualización automática de datos por rango de fechas",
      "Gráficos dinámicos conectados a tablas de datos",
    ],
    stack: ["Excel VBA", "Macros", "Power Query", "Gráficos Dinámicos"],
    role: "Desarrollador y consultor — Diseño, desarrollo y capacitación de usuarios",
    demo: "#",
    github: "#",
    featured: false,
    gradient: "from-yellow-500/10 to-amber-500/10",
    accentColor: "#B8860B",
  },
  {
    id: 5,
    title: "Sistema de Gestión 3D Print",
    shortDesc: "Sistema operativo completo para servicios de impresión 3D.",
    description: "Plataforma diseñada para servicios de impresión 3D que necesitaban organizar su flujo de trabajo desde la recepción de modelos hasta la entrega. El sistema permite cargar archivos STL, gestionar pedidos por estado, calcular costos y llevar registro de clientes y materiales utilizados.",
    problem: "Los servicios de impresión 3D gestionaban pedidos por WhatsApp y hojas de cálculo, perdiendo trazabilidad y generando confusión en el flujo de trabajo.",
    value: "Flujo de trabajo digitalizado, trazabilidad completa de pedidos, estimación de costos automatizada y mejor comunicación con clientes.",
    features: [
      "Carga y gestión de modelos STL",
      "Pipeline de pedidos con estados personalizables",
      "Estimación de costos por material y tiempo",
      "Panel de administración con vista Kanban",
      "Historial de clientes y pedidos previos",
      "Reportes de producción y facturación",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "Tailwind"],
    role: "Desarrollador Full Stack — Sistema completo end-to-end",
    demo: "#",
    github: "#",
    featured: false,
    gradient: "from-stone-500/10 to-amber-500/10",
    accentColor: "#A07830",
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Desarrollador Full Stack Freelance",
    company: "Independiente",
    period: "2022 — Presente",
    type: "Freelance",
    description: "Diseño y desarrollo de sistemas web completos para clientes de distintos sectores: salud, gastronomía, servicios profesionales y manufactura. Responsable de toda la cadena de desarrollo: relevamiento de necesidades, arquitectura, backend, frontend, base de datos y despliegue.",
    highlights: [
      "Desarrollo de 5+ sistemas web completos para distintos rubros",
      "Arquitectura de bases de datos relacionales con MySQL y SQL Server",
      "Implementación de APIs REST con autenticación JWT",
      "Construcción de paneles administrativos con React",
    ],
    tech: ["React", "Node.js", "MySQL", "Express", "JWT", "Tailwind"]
  },
  {
    id: 2,
    role: "Desarrollador de Automatizaciones y Análisis",
    company: "Consultoría Financiera (Proyecto)",
    period: "2021 — 2022",
    type: "Proyecto",
    description: "Desarrollo de herramientas en Excel VBA para automatización de reportes financieros y dashboards ejecutivos. Reducción significativa del tiempo dedicado a tareas manuales de consolidación de datos.",
    highlights: [
      "Reducción del tiempo de reportes de días a minutos",
      "Desarrollo de dashboards ejecutivos interactivos",
      "Capacitación de usuarios finales",
    ],
    tech: ["Excel VBA", "Power Query", "Macros", "Python"]
  },
  {
    id: 3,
    role: "Formación y Proyectos de Práctica",
    company: "Autoformación",
    period: "2020 — 2022",
    type: "Formación",
    description: "Período intensivo de formación en desarrollo web Full Stack. Completé cursos de IBM, Google y plataformas especializadas. Desarrollé proyectos de práctica progresivamente más complejos que culminaron en proyectos reales para clientes.",
    highlights: [
      "Certificaciones IBM Generative AI y Google Data Analytics",
      "Desarrollo de proyectos propios de práctica completos",
      "Contribuciones a proyectos open source en GitHub",
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
    description: "Integración de modelos de IA generativa en aplicaciones de software. LLMs, prompting avanzado y casos de uso en desarrollo.",
    icon: "Brain",
    color: "#D4A847"
  },
  {
    id: 2,
    title: "Google Data Analytics Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    description: "Análisis de datos, visualización, SQL avanzado y herramientas Google para analítica profesional.",
    icon: "BarChart3",
    color: "#C8923A"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "Plataforma especializada",
    year: "2022",
    description: "Desarrollo completo con React, Node.js, Express y bases de datos relacionales. Proyectos prácticos end-to-end.",
    icon: "Code2",
    color: "#B8860B"
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2022",
    description: "Fundamentos avanzados de JavaScript, algoritmos, estructuras de datos y programación funcional.",
    icon: "Zap",
    color: "#F0C060"
  }
];

export const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Contacto", href: "#contact" },
];
