// Azulejo-Muster (Inhalt eines <pattern> mit Kantenlänge SIZE). Klassischer Aufbau portugiesischer Fliesen:
// Rahmen, zentrale Rosette/Stern, Eckmotive, die sich mit den Nachbarfliesen zu einem zweiten Motiv ergänzen.
// Primärfarbe = currentColor (Spielerfarbe), dazu Weiß und ein warmer Goldton als Akzent.
export const PATTERN_SIZE = 96

const S = PATTERN_SIZE
const C = S / 2
const GOLD = '#e0a53a'
const WHITE = '#ffffff'

const sw = (w: number, color = 'currentColor') => `fill='none' stroke='${color}' stroke-width='${w}' stroke-linecap='round' stroke-linejoin='round'`

// Rahmen mit Innenlinie – auf allen Fliesen gleich, damit das Raster wie verfugt wirkt
const frame =
  `<rect x='0.5' y='0.5' width='${S - 1}' height='${S - 1}' ${sw(1)} opacity='.55'/>` +
  `<rect x='5' y='5' width='${S - 10}' height='${S - 10}' ${sw(0.8)} opacity='.35'/>`

// Ein Motiv viermal um die Mitte drehen
const x4 = (inner: string) =>
  [0, 90, 180, 270].map((a) => `<g transform='rotate(${a} ${C} ${C})'>${inner}</g>`).join('')

// Eck-Viertelkreise mit kleinen Blättern – vier Fliesen ergeben zusammen eine Blüte
const corners = x4(
  `<path d='M0 0 L22 0 A22 22 0 0 1 0 22 Z' fill='currentColor' opacity='.85'/>` +
  `<path d='M0 0 L13 0 A13 13 0 0 1 0 13 Z' fill='${WHITE}' opacity='.9'/>` +
  `<circle cx='0' cy='0' r='5' fill='${GOLD}'/>`,
)

// Achtzackiger Stern
const star8 = (r: number) => {
  const pts: string[] = []
  for (let i = 0; i < 16; i++) {
    const rad = i % 2 === 0 ? r : r * 0.42
    const a = (Math.PI / 8) * i - Math.PI / 2
    pts.push(`${(C + rad * Math.cos(a)).toFixed(1)},${(C + rad * Math.sin(a)).toFixed(1)}`)
  }
  return pts.join(' ')
}

