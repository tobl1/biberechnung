// Schlichte geometrische Fliesenmuster (Inhalt eines <pattern> mit Kantenlänge SIZE).
// Jeder Spieler bekommt nach Index ein anderes Muster; die Farbe kommt per currentColor aus der Spielerfarbe.
export const PATTERN_SIZE = 44

const S = PATTERN_SIZE
const H = S / 2

export const PATTERNS: string[] = [
  // 0: Rautengitter
  `<path d='M${H} 0 L${S} ${H} L${H} ${S} L0 ${H} Z' fill='none' stroke='currentColor' stroke-width='1.5'/>`,
  // 1: Punkte
  `<circle cx='${H}' cy='${H}' r='3' fill='currentColor'/><circle cx='0' cy='0' r='3' fill='currentColor'/><circle cx='${S}' cy='0' r='3' fill='currentColor'/><circle cx='0' cy='${S}' r='3' fill='currentColor'/><circle cx='${S}' cy='${S}' r='3' fill='currentColor'/>`,
  // 2: Kreise
  `<circle cx='${H}' cy='${H}' r='${H - 4}' fill='none' stroke='currentColor' stroke-width='1.5'/><circle cx='${H}' cy='${H}' r='4' fill='none' stroke='currentColor' stroke-width='1.5'/>`,
  // 3: Plus-Zeichen
  `<path d='M${H} 8 V${S - 8} M8 ${H} H${S - 8}' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'/>`,
  // 4: Zickzack
  `<path d='M0 ${H - 6} L${H / 2} ${H + 6} L${H} ${H - 6} L${H * 1.5} ${H + 6} L${S} ${H - 6}' fill='none' stroke='currentColor' stroke-width='1.5'/>`,
  // 5: Dreiecke
  `<path d='M${H} 6 L${S - 6} ${S - 8} L6 ${S - 8} Z' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linejoin='round'/>`,
  // 6: Schuppen
  `<path d='M0 ${H} A${H} ${H} 0 0 1 ${S} ${H}' fill='none' stroke='currentColor' stroke-width='1.5'/><path d='M${-H} ${S} A${H} ${H} 0 0 1 ${H} ${S} A${H} ${H} 0 0 1 ${S + H} ${S}' fill='none' stroke='currentColor' stroke-width='1.5'/>`,
  // 7: Vierpass
  `<circle cx='${H}' cy='${H - 9}' r='7' fill='none' stroke='currentColor' stroke-width='1.5'/><circle cx='${H}' cy='${H + 9}' r='7' fill='none' stroke='currentColor' stroke-width='1.5'/><circle cx='${H - 9}' cy='${H}' r='7' fill='none' stroke='currentColor' stroke-width='1.5'/><circle cx='${H + 9}' cy='${H}' r='7' fill='none' stroke='currentColor' stroke-width='1.5'/>`,
]
