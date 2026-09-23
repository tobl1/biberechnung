import { Minus, Plus, X } from 'lucide-react'
import type { Player } from '../lib/types'
import { PALETTE, PALETTE_KEYS } from '../lib/colors'
import { THEMES, THEME_KEYS } from '../lib/themes'
import { GAMES, GAME_KEYS } from '../lib/games'
import { FONTS, FONT_KEYS } from '../lib/fonts'
import { MIN_PLAYERS, MAX_PLAYERS } from '../lib/storage'

type Props = {
  open: boolean
  players: Player[]
  theme: string
  game: string
  font: string
  onClose: () => void
  onSetCount: (n: number) => void
  onUpdate: (id: string, patch: Partial<Omit<Player, 'id'>>) => void
  onSetTheme: (key: string) => void
  onSetGame: (key: string) => void
  onSetFont: (key: string) => void
}

// Bottom-Sheet mit Spieleranzahl, Design, Namen und Farben
export function SettingsSheet({ open, players, theme, game, font, onClose, onSetCount, onUpdate, onSetTheme, onSetGame, onSetFont }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <div
        className={`sheet fixed inset-x-0 bottom-0 z-40 max-h-[88dvh] overflow-y-auto rounded-t-3xl px-5 pt-4 pb-[max(env(safe-area-inset-bottom),20px)] transition-transform duration-300 ease-out ${open ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="ink-15 mx-auto mb-3 h-1 w-10 rounded-full" />

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">Einstellungen</h2>
          <button type="button" onClick={onClose} aria-label="Schließen" className="ink-5 flex h-9 w-9 items-center justify-center rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* Spieleranzahl */}
        <div className="ink-5 mb-4 flex items-center justify-between rounded-2xl px-4 py-3">
          <span className="font-medium">Spieler</span>
          <div className="flex items-center gap-3">
            <Stepper icon={<Minus size={16} />} disabled={players.length <= MIN_PLAYERS} onClick={() => onSetCount(players.length - 1)} />
            <span className="w-6 text-center text-lg font-bold tabular-nums">{players.length}</span>
            <Stepper icon={<Plus size={16} />} disabled={players.length >= MAX_PLAYERS} onClick={() => onSetCount(players.length + 1)} />
          </div>
        </div>

        {/* Design */}
        <div className="ink-5 mb-6 rounded-2xl p-3">
          <div className="mb-2 px-1 font-medium">Design</div>
          <div className="grid grid-cols-3 gap-2">
            {THEME_KEYS.map((key) => {
              const active = key === theme
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSetTheme(key)}
                  className={`flex flex-col items-center gap-2 rounded-xl p-2 text-center transition-colors ${active ? 'btn-primary' : 'surface'}`}
                >
                  <span className="h-10 w-full rounded-lg" style={{ background: THEMES[key].preview }} />
                  <span>
                    <span className="block text-sm font-semibold">{THEMES[key].label}</span>
                    <span className="block text-[11px] opacity-60">{THEMES[key].hint}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Spiel-Overlay */}
        <div className="ink-5 mb-6 rounded-2xl p-3">
          <div className="mb-2 px-1 font-medium">Spiel</div>
          <div className="grid grid-cols-2 gap-2">
            {GAME_KEYS.map((key) => {
              const active = key === game
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSetGame(key)}
                  className={`rounded-xl px-2 py-2 text-center transition-colors ${active ? 'btn-primary' : 'surface'}`}
                >
                  <span className="block text-sm font-semibold">{GAMES[key].label}</span>
                  <span className="block text-[11px] opacity-60">{GAMES[key].hint}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Schrift */}
        <div className="ink-5 mb-6 rounded-2xl p-3">
          <div className="mb-2 px-1 font-medium">Schrift</div>
          <div className="grid grid-cols-3 gap-2">
            {FONT_KEYS.map((key) => {
              const active = key === font
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSetFont(key)}
                  className={`rounded-xl px-2 py-2 text-center transition-colors ${active ? 'btn-primary' : 'surface'}`}
                  style={{ fontFamily: FONTS[key].family }}
                >
                  <span className="block text-2xl font-bold tabular-nums leading-tight">42</span>
                  <span className="block text-sm font-semibold">{FONTS[key].label}</span>
                  <span className="block text-[11px] opacity-60">{FONTS[key].hint}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Pro Spieler: Name + Farbe */}
        <div className="flex flex-col gap-3">
          {players.map((p, i) => (
            <div key={p.id} className="ink-5 rounded-2xl p-3">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="h-8 w-8 shrink-0 rounded-full"
                  style={{ background: PALETTE[p.color]?.hex, boxShadow: `0 4px 14px -2px ${PALETTE[p.color]?.hex}` }}
                />
                <input
                  value={p.name}
                  maxLength={12}
                  placeholder={`Spieler ${i + 1}`}
                  onChange={(e) => onUpdate(p.id, { name: e.target.value })}
                  className="input surface flex-1 rounded-xl px-3 py-2 outline-none"
                />
              </div>
              <div className="grid grid-cols-9 gap-2">
                {PALETTE_KEYS.map((key) => {
                  const active = key === p.color
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-label={PALETTE[key].label}
                      onClick={() => onUpdate(p.id, { color: key })}
                      className={`aspect-square w-full rounded-full transition-transform ${active ? 'scale-110' : 'opacity-80'}`}
                      style={{
                        background: PALETTE[key].hex,
                        boxShadow: active ? '0 0 0 2px var(--sheet-solid), 0 0 0 4px var(--text)' : undefined,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <button type="button" onClick={onClose} className="btn-primary mt-6 w-full rounded-2xl py-3.5 text-base font-bold active:scale-[0.98]">
          Fertig
        </button>
      </div>
    </>
  )
}

function Stepper({ icon, disabled, onClick }: { icon: React.ReactNode; disabled: boolean; onClick: () => void }) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} className="surface flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30">
      {icon}
    </button>
  )
}
