// Fester Hintergrund hinter allem: langsam driftende Farbflecken + optionale Körnung (per Theme in CSS)
export function Background() {
  return (
    <>
      <div className="bg-layer" aria-hidden>
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="blob blob-4" />
      </div>
      <div className="grain" aria-hidden />
    </>
  )
}
