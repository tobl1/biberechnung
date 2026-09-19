import { useEffect, useState } from 'react'
import { useGame } from './hooks/useGame'
import { Background } from './components/Background'
import { PlayerTile } from './components/PlayerTile'
import { ControlBar } from './components/ControlBar'
import { SettingsSheet } from './components/SettingsSheet'

// Raster: bis 3 Spieler eine Spalte, ab 4 zwei Spalten
function gridFor(n: number) {
  const cols = n <= 3 ? 1 : 2
  const rows = Math.ceil(n / cols)
  return { cols, rows }
}

function App() {
  const game = useGame()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { cols, rows } = gridFor(game.players.length)

  // Theme aufs <html> setzen, damit CSS-Variablen + Body-Hintergrund mitziehen
  useEffect(() => {
    document.documentElement.dataset.theme = game.theme
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
  }, [game.theme])

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <Background />

      <main
        className="relative z-10 grid h-full gap-2 px-2 pt-[calc(env(safe-area-inset-top)+14px)] pb-[calc(max(env(safe-area-inset-bottom),10px)+58px)]"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {game.players.map((p, i) => (
          <PlayerTile
            key={p.id}
            player={p}
            index={i}
            score={game.scores[p.id] ?? 0}
            count={game.players.length}
            onAdd={(d) => game.addPoints(p.id, d)}
          />
        ))}
      </main>

      <ControlBar onReset={game.resetScores} onOpenSettings={() => setSettingsOpen(true)} />

      <SettingsSheet
        open={settingsOpen}
        players={game.players}
        theme={game.theme}
        onClose={() => setSettingsOpen(false)}
        onSetCount={game.setPlayerCount}
        onUpdate={game.updatePlayer}
        onSetTheme={game.setTheme}
      />
    </div>
  )
}

export default App
