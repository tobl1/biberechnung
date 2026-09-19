export type Player = {
  id: string
  name: string
  color: string // Key aus PALETTE
}

export type GameState = {
  players: Player[]
  scores: Record<string, number>
  theme: string // Key aus THEMES
}
