// Designs. Key wird gespeichert, die Farben stecken in index.css unter html[data-theme=…]
// art: was die Kachel zusätzlich im Hintergrund zeigt
export type ThemeArt = 'none' | 'azul' | 'faraway'

export const THEMES: Record<string, { label: string; hint: string; preview: string; art: ThemeArt }> = {
  light:   { label: 'Hell',    hint: 'Klares Glas',        preview: 'linear-gradient(135deg, #f7faf7, #cfeedd)', art: 'none' },
  dark:    { label: 'Dunkel',  hint: 'Dunkles Glas',       preview: 'linear-gradient(135deg, #16261f, #0b1612)', art: 'none' },
  grain:   { label: 'Körnig',  hint: 'Pastell, Airbrush',  preview: 'linear-gradient(135deg, #fbd9b5, #b9b0f0)', art: 'none' },
  azul:    { label: 'Azul',    hint: 'Kachelmuster',       preview: 'linear-gradient(135deg, #f3e9d6, #2f6fb5)', art: 'azul' },
  faraway: { label: 'Faraway', hint: 'Nacht, Wasserzeichen', preview: 'linear-gradient(135deg, #5b3aa3, #1c1236)', art: 'faraway' },
}

export const THEME_KEYS = Object.keys(THEMES)
export const DEFAULT_THEME = 'light'
