import { createElement } from '../utils/dom.js'

export function createWinContent(moves, onNewGame) {
  const newGameBtn = createElement('button', {
    classes: ['btn', 'btn--primary'],
    text: 'New game',
    attrs: { type: 'button' },
  })
  newGameBtn.addEventListener('click', onNewGame)

  const closeBtn = createElement('button', {
    classes: ['btn', 'btn--ghost'],
    text: 'Close',
    attrs: { type: 'button', 'data-close': 'true' },
  })

  return [
    createElement('h2', { classes: ['modal__title'], text: 'You win!' }),
    createElement('p', {
      classes: ['modal__text'],
      text: `You found all pairs in ${moves} moves.`,
    }),
    createElement('div', {
      classes: ['modal__actions'],
      children: [closeBtn, newGameBtn],
    }),
  ]
}