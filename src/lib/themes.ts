// Grundton (Colorway). Key wird gespeichert, die Farben stecken in index.css unter html[data-theme=…]
export const THEMES: Record<string, { label: string; hint: string; preview: string }> = {
  light: { label: 'Hell',   hint: 'Klares Glas',       preview: 'linear-gradient(135deg, #fbf8ea, #fde68a)' },
  dark:  { label: 'Dunkel', hint: 'Dunkles Glas',      preview: 'linear-gradient(135deg, #16261f, #0b1612)' },
  grain: { label: 'Körnig', hint: 'Pastell, Airbrush', preview: 'linear-gradient(135deg, #fde68a, #fdba74)' },
}

export const THEME_KEYS = Object.keys(THEMES)
export const DEFAULT_THEME = 'light'
