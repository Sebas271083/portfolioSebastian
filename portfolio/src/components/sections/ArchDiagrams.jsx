// Diagramas de arquitectura SVG para proyectos featured
// Muestran al líder técnico que el dev piensa en sistemas

// ─── Veterinary System Architecture ──────────────────────────
export function VetArchDiagram() {
  const em = '#4ADE80';
  const em2 = '#34D399';
  const border = '#1A2E20';
  const surface = '#101810';
  const muted = '#3A5440';
  const textSec = '#7A9E84';
  const textPri = '#E8F5EC';

  return (
    <svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto" aria-label="Diagrama de arquitectura — Sistema Veterinario"
      role="img">
      <defs>
        <marker id="arr-vet" viewBox="0 0 10 10" refX="8" refY="5"
          markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke={em} strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* ── Layer labels ── */}
      <text x="12" y="52" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace"
        letterSpacing="2">CLIENTE</text>
      <text x="12" y="132" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace"
        letterSpacing="2">API / BACKEND</text>
      <text x="12" y="232" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace"
        letterSpacing="2">PERSISTENCIA</text>

      {/* ── Horizontal dividers ── */}
      <line x1="80" y1="60" x2="570" y2="60" stroke={border} strokeWidth="0.5" strokeDasharray="4 4"/>
      <line x1="80" y1="160" x2="570" y2="160" stroke={border} strokeWidth="0.5" strokeDasharray="4 4"/>

      {/* ── CLIENT LAYER ── */}
      {/* React SPA */}
      <rect x="90" y="22" width="110" height="48" rx="8" fill={surface} stroke={em} strokeWidth="0.8"/>
      <text x="145" y="40" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">React SPA</text>
      <text x="145" y="55" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">Vite · Tailwind CSS</text>

      {/* JWT Auth context */}
      <rect x="220" y="22" width="110" height="48" rx="8" fill={surface} stroke={border} strokeWidth="0.8"/>
      <text x="275" y="40" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">Auth Context</text>
      <text x="275" y="55" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">JWT · React Context</text>

      {/* ── API LAYER ── */}
      {/* Express API */}
      <rect x="90" y="78" width="120" height="52" rx="8" fill={surface} stroke={em} strokeWidth="0.8"/>
      <text x="150" y="98" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">Express API</text>
      <text x="150" y="113" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">REST · Middlewares</text>

      {/* Auth Middleware */}
      <rect x="230" y="78" width="100" height="52" rx="8" fill={surface} stroke={border} strokeWidth="0.8"/>
      <text x="280" y="98" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">Auth MW</text>
      <text x="280" y="113" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">JWT Verify</text>

      {/* Modules */}
      {[
        { label: 'Turnos', sub: 'anti-overlap logic', x: 350 },
        { label: 'Clínica', sub: 'historia + internaciones', x: 460 },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y="78" width="100" height="52" rx="8" fill={surface}
            stroke={border} strokeWidth="0.8"/>
          <text x={m.x + 50} y="98" fontSize="11" fill={textPri} textAnchor="middle"
            fontFamily="Inter, sans-serif" fontWeight="500">{m.label}</text>
          <text x={m.x + 50} y="113" fontSize="9" fill={textSec} textAnchor="middle"
            fontFamily="Inter, sans-serif">{m.sub}</text>
        </g>
      ))}

      {/* ── PERSISTENCE LAYER ── */}
      {[
        { label: 'MySQL', sub: 'Datos relacionales', x: 90, accent: true },
        { label: 'Sequelize ORM', sub: 'Modelos · Migraciones', x: 220, accent: false },
        { label: 'Farmacia DB', sub: 'Stock · Movimientos', x: 350, accent: false },
        { label: 'Recordatorios', sub: 'Scheduler jobs', x: 460, accent: false },
      ].map((db) => (
        <g key={db.label}>
          <rect x={db.x} y="178" width="110" height="48" rx="8" fill={surface}
            stroke={db.accent ? em2 : border} strokeWidth={db.accent ? '0.8' : '0.5'}/>
          <text x={db.x + 55} y="198" fontSize="11" fill={textPri} textAnchor="middle"
            fontFamily="Inter, sans-serif" fontWeight="500">{db.label}</text>
          <text x={db.x + 55} y="213" fontSize="9" fill={textSec} textAnchor="middle"
            fontFamily="Inter, sans-serif">{db.sub}</text>
        </g>
      ))}

      {/* ── Arrows: Client → API ── */}
      <line x1="145" y1="70" x2="150" y2="78" stroke={em} strokeWidth="1"
        markerEnd="url(#arr-vet)"/>
      <line x1="275" y1="70" x2="280" y2="78" stroke={border} strokeWidth="0.8"
        markerEnd="url(#arr-vet)" opacity="0.5"/>

      {/* ── Arrows: API → Persistence ── */}
      <line x1="150" y1="130" x2="145" y2="178" stroke={em} strokeWidth="1"
        markerEnd="url(#arr-vet)"/>
      <line x1="160" y1="130" x2="275" y2="178" stroke={border} strokeWidth="0.7"
        markerEnd="url(#arr-vet)" opacity="0.4"/>
      <line x1="360" y1="130" x2="390" y2="178" stroke={border} strokeWidth="0.7"
        markerEnd="url(#arr-vet)" opacity="0.4"/>

      {/* ── Auth flow arrow ── */}
      <path d="M330 104 L350 104" fill="none" stroke={border} strokeWidth="0.7"
        markerEnd="url(#arr-vet)" opacity="0.4"/>

      {/* ── Legend ── */}
      <rect x="90" y="262" width="8" height="8" rx="2" fill="none" stroke={em} strokeWidth="0.8"/>
      <text x="104" y="270" fontSize="9" fill={textSec} fontFamily="Inter, sans-serif">Capa principal</text>
      <rect x="190" y="262" width="8" height="8" rx="2" fill="none" stroke={border} strokeWidth="0.8"/>
      <text x="204" y="270" fontSize="9" fill={textSec} fontFamily="Inter, sans-serif">Módulo de soporte</text>
      <text x="90" y="288" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace">
        Node.js · Express · MySQL · Sequelize · JWT · React
      </text>
    </svg>
  );
}

