import type { GameState, Player } from './types'
import { PALETTE_KEYS } from './colors'

const KEY = 'biberechnung:v1'

export const MIN_PLAYERS = 2
export const MAX_PLAYERS = 8

// Standard: 2 Spieler, M und T
export function defaultState(): GameState {
  const players: Player[] = [
    { id: 'p1', name: 'M', color: 'mint' },
    { id: 'p2', name: 'T', color: 'rot' },
  ]
  return { players, scores: Object.fromEntries(players.map((p) => [p.id, 0])) }
}

export function newPlayer(index: number): Player {
  return {
    id: `p${index + 1}-${Date.now().toString(36)}`,
    name: `S${index + 1}`,
    color: PALETTE_KEYS[index % PALETTE_KEYS.length],
  }
}

export function loadState(): GameState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as GameState
    if (!Array.isArray(parsed.players) || parsed.players.length < MIN_PLAYERS) return defaultState()
    return { players: parsed.players, scores: parsed.scores ?? {} }
  } catch {
    return defaultState()
  }
}

export function saveState(state: GameState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Speichern ist nur Komfort — wenn's nicht geht, läuft die App trotzdem
  }
}
