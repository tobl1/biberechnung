import { Minus, Plus, X } from 'lucide-react'
import type { Player } from '../lib/types'
import { PALETTE, PALETTE_KEYS } from '../lib/colors'
import { MIN_PLAYERS, MAX_PLAYERS } from '../lib/storage'

type Props = {
  open: boolean
  players: Player[]
  onClose: () => void
  onSetCount: (n: number) => void
  onUpdate: (id: string, patch: Partial<Omit<Player, 'id'>>) => void
}

// Bottom-Sheet mit Spieleranzahl, Namen und Farben
export function SettingsSheet({ open, players, onClose, onSetCount, onUpdate }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <div
        className={`glass-strong fixed inset-x-0 bottom-0 z-40 max-h-[88dvh] overflow-y-auto rounded-t-3xl px-5 pt-4 pb-[max(env(safe-area-inset-bottom),20px)] transition-transform duration-300 ease-out ${open ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Einstellungen</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80"
          >
            <X size={18} />
          </button>
        </div>

        {/* Spieleranzahl */}
        <div className="mb-6 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
          <span className="font-medium text-white/90">Spieler</span>
          <div className="flex items-center gap-3">
            <Stepper icon={<Minus size={16} />} disabled={players.length <= MIN_PLAYERS} onClick={() => onSetCount(players.length - 1)} />
            <span className="w-6 text-center text-lg font-bold tabular-nums text-white">{players.length}</span>
            <Stepper icon={<Plus size={16} />} disabled={players.length >= MAX_PLAYERS} onClick={() => onSetCount(players.length + 1)} />
          </div>
        </div>

        {/* Pro Spieler: Name + Farbe */}
        <div className="flex flex-col gap-3">
          {players.map((p, i) => (
            <div key={p.id} className="rounded-2xl bg-white/5 p-3">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="h-8 w-8 shrink-0 rounded-full"
                  style={{ background: PALETTE[p.color]?.hex, boxShadow: `0 0 16px -2px ${PALETTE[p.color]?.hex}` }}
                />
                <input
                  value={p.name}
                  maxLength={12}
                  placeholder={`Spieler ${i + 1}`}
                  onChange={(e) => onUpdate(p.id, { name: e.target.value })}
                  className="input flex-1 rounded-xl bg-white/10 px-3 py-2 text-white outline-none placeholder:text-white/30 focus:bg-white/15"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {PALETTE_KEYS.map((key) => {
                  const active = key === p.color
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-label={PALETTE[key].label}
                      onClick={() => onUpdate(p.id, { color: key })}
                      className={`h-7 w-7 rounded-full transition-transform ${active ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-[#0b1612]' : 'opacity-70 hover:opacity-100'}`}
                      style={{ background: PALETTE[key].hex }}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-emerald-400 py-3.5 text-base font-bold text-emerald-950 active:scale-[0.98]"
        >
          Fertig
        </button>
      </div>
    </>
  )
}

function Stepper({ icon, disabled, onClick }: { icon: React.ReactNode; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white disabled:opacity-30"
    >
      {icon}
    </button>
  )
}
