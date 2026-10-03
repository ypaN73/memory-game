import { createElement } from '../utils/dom.js'

export function createHeader(onNewGame, onShowLeaderboard) {
  const newGameBtn = createElement('button', {
    classes: ['btn', 'btn--ghost'],
    text: 'New game',
    attrs: { type: 'button' },
  })
  newGameBtn.addEventListener('click', onNewGame)

  const leadersBtn = createElement('button', {
    classes: ['btn', 'btn--primary'],
    text: 'Leaderboard',
    attrs: { type: 'button' },
  })
  leadersBtn.addEventListener('click', onShowLeaderboard)

  return createElement('header', {
    classes: ['header'],
    children: [
      createElement('span', { classes: ['header__title'], text: 'Memory' }),
      createElement('div', { classes: ['header__actions'], children: [newGameBtn, leadersBtn] }),
    ],
  })
}