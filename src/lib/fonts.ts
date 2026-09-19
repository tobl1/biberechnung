// Schriftoptionen. Key wird gespeichert, family für CSS, google für den Font-Import.
export const FONTS: Record<string, { label: string; family: string; hint: string }> = {
  space:  { label: 'Space Grotesk', family: "'Space Grotesk', system-ui, sans-serif", hint: 'Standard' },
  source: { label: 'Source Sans',   family: "'Source Sans 3', system-ui, sans-serif", hint: 'Klassisch' },
  doto:   { label: 'Doto',          family: "'Doto', monospace",                        hint: 'LED-Punkte' },
  orbit:  { label: 'Orbitron',      family: "'Orbitron', system-ui, sans-serif",        hint: 'Digital' },
}

export const FONT_KEYS = Object.keys(FONTS)
export const DEFAULT_FONT = 'space'

export function familyFor(key: string): string {
  return FONTS[key]?.family ?? FONTS[DEFAULT_FONT].family
}
