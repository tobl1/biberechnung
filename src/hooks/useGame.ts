import { useCallback, useEffect, useState } from 'react'
import type { GameState, Player } from '../lib/types'
import { loadState, saveState, newPlayer, MIN_PLAYERS, MAX_PLAYERS } from '../lib/storage'

export function useGame() {
  const [state, setState] = useState<GameState>(loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  const addPoints = useCallback((id: string, delta: number) => {
    setState((s) => ({ ...s, scores: { ...s.scores, [id]: (s.scores[id] ?? 0) + delta } }))
  }, [])

  const resetScores = useCallback(() => {
    setState((s) => ({ ...s, scores: Object.fromEntries(s.players.map((p) => [p.id, 0])) }))
  }, [])

  const setPlayerCount = useCallback((count: number) => {
    const n = Math.max(MIN_PLAYERS, Math.min(MAX_PLAYERS, count))
    setState((s) => {
      const players = s.players.slice(0, n)
      while (players.length < n) players.push(newPlayer(players.length, players.map((p) => p.color)))
      const scores = Object.fromEntries(players.map((p) => [p.id, s.scores[p.id] ?? 0]))
      return { ...s, players, scores }
    })
  }, [])

  const updatePlayer = useCallback((id: string, patch: Partial<Omit<Player, 'id'>>) => {
    setState((s) => ({
      ...s,
      players: s.players.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    }))
  }, [])

  const setTheme = useCallback((theme: string) => {
    setState((s) => ({ ...s, theme }))
  }, [])

  const setGame = useCallback((game: string) => {
    setState((s) => ({ ...s, game }))
  }, [])

  const setFont = useCallback((font: string) => {
    setState((s) => ({ ...s, font }))
  }, [])

  return { ...state, addPoints, resetScores, setPlayerCount, updatePlayer, setTheme, setGame, setFont }
}
