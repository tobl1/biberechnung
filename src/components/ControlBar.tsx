import { useEffect, useState } from 'react'
import { RotateCcw, Settings } from 'lucide-react'

type Props = {
  onReset: () => void
  onOpenSettings: () => void
}

// Schwebende Pille unten: Reset (zweimal tippen) + Einstellungen
export function ControlBar({ onReset, onOpenSettings }: Props) {
  const [armed, setArmed] = useState(false)

  // Sicherheitsabfrage läuft nach 3 s ab
  useEffect(() => {
    if (!armed) return
    const t = setTimeout(() => setArmed(false), 3000)
    return () => clearTimeout(t)
  }, [armed])

  const handleReset = () => {
    if (!armed) { setArmed(true); return }
    onReset()
    setArmed(false)
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center pb-[max(env(safe-area-inset-bottom),12px)]">
      <div className="pointer-events-auto glass-strong flex items-center gap-1 rounded-full p-1.5">
        <button
          type="button"
          onClick={handleReset}
          aria-label={armed ? 'Nochmal tippen zum Zurücksetzen' : 'Neustart'}
          className={`flex h-12 w-12 items-center justify-center rounded-full transition-all ${
            armed ? 'bg-rose-500 text-white scale-110' : 'text-[#14231c]/80 hover:bg-black/5'
          }`}
        >
          <RotateCcw size={20} />
        </button>
        <button
          type="button"
          onClick={onOpenSettings}
          aria-label="Einstellungen"
          className="flex h-12 w-12 items-center justify-center rounded-full text-[#14231c]/80 hover:bg-black/5"
        >
          <Settings size={20} />
        </button>
      </div>
    </div>
  )
}
