import { useState } from 'react'
import { useGame } from './hooks/useGame'
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

  return (
    <div className="h-dvh w-full overflow-hidden bg-[#0b1612] text-white">
      <main
        className="grid h-full gap-2 p-2 pt-[max(env(safe-area-inset-top),8px)] pb-[calc(max(env(safe-area-inset-bottom),12px)+76px)]"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {game.players.map((p) => (
          <PlayerTile
            key={p.id}
            player={p}
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
        onClose={() => setSettingsOpen(false)}
        onSetCount={game.setPlayerCount}
        onUpdate={game.updatePlayer}
      />
    </div>
  )
}

export default App
