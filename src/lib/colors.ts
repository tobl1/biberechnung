// Farboptionen für Spieler. Key wird im State gespeichert, hex nur fürs Rendering.
export const PALETTE: Record<string, { label: string; hex: string }> = {
  mint:    { label: 'Mint',     hex: '#34d399' },
  gruen:   { label: 'Grün',     hex: '#84cc16' },
  rot:     { label: 'Rot',      hex: '#f87171' },
  orange:  { label: 'Orange',   hex: '#fb923c' },
  gelb:    { label: 'Gelb',     hex: '#facc15' },
  blau:    { label: 'Blau',     hex: '#60a5fa' },
  himmel:  { label: 'Himmel',   hex: '#22d3ee' },
  lila:    { label: 'Lila',     hex: '#a78bfa' },
  pink:    { label: 'Pink',     hex: '#f472b6' },
  koralle: { label: 'Koralle',  hex: '#fb7185' },
  indigo:  { label: 'Indigo',   hex: '#818cf8' },
  sand:    { label: 'Sand',     hex: '#d6b380' },
}

export const PALETTE_KEYS = Object.keys(PALETTE)

export function hexFor(key: string): string {
  return PALETTE[key]?.hex ?? PALETTE.mint.hex
}
