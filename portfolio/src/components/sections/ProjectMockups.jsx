// Mockups ilustrativos SVG para cada tipo de proyecto
// Diseñados para comunicar visualmente el sistema sin screenshots reales

// ─── Veterinary Dashboard Mockup ─────────────────────────────
export function VeterinaryMockup({ accentColor = "#4ADE80" }) {
  const a = accentColor;
  return (
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Mockup sistema veterinario">
      {/* Window chrome */}
      <rect x="0" y="0" width="340" height="200" rx="8" fill="#0F0D07"/>
      <rect x="0" y="0" width="340" height="24" rx="8" fill="#16130A"/>
      <rect x="0" y="16" width="340" height="8" fill="#16130A"/>
      <circle cx="12" cy="12" r="4" fill="#2A2415"/>
      <circle cx="26" cy="12" r="4" fill="#2A2415"/>
      <circle cx="40" cy="12" r="4" fill="#2A2415"/>
      <rect x="60" y="7" width="180" height="10" rx="3" fill="#2A2415"/>

      {/* Sidebar */}
      <rect x="0" y="24" width="60" height="176" fill="#0A0800"/>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="8" y={36 + i * 28} width="44" height="20" rx="4"
          fill={i === 0 ? a + "30" : "#16130A"}
          stroke={i === 0 ? a + "60" : "none"} strokeWidth="0.5"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="12" y={43 + i * 28} width="24" height="6" rx="2" fill={i === 0 ? a : "#2A2415"}/>
      ))}

      {/* Main area */}
      {/* Stats row */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={72 + i * 90} y="32" width="80" height="40" rx="6" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
          <rect x={82 + i * 90} y="42" width="30" height="8" rx="2" fill={a} opacity="0.8"/>
          <rect x={82 + i * 90} y="54" width="50" height="5" rx="2" fill="#2A2415"/>
        </g>
      ))}

      {/* Patient list */}
      <rect x="72" y="82" width="256" height="110" rx="6" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
      <rect x="72" y="82" width="256" height="18" rx="6" fill="#0A0800"/>
      <rect x="72" y="90" width="256" height="10" fill="#0A0800"/>
      {["Paciente", "Propietario", "Próximo turno", "Estado"].map((col, i) => (
        <rect key={i} x={82 + i * 58} y="86" width={i === 0 ? 40 : 48} height="6" rx="2" fill="#2A2415"/>
      ))}
      {[0,1,2,3].map(row => (
        <g key={row}>
          <rect x="72" y={102 + row * 22} width="256" height="1" fill="#2A2415" opacity="0.5"/>
          <circle cx="84" cy={113 + row * 22} r="5" fill={a + "20"} stroke={a + "40"} strokeWidth="0.5"/>
          {[0,1,2].map(col => (
            <rect key={col} x={94 + col * 64} y={109 + row * 22} width={col === 2 ? 35 : 45} height="6" rx="2" fill="#2A2415"/>
          ))}
          <rect x={82 + 192} y={109 + row * 22} width="34" height="6" rx="3"
            fill={row === 0 ? a + "30" : row === 1 ? "#16130A" : "#16130A"}
            stroke={row === 0 ? a + "50" : "#2A2415"} strokeWidth="0.5"/>
        </g>
      ))}
    </svg>
  );
}

