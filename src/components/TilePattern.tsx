import { PATTERNS, PATTERN_SIZE } from '../lib/patterns'
import { CARD_PATTERNS, CARD_SIZE } from '../lib/cards'
import type { PatternSet } from '../lib/games'

// Inline-SVG mit <pattern>, damit das Muster als Vektor scharf bleibt (Background-Images werden auf iOS gern unscharf)
export function TilePattern({ id, index, color, set }: { id: string; index: number; color: string; set: PatternSet }) {
  const pid = `pat-${id}`
  const list = set === 'cards' ? CARD_PATTERNS : PATTERNS
  const size = set === 'cards' ? CARD_SIZE : PATTERN_SIZE
  return (
    <svg className="tile-art pointer-events-none absolute inset-0 h-full w-full" style={{ color }} aria-hidden>
      <defs>
        <pattern
          id={pid}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          dangerouslySetInnerHTML={{ __html: list[index % list.length] }}
        />
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  )
}
