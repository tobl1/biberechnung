import { PATTERNS, PATTERN_SIZE } from '../lib/patterns'

// Inline-SVG mit <pattern>, damit das Muster als Vektor scharf bleibt (Background-Images werden auf iOS gern unscharf)
export function TilePattern({ id, index, color }: { id: string; index: number; color: string }) {
  const pid = `pat-${id}`
  return (
    <svg className="tile-art pointer-events-none absolute inset-0 h-full w-full" style={{ color }} aria-hidden>
      <defs>
        <pattern
          id={pid}
          width={PATTERN_SIZE}
          height={PATTERN_SIZE}
          patternUnits="userSpaceOnUse"
          dangerouslySetInnerHTML={{ __html: PATTERNS[index % PATTERNS.length] }}
        />
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  )
}