// ─── POS Restaurant Mockup ────────────────────────────────────
export function POSMockup({ accentColor = "#34D399" }) {
  const a = accentColor;
  const tableStates = ["#4ADE80","#4ADE80","#1A2E20","#34D399","#1A2E20","#4ADE80","#1A2E20","#1A2E20","#34D399","#1A2E20","#4ADE80","#34D399"];
  return (
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Mockup sistema POS restaurante">
      <rect x="0" y="0" width="340" height="200" rx="8" fill="#0F0D07"/>
      <rect x="0" y="0" width="340" height="24" rx="8" fill="#16130A"/>
      <rect x="0" y="16" width="340" height="8" fill="#16130A"/>
      <circle cx="12" cy="12" r="4" fill="#2A2415"/>
      <circle cx="26" cy="12" r="4" fill="#2A2415"/>
      <circle cx="40" cy="12" r="4" fill="#2A2415"/>
      <rect x="120" y="7" width="100" height="10" rx="3" fill="#2A2415"/>

      {/* Tables grid label */}
      <rect x="8" y="28" width="60" height="12" rx="3" fill={a + "20"} />
      <rect x="12" y="32" width="40" height="5" rx="2" fill={a}/>

      {/* Mesas grid */}
      {tableStates.map((color, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        return (
          <g key={i}>
            <rect x={8 + col * 38} y={46 + row * 42} width="32" height="34" rx="5"
              fill={color + "18"} stroke={color + "70"} strokeWidth="0.7"/>
            <text x={24 + col * 38} y={66 + row * 42} textAnchor="middle"
              fontSize="8" fill={color} fontFamily="monospace" fontWeight="500">
              {i + 1}
            </text>
            {color !== "#2A2415" && (
              <rect x={12 + col * 38} y={73 + row * 42} width="24" height="3" rx="1" fill={color + "50"}/>
            )}
          </g>
        );
      })}

      {/* Order panel */}
      <rect x="164" y="28" width="168" height="164" rx="6" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
      <rect x="172" y="36" width="60" height="8" rx="2" fill="#2A2415"/>
      <rect x="240" y="36" width="40" height="8" rx="3" fill={a + "30"} stroke={a + "50"} strokeWidth="0.5"/>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="172" y={52 + i * 22} width="24" height="16" rx="3" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
          <rect x="202" y={56 + i * 22} width="60" height="6" rx="2" fill="#2A2415"/>
          <rect x="202" y={64 + i * 22} width="30" height="4" rx="2" fill="#2A2415" opacity="0.5"/>
          <rect x="276" y={56 + i * 22} width="40" height="6" rx="2" fill={a + "40"}/>
        </g>
      ))}
      <rect x="172" y="145" width="152" height="1" fill="#2A2415"/>
      <rect x="172" y="153" width="80" height="8" rx="2" fill="#2A2415"/>
      <rect x="264" y="150" width="60" height="14" rx="4" fill={a} opacity="0.9"/>

      {/* Legend */}
      {[["#4ADE80","Ocupada"],["#34D399","Esperando"],["#1A2E20","Libre"]].map(([color, label], i) => (
        <g key={i}>
          <rect x={8 + i * 52} y="172" width="8" height="8" rx="2" fill={color + "40"} stroke={color + "70"} strokeWidth="0.5"/>
          <rect x={20 + i * 52} y="174" width={label.length * 4.5} height="4" rx="1" fill="#2A2415"/>
        </g>
      ))}
    </svg>
  );
}

