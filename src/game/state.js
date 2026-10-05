import { CARD_TYPES } from '../data/cards.js'
import { shuffle } from '../utils/shuffle.js'

export function createDeck() {
  const deck = []
  let uid = 0

  for (const type of CARD_TYPES) {
    deck.push({ uid: (uid += 1), typeId: type.id, label: type.label, src: type.src, isFlipped: false, isMatched: false })
    deck.push({ uid: (uid += 1), typeId: type.id, label: type.label, src: type.src, isFlipped: false, isMatched: false })
  }

  return shuffle(deck)
}

export function createGame() {
  return {
    cards: createDeck(),
    moves: 0,
    pairsFound: 0,
    firstUid: null,
    isLocked: false,
    closeTimerId: null,
    isGameOver: false,
  }
}