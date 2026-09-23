// Schriftoptionen. Key wird gespeichert, die Familie kommt per CSS-Variable aus index.css.
export const FONTS: Record<string, { label: string; hint: string; family: string }> = {
  system: { label: 'System',  hint: 'Wie das Gerät', family: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" },
  space:  { label: 'Grotesk', hint: 'Technisch',     family: "'Space Grotesk', system-ui, sans-serif" },
  // New York ist Apples Systemserife — auf iPhone/Mac bereits vorhanden, sonst Georgia
  newyork:{ label: 'New York', hint: 'Serife',     family: "ui-serif, 'New York', Georgia, 'Times New Roman', serif" },
  qaiken: { label: 'Qaiken',  hint: 'Display',     family: "'Qaiken', ui-serif, Georgia, serif" },
}

export const FONT_KEYS = Object.keys(FONTS)
export const DEFAULT_FONT = 'system'