// ─── Turnos Mockup ────────────────────────────────────────────
export function TurnosMockup({ accentColor = "#4ADE80" }) {
  const a = accentColor;
  const hours = ["09:00", "10:00", "11:00", "12:00", "13:00"];
  const slots = [
    [true, false, true],
    [false, true, false],
    [true, true, false],
    [false, false, true],
    [true, false, false],
  ];
  return (
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Mockup plataforma de turnos">
      <rect x="0" y="0" width="340" height="200" rx="8" fill="#0F0D07"/>
      <rect x="0" y="0" width="340" height="24" rx="8" fill="#16130A"/>
      <rect x="0" y="16" width="340" height="8" fill="#16130A"/>
      <circle cx="12" cy="12" r="4" fill="#2A2415"/>
      <circle cx="26" cy="12" r="4" fill="#2A2415"/>
      <circle cx="40" cy="12" r="4" fill="#2A2415"/>

      {/* Nav tabs */}
      {["Calendario", "Pacientes", "Reportes"].map((tab, i) => (
        <g key={i}>
          <rect x={8 + i * 80} y="28" width="72" height="14" rx="3"
            fill={i === 0 ? a + "20" : "none"}
            stroke={i === 0 ? a + "50" : "none"} strokeWidth="0.5"/>
          <rect x={16 + i * 80} y="32" width={tab.length * 5.5} height="6" rx="2"
            fill={i === 0 ? a : "#2A2415"}/>
        </g>
      ))}

      {/* Calendar header */}
      <rect x="8" y="48" width="60" height="10" rx="3" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
      <rect x="12" y="52" width="40" height="4" rx="2" fill="#2A2415"/>
      {["Dr. A", "Dr. B", "Dr. C"].map((doc, i) => (
        <g key={i}>
          <rect x={76 + i * 86} y="48" width="80" height="10" rx="3"
            fill={i === 0 ? a + "15" : "#16130A"} stroke={i === 0 ? a + "40" : "#2A2415"} strokeWidth="0.5"/>
          <rect x={86 + i * 86} y="52" width="40" height="4" rx="2"
            fill={i === 0 ? a : "#2A2415"}/>
        </g>
      ))}

      {/* Time slots grid */}
      {hours.map((hour, row) => (
        <g key={row}>
          <rect x="8" y={64 + row * 24} width="60" height="20" rx="3" fill="#16130A" stroke="#2A2415" strokeWidth="0.3"/>
          <rect x="12" y={71 + row * 24} width="30" height="5" rx="2" fill="#2A2415"/>
          {slots[row].map((booked, col) => (
            <rect key={col} x={76 + col * 86} y={64 + row * 24} width="80" height="20" rx="3"
              fill={booked ? a + "20" : "#16130A"}
              stroke={booked ? a + "50" : "#2A2415"}
              strokeWidth={booked ? "0.7" : "0.3"}/>
          ))}
          {slots[row].map((booked, col) => booked && (
            <rect key={col} x={84 + col * 86} y={71 + row * 24} width="50" height="5" rx="2"
              fill={a + "70"}/>
          ))}
        </g>
      ))}

      {/* Bottom bar */}
      <rect x="8" y="186" width="100" height="8" rx="3" fill={a + "20"} stroke={a + "40"} strokeWidth="0.5"/>
      <rect x="12" y="189" width="70" height="4" rx="2" fill={a + "80"}/>
      <rect x="240" y="184" width="92" height="12" rx="4" fill={a} opacity="0.9"/>
    </svg>
  );
}

// ─── Excel VBA Mockup ─────────────────────────────────────────
export function ExcelMockup({ accentColor = "#6EE7B7" }) {
  const a = accentColor;
  const bars = [65, 80, 45, 90, 55, 70, 85, 60];
  return (
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Mockup dashboard financiero Excel">
      <rect x="0" y="0" width="340" height="200" rx="8" fill="#0F0D07"/>
      <rect x="0" y="0" width="340" height="22" rx="8" fill="#16130A"/>
      <rect x="0" y="14" width="340" height="8" fill="#16130A"/>
      <rect x="8" y="6" width="60" height="10" rx="3" fill="#1A4A1A" opacity="0.8"/>
      <rect x="12" y="9" width="40" height="4" rx="2" fill="#4CAF50" opacity="0.7"/>

      {/* KPI cards row */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={8 + i * 110} y="26" width="100" height="36" rx="4" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
          <rect x={16 + i * 110} y="32" width="40" height="5" rx="2" fill="#2A2415"/>
          <rect x={16 + i * 110} y="42" width="55" height="10" rx="2" fill={a + "60"}/>
          {i === 0 && <rect x={80} y="42" width="18" height="10" rx="2" fill="#4CAF5040" stroke="#4CAF5060" strokeWidth="0.5"/>}
        </g>
      ))}

      {/* Bar chart */}
      <rect x="8" y="68" width="200" height="120" rx="4" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
      <rect x="16" y="74" width="60" height="6" rx="2" fill="#2A2415"/>
      {bars.map((h, i) => (
        <g key={i}>
          <rect x={20 + i * 23} y={180 - h * 0.78} width="16" height={h * 0.78}
            rx="2" fill={a} opacity={0.5 + i * 0.06}/>
        </g>
      ))}
      {/* X axis */}
      <rect x="16" y="180" width="184" height="1" fill="#2A2415" opacity="0.7"/>

      {/* Right panel — metrics */}
      <rect x="216" y="68" width="116" height="120" rx="4" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
      <rect x="224" y="76" width="50" height="6" rx="2" fill="#2A2415"/>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="224" y={90 + i * 22} width="70" height="5" rx="2" fill="#2A2415"/>
          <rect x="300" y={88 + i * 22} width="24" height="9" rx="2"
            fill={i === 1 ? "#C0392B30" : a + "30"}
            stroke={i === 1 ? "#C0392B60" : a + "50"} strokeWidth="0.5"/>
        </g>
      ))}
      {/* Export button */}
      <rect x="224" y="166" width="100" height="14" rx="4" fill={a + "30"} stroke={a + "60"} strokeWidth="0.5"/>
      <rect x="234" y="170" width="60" height="5" rx="2" fill={a}/>
    </svg>
  );
}

