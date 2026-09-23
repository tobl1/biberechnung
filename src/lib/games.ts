// Spiel-Overlay: legt sich als Muster/Wasserzeichen über die Kacheln, unabhängig vom Grundton
export type GameArt = 'none' | 'pattern' | 'watermark'
export type PatternSet = 'azul' | 'cards'

export const GAMES: Record<string, { label: string; hint: string; art: GameArt; images?: number; set?: PatternSet }> = {
  none:    { label: 'Keins',   hint: 'Nur Farbe',      art: 'none' },
  azul:    { label: 'Azul',    hint: 'Fliesenmuster',  art: 'pattern', set: 'azul' },
  karten:  { label: 'Karten',  hint: 'Rommé, Skat & Co', art: 'pattern', set: 'cards' },
  faraway: { label: 'Faraway', hint: 'Wasserzeichen',  art: 'watermark', images: 11 },
}

export const GAME_KEYS = Object.keys(GAMES)
export const DEFAULT_GAME = 'none'
