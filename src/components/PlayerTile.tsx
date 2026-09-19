import { useState } from 'react'
import type { Player } from '../lib/types'
import type { ThemeArt } from '../lib/themes'
import { hexFor } from '../lib/colors'
import { azulPattern } from '../lib/azul'

type Props = {
  player: Player
  score: number
  count: number // Anzahl Spieler gesamt → steuert Schriftgröße
  index: number
  art: ThemeArt
  onAdd: (delta: number) => void
}

// Schriftgröße der Punktzahl je nach Kachelanzahl
function scoreSize(count: number): string {
  if (count <= 2) return 'clamp(6rem, 32vw, 11rem)'
  if (count === 3) return 'clamp(4.5rem, 22vw, 8rem)'
  if (count <= 4) return 'clamp(4rem, 20vw, 7rem)'
  if (count <= 6) return 'clamp(3.2rem, 15vw, 5.5rem)'
  return 'clamp(2.6rem, 12vw, 4.5rem)'
}

export function PlayerTile({ player, score, count, index, art, onAdd }: Props) {
  const hex = hexFor(player.color)
  const [pulse, setPulse] = useState(0)

  const bump = (delta: number) => {
    onAdd(delta)
    setPulse((n) => n + 1)
  }

  const small = count > 4

  return (
    <button
      type="button"
      onClick={() => bump(1)}
      className="tile relative flex flex-col items-center justify-center overflow-hidden rounded-3xl select-none outline-none active:scale-[0.985] transition-transform duration-100"
      style={{ ['--c' as string]: hex }}
    >
      {/* weiche Farbflecken (Airbrush-Look) */}
      <span className="tile-glow pointer-events-none absolute -top-1/4 -left-1/4 h-2/3 w-2/3 rounded-full blur-3xl" />
      <span className="tile-glow-2 pointer-events-none absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full blur-3xl" />

      {/* Theme-Kunst: Azul-Muster oder Faraway-Wasserzeichen */}
      {art === 'azul' && (
        <span className="tile-art pointer-events-none absolute inset-0" style={{ backgroundImage: azulPattern(index, hex) }} />
      )}
      {art === 'faraway' && (
        <img
          src={`/themes/faraway/${(index % 8) + 1}.png`}
          alt=""
          className="tile-art tile-watermark pointer-events-none absolute"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      )}

      <span className={`tile-name relative font-semibold tracking-wide uppercase ${small ? 'text-sm' : 'text-lg'}`}>
        {player.name || `Spieler ${index + 1}`}
      </span>

      <span
        key={pulse}
        className="score relative font-bold tabular-nums leading-none"
        style={{ fontSize: scoreSize(count) }}
      >
        {score}
      </span>

      <span className={`relative flex gap-2 ${small ? 'mt-2' : 'mt-4'}`}>
        <MiniButton label="−1" onClick={() => bump(-1)} small={small} />
        <MiniButton label="+10" onClick={() => bump(10)} small={small} />
      </span>
    </button>
  )
}

function MiniButton({ label, onClick, small }: { label: string; onClick: () => void; small: boolean }) {
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={(e) => { e.stopPropagation(); onClick() }}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onClick() } }}
      className={`glass rounded-full font-semibold tabular-nums active:scale-95 transition-transform ${small ? 'px-3 py-1 text-xs' : 'px-5 py-2 text-base'}`}
    >
      {label}
    </span>
  )
}
