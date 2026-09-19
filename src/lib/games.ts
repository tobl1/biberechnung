// Spiel-Overlay: legt sich als Muster/Wasserzeichen über die Kacheln, unabhängig vom Grundton
export type GameArt = 'none' | 'pattern' | 'watermark'

export const GAMES: Record<string, { label: string; hint: string; art: GameArt }> = {
  none:    { label: 'Keins',   hint: 'Nur Farbe',      art: 'none' },
  azul:    { label: 'Azul',    hint: 'Fliesenmuster',  art: 'pattern' },
  faraway: { label: 'Faraway', hint: 'Wasserzeichen',  art: 'watermark' },
}

export const GAME_KEYS = Object.keys(GAMES)
export const DEFAULT_GAME = 'none'
