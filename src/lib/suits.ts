// Spielkarten-Symbole als SVG-Pfade, jeweils um (0,0) zentriert, Grundgröße ~24px.
// Über `t(x, y, s, rot)` an die gewünschte Stelle transformiert.

export const HEART = 'M0 10 C -13 -2, -9 -13, 0 -6 C 9 -13, 13 -2, 0 10 Z'
export const DIAMOND = 'M0 -11 L8 0 L0 11 L-8 0 Z'
export const SPADE = 'M0 -11 C 5 -4, 12 -1, 12 4 A 5.5 5.5 0 0 1 1.5 6 L 3.5 11 L -3.5 11 L -1.5 6 A 5.5 5.5 0 0 1 -12 4 C -12 -1, -5 -4, 0 -11 Z'
export const CLUB = 'M0 11 L-3.5 11 C -2 7, -1.5 5, -1.2 3.5 A 5 5 0 1 1 -4.2 -2.2 A 5 5 0 1 1 4.2 -2.2 A 5 5 0 1 1 1.2 3.5 C 1.5 5, 2 7, 3.5 11 Z'

export const SUITS = [HEART, SPADE, DIAMOND, CLUB]

// Hilfsfunktion: Pfad platzieren
export function t(d: string, x: number, y: number, s = 1, rot = 0, attrs = "fill='currentColor'"): string {
  return `<path d='${d}' transform='translate(${x} ${y}) rotate(${rot}) scale(${s})' ${attrs}/>`
}
