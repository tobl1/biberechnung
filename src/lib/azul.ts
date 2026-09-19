// Azulejo-inspirierte Kachelmuster als SVG-Data-URIs. Jeder Spieler bekommt (nach Index) ein anderes Muster,
// eingefärbt in seiner Spielerfarbe.

const S = 80 // Kachelgröße in px

function svg(body: string): string {
  const doc = `<svg xmlns='http://www.w3.org/2000/svg' width='${S}' height='${S}' viewBox='0 0 ${S} ${S}'>${body}</svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(doc)}")`
}

const PATTERNS: Array<(c: string) => string> = [
  // 0: Achtzackiger Stern
  (c) => svg(`<g fill='${c}'><polygon points='40,6 46,30 70,30 51,44 58,68 40,54 22,68 29,44 10,30 34,30'/><circle cx='40' cy='40' r='6' fill='#fff' opacity='.7'/></g><g fill='none' stroke='${c}' stroke-width='2'><circle cx='0' cy='0' r='10'/><circle cx='80' cy='0' r='10'/><circle cx='0' cy='80' r='10'/><circle cx='80' cy='80' r='10'/></g>`),
  // 1: Vierpass
  (c) => svg(`<g fill='none' stroke='${c}' stroke-width='3'><circle cx='40' cy='22' r='12'/><circle cx='40' cy='58' r='12'/><circle cx='22' cy='40' r='12'/><circle cx='58' cy='40' r='12'/></g><circle cx='40' cy='40' r='5' fill='${c}'/><g fill='${c}'><circle cx='0' cy='0' r='4'/><circle cx='80' cy='0' r='4'/><circle cx='0' cy='80' r='4'/><circle cx='80' cy='80' r='4'/></g>`),
  // 2: Rautengitter
  (c) => svg(`<g fill='none' stroke='${c}' stroke-width='2.5'><path d='M40 0 L80 40 L40 80 L0 40 Z'/><path d='M40 20 L60 40 L40 60 L20 40 Z'/><path d='M0 0 L80 80 M80 0 L0 80'/></g><circle cx='40' cy='40' r='4' fill='${c}'/>`),
  // 3: Blüte
  (c) => svg(`<g fill='${c}' opacity='.9'><ellipse cx='40' cy='20' rx='7' ry='16'/><ellipse cx='40' cy='60' rx='7' ry='16'/><ellipse cx='20' cy='40' rx='16' ry='7'/><ellipse cx='60' cy='40' rx='16' ry='7'/></g><g fill='none' stroke='${c}' stroke-width='2'><ellipse cx='40' cy='40' rx='9' ry='9'/><path d='M0 10 Q10 10 10 0 M70 0 Q70 10 80 10 M80 70 Q70 70 70 80 M10 80 Q10 70 0 70'/></g>`),
  // 4: Zickzack
  (c) => svg(`<g fill='none' stroke='${c}' stroke-width='4'><path d='M0 15 L20 35 L40 15 L60 35 L80 15'/><path d='M0 45 L20 65 L40 45 L60 65 L80 45'/></g><g fill='${c}'><circle cx='20' cy='10' r='3'/><circle cx='60' cy='10' r='3'/><circle cx='20' cy='40' r='3'/><circle cx='60' cy='40' r='3'/><circle cx='20' cy='70' r='3'/><circle cx='60' cy='70' r='3'/></g>`),
  // 5: Kreuz mit Punkten
  (c) => svg(`<g fill='${c}'><rect x='34' y='10' width='12' height='60' rx='3'/><rect x='10' y='34' width='60' height='12' rx='3'/></g><g fill='none' stroke='${c}' stroke-width='2.5'><circle cx='20' cy='20' r='7'/><circle cx='60' cy='20' r='7'/><circle cx='20' cy='60' r='7'/><circle cx='60' cy='60' r='7'/></g>`),
  // 6: Schuppen
  (c) => svg(`<g fill='none' stroke='${c}' stroke-width='2.5'><path d='M0 40 A20 20 0 0 1 40 40 A20 20 0 0 1 80 40'/><path d='M-20 80 A20 20 0 0 1 20 80 A20 20 0 0 1 60 80 A20 20 0 0 1 100 80'/><path d='M-20 0 A20 20 0 0 1 20 0 A20 20 0 0 1 60 0 A20 20 0 0 1 100 0'/><path d='M0 40 A20 20 0 0 0 40 40 A20 20 0 0 0 80 40' opacity='.5'/></g>`),
  // 7: Sechseck-Stern
  (c) => svg(`<g fill='none' stroke='${c}' stroke-width='2.5'><polygon points='40,8 68,24 68,56 40,72 12,56 12,24'/><polygon points='40,20 57,30 57,50 40,60 23,50 23,30'/></g><g fill='${c}'><circle cx='40' cy='40' r='6'/><circle cx='0' cy='40' r='3'/><circle cx='80' cy='40' r='3'/><circle cx='40' cy='0' r='3'/><circle cx='40' cy='80' r='3'/></g>`),
]

export function azulPattern(index: number, color: string): string {
  return PATTERNS[index % PATTERNS.length](color)
}
