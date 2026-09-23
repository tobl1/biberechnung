// Muster im Stil klassischer Spielkarten-Rückseiten: Symbole, Rautengitter, Guilloche-Ornamente.
import { HEART, DIAMOND, SPADE, CLUB, SUITS, t } from './suits'

export const CARD_SIZE = 96

const S = CARD_SIZE
const C = S / 2
const GOLD = '#e0a53a'
const WHITE = '#ffffff'

const sw = (w: number, color = 'currentColor', extra = '') =>
  `fill='none' stroke='${color}' stroke-width='${w}' stroke-linecap='round' stroke-linejoin='round' ${extra}`

// Rahmen wie bei einer Kartenrückseite
const frame =
  `<rect x='0.5' y='0.5' width='${S - 1}' height='${S - 1}' ${sw(1)} opacity='.5'/>` +
  `<rect x='6' y='6' width='${S - 12}' height='${S - 12}' rx='4' ${sw(0.9)} opacity='.35'/>`

const x4 = (inner: string) =>
  [0, 90, 180, 270].map((a) => `<g transform='rotate(${a} ${C} ${C})'>${inner}</g>`).join('')

export const CARD_PATTERNS: string[] = [
  // 0: Die vier Farben im Kreis, Rautengitter dahinter
  frame +
    `<path d='M${C} 6 L${S - 6} ${C} L${C} ${S - 6} L6 ${C} Z' ${sw(1.2)} opacity='.4'/>` +
    t(HEART, C, C - 22, 0.85) +
    t(SPADE, C + 22, C, 0.85) +
    t(DIAMOND, C, C + 22, 0.85) +
    t(CLUB, C - 22, C, 0.85) +
    `<circle cx='${C}' cy='${C}' r='7' fill='${GOLD}'/><circle cx='${C}' cy='${C}' r='3' fill='${WHITE}'/>`,

  // 1: Herz-Raster, versetzt
  frame +
    t(HEART, C, C, 1.15) +
    t(HEART, 0, 0, 0.7) + t(HEART, S, 0, 0.7) + t(HEART, 0, S, 0.7) + t(HEART, S, S, 0.7) +
    t(HEART, C, 0, 0.55, 180) + t(HEART, C, S, 0.55, 180) +
    t(HEART, 0, C, 0.55, 180) + t(HEART, S, C, 0.55, 180) +
    x4(`<circle cx='26' cy='26' r='2.5' fill='${GOLD}'/>`) +
    x4(`<path d='M${C} 18 L${C} 30' ${sw(0.9)} opacity='.35'/>`),

  // 2: Pik mit Strahlenkranz
  frame +
    x4(`<path d='M${C} 14 L${C} 30' ${sw(1.5)} opacity='.5'/>` +
       `<g transform='rotate(45 ${C} ${C})'><path d='M${C} 16 L${C} 28' ${sw(1.2)} opacity='.35'/></g>`) +
    `<circle cx='${C}' cy='${C}' r='24' ${sw(1.3)} opacity='.45'/>` +
    t(SPADE, C, C, 1.35) +
    x4(`<circle cx='10' cy='10' r='3' fill='${GOLD}'/>`),

  // 3: Karo-Gitter wie eine Rückseite
  frame +
    `<g ${sw(1.1, 'currentColor', "opacity='.45'")}><path d='M0 ${C} L${C} 0 M${C} 0 L${S} ${C} M${S} ${C} L${C} ${S} M${C} ${S} L0 ${C}'/><path d='M0 0 L${S} ${S} M${S} 0 L0 ${S}' opacity='.5'/></g>` +
    t(DIAMOND, C, C, 1.2) +
    t(DIAMOND, C, C, 0.62, 0, `fill='${WHITE}' opacity='.9'`) +
    t(DIAMOND, C, C, 0.28, 0, `fill='${GOLD}'`) +
    x4(t(DIAMOND, C, 12, 0.45)),

  // 4: Kreuz mit Ranken
  frame +
    x4(`<path d='M${C} ${C - 8} C ${C - 14} ${C - 20}, ${C - 8} ${C - 34}, ${C} ${C - 30}' ${sw(1.8)} opacity='.6'/>`) +
    t(CLUB, C, C, 1.3) +
    x4(t(CLUB, 0, 0, 0.5)) +
    `<circle cx='${C}' cy='${C}' r='30' ${sw(1)} opacity='.3'/>`,

  // 5: Schachbrett aus Herz und Pik
  frame +
    t(HEART, C - 20, C - 20, 0.8) + t(SPADE, C + 20, C - 20, 0.8) +
    t(SPADE, C - 20, C + 20, 0.8) + t(HEART, C + 20, C + 20, 0.8) +
    `<path d='M${C} 10 V${S - 10} M10 ${C} H${S - 10}' ${sw(1.1)} opacity='.35'/>` +
    `<circle cx='${C}' cy='${C}' r='5' fill='${GOLD}'/>`,

  // 6: Guilloche-Rosette mit kleinen Symbolen
  frame +
    [0, 30, 60, 90, 120, 150].map((a) => `<g transform='rotate(${a} ${C} ${C})'><ellipse cx='${C}' cy='${C}' rx='30' ry='11' ${sw(0.9)} opacity='.45'/></g>`).join('') +
    `<circle cx='${C}' cy='${C}' r='11' fill='currentColor'/>` +
    t(DIAMOND, C, C, 0.55, 0, `fill='${WHITE}'`) +
    x4(t(SUITS[0], C, 13, 0.4, 0, `fill='${GOLD}'`)),

  // 7: Spielkarte mit Eck-Indizes
  `<rect x='9' y='5' width='${S - 18}' height='${S - 10}' rx='7' ${sw(1.6)}/>` +
    `<rect x='13' y='9' width='${S - 26}' height='${S - 18}' rx='5' ${sw(0.8)} opacity='.4'/>` +
    `<g font-family='Georgia, serif' font-size='15' font-weight='700' fill='currentColor' text-anchor='middle'>` +
    `<text x='21' y='26'>A</text>` +
    `<text x='${S - 21}' y='${S - 16}' transform='rotate(180 ${S - 21} ${S - 21})'>A</text>` +
    `</g>` +
    t(SPADE, 21, 36, 0.48) +
    t(SPADE, S - 21, S - 36, 0.48, 180) +
    t(SPADE, C, C, 1.5) +
    t(SPADE, C, C, 0.6, 0, `fill='${GOLD}'`),
]
