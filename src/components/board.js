import { createElement } from '../utils/dom.js'
import { createCard } from './card.js'

export function createBoard(cards, onCardClick) {
  const board = createElement('div', { classes: ['board'] })
  const cardEls = cards.map((card) => createCard(card, onCardClick))
  board.append(...cardEls)
  return { root: board, cardEls }
}