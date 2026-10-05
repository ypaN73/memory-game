import { createElement } from '../utils/dom.js'
import { PAIRS_COUNT } from '../data/cards.js'

export function createCounters() {
  const movesValue = createElement('span', { classes: ['counter__value'], text: '0' })
  const pairsValue = createElement('span', { text: '0' })

  const root = createElement('div', {
    classes: ['counters'],
    children: [
      createElement('div', {
        classes: ['counter'],
        children: [
          createElement('span', { classes: ['counter__label'], text: 'Moves' }),
          movesValue,
        ],
      }),
      createElement('div', {
        classes: ['counter'],
        children: [
          createElement('span', { classes: ['counter__label'], text: 'Pairs' }),
          createElement('span', {
            classes: ['counter__value'],
            children: [pairsValue, document.createTextNode(` / ${PAIRS_COUNT}`)],
          }),
        ],
      }),
    ],
  })

  return {
    root,
    update(moves, pairs) {
      movesValue.textContent = String(moves)
      pairsValue.textContent = String(pairs)
    },
  }
}