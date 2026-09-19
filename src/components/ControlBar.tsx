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
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center pb-[max(env(safe-area-inset-bottom),10px)]">
      <div className="pointer-events-auto glass-strong flex items-center gap-0.5 rounded-full p-1">
        <button
          type="button"
          onClick={handleReset}
          aria-label={armed ? 'Nochmal tippen zum Zurücksetzen' : 'Neustart'}
          className={`flex h-9 w-11 items-center justify-center rounded-full transition-all ${
            armed ? 'bg-rose-500 text-white scale-105' : 'opacity-80'
          }`}
        >
          <RotateCcw size={18} />
        </button>
        <button
          type="button"
          onClick={onOpenSettings}
          aria-label="Einstellungen"
          className="flex h-9 w-11 items-center justify-center rounded-full opacity-80"
        >
          <Settings size={18} />
        </button>
      </div>
    </div>
  )
}
