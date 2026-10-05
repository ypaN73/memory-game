import { createElement } from '../utils/dom.js'

export function createCard(card, onClick) {
  const img = createElement('img', {
    classes: ['card__image'],
    attrs: { src: card.src, alt: card.label, draggable: 'false' },
  })

  const front = createElement('div', { classes: ['card__face', 'card__face--front'], children: [img] })
  const back = createElement('div', { classes: ['card__face', 'card__face--back'] })
  const inner = createElement('div', { classes: ['card__inner'], children: [back, front] })

  const button = createElement('button', {
    classes: ['card'],
    attrs: { type: 'button', 'aria-label': `Card ${card.uid}` },
    dataset: { uid: String(card.uid) },
    children: [inner],
  })

  button.addEventListener('click', () => onClick(card.uid))

  return button
}