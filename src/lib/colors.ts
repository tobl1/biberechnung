// Farboptionen für Spieler (18 Stück, zwei Reihen à 9). Key wird gespeichert, hex nur fürs Rendering.
export const PALETTE: Record<string, { label: string; hex: string }> = {
  mint:     { label: 'Mint',      hex: '#34d399' },
  gruen:    { label: 'Grün',      hex: '#84cc16' },
  wald:     { label: 'Wald',      hex: '#059669' },
  gelb:     { label: 'Gelb',      hex: '#facc15' },
  orange:   { label: 'Orange',    hex: '#fb923c' },
  koralle:  { label: 'Koralle',   hex: '#fb7185' },
  rot:      { label: 'Rot',       hex: '#f87171' },
  rubin:    { label: 'Rubin',     hex: '#dc2626' },
  pink:     { label: 'Pink',      hex: '#f472b6' },
  magenta:  { label: 'Magenta',   hex: '#d946ef' },
  lila:     { label: 'Lila',      hex: '#a78bfa' },
  indigo:   { label: 'Indigo',    hex: '#818cf8' },
  blau:     { label: 'Blau',      hex: '#60a5fa' },
  marine:   { label: 'Marine',    hex: '#2563eb' },
  himmel:   { label: 'Himmel',    hex: '#22d3ee' },
  petrol:   { label: 'Petrol',    hex: '#0d9488' },
  sand:     { label: 'Sand',      hex: '#d6b380' },
  schiefer: { label: 'Schiefer',  hex: '#94a3b8' },
}

export const PALETTE_KEYS = Object.keys(PALETTE)

export function hexFor(key: string): string {
  return PALETTE[key]?.hex ?? PALETTE.mint.hex
}