export const PATTERNS: string[] = [
  // 0: Stern-Rosette – der Klassiker
  frame + corners +
    `<polygon points='${star8(30)}' fill='currentColor'/>` +
    `<polygon points='${star8(21)}' fill='${WHITE}' opacity='.9'/>` +
    `<polygon points='${star8(13)}' fill='currentColor'/>` +
    `<circle cx='${C}' cy='${C}' r='5' fill='${GOLD}'/>`,

  // 1: Blüte mit acht Blättern
  frame + corners +
    x4(`<ellipse cx='${C}' cy='${C - 20}' rx='7' ry='16' fill='currentColor'/><ellipse cx='${C}' cy='${C - 20}' rx='3' ry='10' fill='${WHITE}' opacity='.8'/>`) +
    x4(`<g transform='rotate(45 ${C} ${C})'><ellipse cx='${C}' cy='${C - 20}' rx='5' ry='13' fill='${GOLD}' opacity='.9'/></g>`) +
    `<circle cx='${C}' cy='${C}' r='9' fill='currentColor'/><circle cx='${C}' cy='${C}' r='4' fill='${WHITE}'/>`,

  // 2: Arabeske – geschwungene Ranken in vier Quadranten
  frame +
    x4(`<path d='M${C} ${C} C ${C} 26, 30 26, 30 14 M${C} ${C} C ${C - 8} 36, 20 40, 14 30' ${sw(2.6)}/>` +
       `<circle cx='30' cy='14' r='3.5' fill='${GOLD}'/><circle cx='14' cy='30' r='3.5' fill='currentColor'/>`) +
    `<polygon points='${C},${C - 10} ${C + 10},${C} ${C},${C + 10} ${C - 10},${C}' fill='currentColor'/>` +
    `<polygon points='${C},${C - 5} ${C + 5},${C} ${C},${C + 5} ${C - 5},${C}' fill='${WHITE}'/>` +
    x4(`<path d='M12 12 L24 12 M12 12 L12 24' ${sw(2)}/>`),

  // 3: Kompassrose mit Ring
  frame + corners +
    `<circle cx='${C}' cy='${C}' r='32' ${sw(1.5)} opacity='.7'/>` +
    x4(`<polygon points='${C},${C - 34} ${C + 6},${C} ${C},${C + 6} ${C - 6},${C}' fill='currentColor'/>` +
       `<polygon points='${C},${C - 30} ${C + 2.5},${C - 6} ${C},${C - 4} ${C - 2.5},${C - 6}' fill='${WHITE}' opacity='.85'/>`) +
    x4(`<g transform='rotate(45 ${C} ${C})'><polygon points='${C},${C - 22} ${C + 4},${C} ${C - 4},${C}' fill='${GOLD}'/></g>`) +
    `<circle cx='${C}' cy='${C}' r='6' fill='${WHITE}'/><circle cx='${C}' cy='${C}' r='3' fill='currentColor'/>`,

  // 4: Vierpass mit Blattwerk
  frame +
    x4(`<circle cx='${C}' cy='${C - 17}' r='15' fill='currentColor'/><circle cx='${C}' cy='${C - 17}' r='9' fill='${WHITE}' opacity='.9'/><circle cx='${C}' cy='${C - 17}' r='4' fill='${GOLD}'/>`) +
    `<circle cx='${C}' cy='${C}' r='7' fill='currentColor'/>` +
    x4(`<path d='M8 8 Q 26 8, 26 26 Q 8 26, 8 8 Z' fill='currentColor' opacity='.8'/><path d='M12 12 Q 22 12, 22 22' ${sw(1.2, WHITE)}/>`),

  // 5: Rautengitter mit Lilien
  frame +
    `<path d='M${C} 0 L${S} ${C} L${C} ${S} L0 ${C} Z' ${sw(1.5)}/>` +
    `<path d='M${C} 14 L${S - 14} ${C} L${C} ${S - 14} L14 ${C} Z' fill='currentColor' opacity='.18'/>` +
    x4(`<path d='M${C} ${C - 30} C ${C + 9} ${C - 22}, ${C + 9} ${C - 12}, ${C} ${C - 8} C ${C - 9} ${C - 12}, ${C - 9} ${C - 22}, ${C} ${C - 30} Z' fill='currentColor'/>` +
       `<path d='M${C} ${C - 26} L${C} ${C - 10}' ${sw(1.2, WHITE)}/>`) +
    `<circle cx='${C}' cy='${C}' r='5' fill='${GOLD}'/>` +
    x4(`<circle cx='0' cy='0' r='9' fill='currentColor'/><circle cx='0' cy='0' r='4' fill='${GOLD}'/>`),

  // 6: Sonne mit Strahlen
  frame + corners +
    x4(`<polygon points='${C},${C - 36} ${C + 5},${C - 18} ${C - 5},${C - 18}' fill='currentColor'/>` +
       `<g transform='rotate(45 ${C} ${C})'><polygon points='${C},${C - 36} ${C + 5},${C - 18} ${C - 5},${C - 18}' fill='${GOLD}'/></g>` +
       `<g transform='rotate(22.5 ${C} ${C})'><polygon points='${C},${C - 32} ${C + 3},${C - 18} ${C - 3},${C - 18}' fill='currentColor' opacity='.6'/></g>` +
       `<g transform='rotate(67.5 ${C} ${C})'><polygon points='${C},${C - 32} ${C + 3},${C - 18} ${C - 3},${C - 18}' fill='currentColor' opacity='.6'/></g>`) +
    `<circle cx='${C}' cy='${C}' r='17' fill='currentColor'/><circle cx='${C}' cy='${C}' r='12' fill='${WHITE}' opacity='.9'/><circle cx='${C}' cy='${C}' r='6' fill='${GOLD}'/>`,

  // 7: Verschlungene Ringe
  frame +
    x4(`<circle cx='${C}' cy='${C - 16}' r='20' ${sw(2.5)}/>`) +
    `<circle cx='${C}' cy='${C}' r='8' fill='${WHITE}'/><circle cx='${C}' cy='${C}' r='4' fill='${GOLD}'/>` +
    x4(`<path d='M0 0 L18 0 A18 18 0 0 1 0 18 Z' fill='currentColor' opacity='.85'/><circle cx='0' cy='0' r='6' fill='${WHITE}' opacity='.9'/>`) +
    x4(`<circle cx='${C}' cy='9' r='3' fill='currentColor'/>`),
]