// ─── POS System Architecture ──────────────────────────────────
export function POSArchDiagram() {
  const em = '#34D399';
  const em2 = '#4ADE80';
  const border = '#1A2E20';
  const surface = '#101810';
  const muted = '#3A5440';
  const textSec = '#7A9E84';
  const textPri = '#E8F5EC';

  return (
    <svg viewBox="0 0 580 310" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto" aria-label="Diagrama de arquitectura — Sistema POS"
      role="img">
      <defs>
        <marker id="arr-pos" viewBox="0 0 10 10" refX="8" refY="5"
          markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke={em} strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>

      {/* Layer labels */}
      <text x="12" y="48" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace"
        letterSpacing="2">CLIENTES</text>
      <text x="12" y="138" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace"
        letterSpacing="2">SERVIDOR</text>
      <text x="12" y="228" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace"
        letterSpacing="2">BASE DE DATOS</text>

      <line x1="80" y1="56" x2="570" y2="56" stroke={border} strokeWidth="0.5" strokeDasharray="4 4"/>
      <line x1="80" y1="152" x2="570" y2="152" stroke={border} strokeWidth="0.5" strokeDasharray="4 4"/>

      {/* CLIENT ROW — 4 clients */}
      {[
        { label: 'Sala (tablet)', sub: 'Pedidos · Mesas', x: 80 },
        { label: 'Cocina', sub: 'Vista de comandas', x: 205 },
        { label: 'Caja', sub: 'Pagos · Cierre', x: 330 },
        { label: 'Admin', sub: 'Reportes · Stock', x: 455 },
      ].map((c, i) => (
        <g key={c.label}>
          <rect x={c.x} y="16" width="112" height="44" rx="8" fill={surface}
            stroke={i === 0 ? em2 : border} strokeWidth={i === 0 ? '0.8' : '0.5'}/>
          <text x={c.x + 56} y="33" fontSize="10" fill={textPri} textAnchor="middle"
            fontFamily="Inter, sans-serif" fontWeight="500">{c.label}</text>
          <text x={c.x + 56} y="47" fontSize="9" fill={textSec} textAnchor="middle"
            fontFamily="Inter, sans-serif">{c.sub}</text>
        </g>
      ))}

      {/* SERVER ROW */}
      {/* Express API core */}
      <rect x="80" y="70" width="130" height="52" rx="8" fill={surface} stroke={em} strokeWidth="0.8"/>
      <text x="145" y="90" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">Express API</text>
      <text x="145" y="105" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">REST · Roles · JWT</text>

      {/* Real-time sync */}
      <rect x="230" y="70" width="120" height="52" rx="8" fill={surface} stroke={em} strokeWidth="0.8"/>
      <text x="290" y="90" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">Sync Layer</text>
      <text x="290" y="105" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">Pedidos en tiempo real</text>

      {/* Business Logic */}
      <rect x="370" y="70" width="100" height="52" rx="8" fill={surface} stroke={border} strokeWidth="0.5"/>
      <text x="420" y="90" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">Reglas</text>
      <text x="420" y="105" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">Caja · Stock · Roles</text>

      {/* Auth */}
      <rect x="480" y="70" width="90" height="52" rx="8" fill={surface} stroke={border} strokeWidth="0.5"/>
      <text x="525" y="90" fontSize="11" fill={textPri} textAnchor="middle"
        fontFamily="Inter, sans-serif" fontWeight="500">Auth</text>
      <text x="525" y="105" fontSize="9" fill={textSec} textAnchor="middle"
        fontFamily="Inter, sans-serif">JWT · Roles</text>

      {/* DB ROW */}
      {[
        { label: 'MySQL', sub: 'Datos core', x: 80, accent: true },
        { label: 'Mesas & Pedidos', sub: 'Estado en tiempo real', x: 210, accent: false },
        { label: 'Caja & Reportes', sub: 'Historial · Cierres', x: 340, accent: false },
        { label: 'Stock', sub: 'Ingredientes · Alertas', x: 460, accent: false },
      ].map((db) => (
        <g key={db.label}>
          <rect x={db.x} y="168" width="118" height="48" rx="8" fill={surface}
            stroke={db.accent ? em : border}
            strokeWidth={db.accent ? '0.8' : '0.5'}/>
          <text x={db.x + 59} y="188" fontSize="10" fill={textPri} textAnchor="middle"
            fontFamily="Inter, sans-serif" fontWeight="500">{db.label}</text>
          <text x={db.x + 59} y="203" fontSize="9" fill={textSec} textAnchor="middle"
            fontFamily="Inter, sans-serif">{db.sub}</text>
        </g>
      ))}

      {/* Arrows client → server */}
      {[136, 261, 386, 511].map((x, i) => (
        <line key={x} x1={x} y1="60" x2={i === 0 ? 145 : i === 1 ? 290 : i === 2 ? 420 : 525}
          y2="70" stroke={i <= 1 ? em : border} strokeWidth={i <= 1 ? '1' : '0.7'}
          markerEnd="url(#arr-pos)" opacity={i <= 1 ? 1 : 0.5}/>
      ))}

      {/* Arrows server → db */}
      <line x1="145" y1="122" x2="139" y2="168" stroke={em} strokeWidth="1"
        markerEnd="url(#arr-pos)"/>
      <line x1="290" y1="122" x2="269" y2="168" stroke={border} strokeWidth="0.7"
        markerEnd="url(#arr-pos)" opacity="0.5"/>
      <line x1="420" y1="122" x2="399" y2="168" stroke={border} strokeWidth="0.7"
        markerEnd="url(#arr-pos)" opacity="0.5"/>

      {/* Horizontal connector API → Sync */}
      <line x1="210" y1="96" x2="230" y2="96" stroke={em} strokeWidth="0.8"
        markerEnd="url(#arr-pos)"/>

      {/* Legend */}
      <rect x="80" y="252" width="8" height="8" rx="2" fill="none" stroke={em} strokeWidth="0.8"/>
      <text x="94" y="260" fontSize="9" fill={textSec} fontFamily="Inter, sans-serif">Flujo principal</text>
      <rect x="190" y="252" width="8" height="8" rx="2" fill="none" stroke={border} strokeWidth="0.5"/>
      <text x="204" y="260" fontSize="9" fill={textSec} fontFamily="Inter, sans-serif">Módulo secundario</text>
      <text x="80" y="278" fontSize="9" fill={muted} fontFamily="JetBrains Mono, monospace">
        React · Node.js · Express · MySQL · JWT · Sync en tiempo real
      </text>
    </svg>
  );
}
