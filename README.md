# Portfolio — Full Stack Developer

Portfolio profesional construido con React + Vite + Tailwind CSS + Framer Motion.

---

## Stack

- **React 18** — UI
- **Vite** — Bundler y dev server
- **Tailwind CSS** — Estilos utilitarios
- **Framer Motion** — Animaciones
- **React Hook Form + Zod** — Formulario de contacto con validación
- **EmailJS** — Envío de emails desde frontend

---

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## Configurar EmailJS (formulario de contacto)

1. Crear cuenta gratuita en [https://emailjs.com](https://emailjs.com)
2. Agregar un **servicio** de email (Gmail, Outlook, etc.)
3. Crear una **plantilla** con estas variables:
   - `{{from_name}}` — nombre del remitente
   - `{{from_email}}` — email del remitente
   - `{{subject}}` — asunto
   - `{{message}}` — mensaje
4. Abrir `src/components/sections/ContactSection.jsx`
5. Reemplazar en `EMAILJS_CONFIG`:

```js
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',   // Dashboard → Email Services → Service ID
  TEMPLATE_ID: 'template_xxxxxxx', // Dashboard → Email Templates → Template ID
  PUBLIC_KEY: 'xxxxxxxxxxx',       // Dashboard → Account → Public Key
};
```

---

## Personalizar contenido

Todo el contenido del portfolio está centralizado en:

```
src/data/portfolio.js
```

Modificar:
- `PERSONAL_INFO` — nombre, título, bio, links, stats
- `SKILLS` — tecnologías agrupadas
- `PROJECTS` — proyectos con descripción, stack, features
- `EXPERIENCE` — experiencia laboral
- `CERTIFICATIONS` — certificaciones
- `NAV_LINKS` — links del navbar

---

## Estructura del proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── index.jsx          # Badge, SectionTitle, CTAButton, TechBadge
│   │   └── ErrorBoundary.jsx  # Error boundary global
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── SkillsSection.jsx
│       ├── ProjectCard.jsx
│       ├── ProjectsSection.jsx
│       ├── ExperienceSection.jsx
│       ├── CertificationsSection.jsx
│       └── ContactSection.jsx
├── data/
│   └── portfolio.js           # Todo el contenido editable
├── App.jsx
├── main.jsx
└── index.css
```

---

## Despliegue recomendado

### Vercel (recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
```

---

## Seguridad implementada

- Validación de formulario con Zod (cliente)
- Sanitización de inputs via React Hook Form
- No se exponen API keys — las keys de EmailJS van solo en variables de entorno o en el cliente con scope limitado
- Links externos con `rel="noopener noreferrer"`
- Error boundary para prevenir pantallas rotas
- Mensajes de error sin información técnica interna
- Sin dependencias innecesarias

---

## Accesibilidad

- Semántica HTML correcta (section, nav, main, footer, article)
- Jerarquía de headings correcta (h1 → h2 → h3)
- Labels en todos los inputs del formulario
- aria-label en elementos sin texto visible
- Focus visible en todos los elementos interactivos
- Skip-to-content link
- Contraste de colores WCAG AA

---

## Licencia

Portfolio personal — uso libre para customización propia.