// ─── 3D Print Mockup ──────────────────────────────────────────
export function Print3DMockup({ accentColor = "#86EFAC" }) {
  const a = accentColor;
  const statuses = ["Nuevo", "Imprimiendo", "Listo", "Entregado"];
  const statusColors = ["#4ADE80","#34D399","#86EFAC","#1A2E20"];
  const orders = [0, 1, 2, 1, 0, 3, 2, 0];
  return (
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Mockup sistema 3D print">
      <rect x="0" y="0" width="340" height="200" rx="8" fill="#0F0D07"/>
      <rect x="0" y="0" width="340" height="24" rx="8" fill="#16130A"/>
      <rect x="0" y="16" width="340" height="8" fill="#16130A"/>
      <circle cx="12" cy="12" r="4" fill="#2A2415"/>
      <circle cx="26" cy="12" r="4" fill="#2A2415"/>
      <circle cx="40" cy="12" r="4" fill="#2A2415"/>

      {/* Kanban columns */}
      {statuses.map((status, col) => (
        <g key={col}>
          <rect x={8 + col * 82} y="28" width="74" height="164" rx="5" fill="#0A0800" stroke="#2A2415" strokeWidth="0.5"/>
          <rect x={12 + col * 82} y="32" width="40" height="8" rx="3"
            fill={statusColors[col] + "20"} stroke={statusColors[col] + "50"} strokeWidth="0.5"/>
          <rect x={15 + col * 82} y="35" width={status.length * 5.2} height="4" rx="2" fill={statusColors[col]}/>
          {orders.filter((_, i) => Math.floor(i / 2) % 4 === col).slice(0, col === 1 ? 2 : col === 0 ? 3 : 1).map((_, cardI) => (
            <g key={cardI}>
              <rect x={12 + col * 82} y={48 + cardI * 38} width="66" height="32" rx="4"
                fill="#16130A" stroke={statusColors[col] + "30"} strokeWidth="0.5"/>
              <rect x={16 + col * 82} y={54 + cardI * 38} width="40" height="5" rx="2" fill="#2A2415"/>
              <rect x={16 + col * 82} y={62 + cardI * 38} width="25" height="4" rx="2" fill={statusColors[col] + "50"}/>
              <rect x={52 + col * 82} y={52 + cardI * 38} width="20" height="8" rx="2" fill={statusColors[col] + "20"} stroke={statusColors[col] + "50"} strokeWidth="0.4"/>
            </g>
          ))}
        </g>
      ))}

      {/* Bottom stats */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={8 + i * 110} y="186" width="100" height="10" rx="3" fill="#16130A" stroke="#2A2415" strokeWidth="0.5"/>
          <rect x={12 + i * 110} y="189" width={[55, 40, 50][i]} height="4" rx="2" fill={a + "60"}/>
        </g>
      ))}
    </svg>
  );
}

// ─── Dispatcher ───────────────────────────────────────────────
export function ProjectMockup({ mockupType, accentColor }) {
  switch (mockupType) {
    case "veterinary": return <VeterinaryMockup accentColor={accentColor} />;
    case "pos":        return <POSMockup accentColor={accentColor} />;
    case "turnos":     return <TurnosMockup accentColor={accentColor} />;
    case "excel":      return <ExcelMockup accentColor={accentColor} />;
    case "print3d":    return <Print3DMockup accentColor={accentColor} />;
    default:           return null;
  }
}
