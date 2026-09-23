// Karten-Template: die vier Farben als kleine Symbole, versetzt gekachelt.
import { HEART, SPADE, DIAMOND, CLUB, t } from './suits'

export const CARD_SIZE = 72

const S = CARD_SIZE
const H = S / 2
const SC = 0.42 // Symbolgröße

// Versetztes Raster: vier Symbole pro Kachel, an den Rändern gespiegelt fortgesetzt
export const CARD_PATTERNS: string[] = [
  t(HEART, H * 0.5, H * 0.5, SC) +
    t(SPADE, H * 1.5, H * 0.5, SC) +
    t(DIAMOND, H * 0.5, H * 1.5, SC) +
    t(CLUB, H * 1.5, H * 1.5, SC),
]
