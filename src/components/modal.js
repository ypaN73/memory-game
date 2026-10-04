import { createElement } from '../utils/dom.js'

export function createModal() {
  const content = createElement('div', { classes: ['modal__content'] })
  const dialog = createElement('dialog', {
    classes: ['modal'],
    children: [content],
  })

  function onKeydown(event) {
    if (event.key === 'Escape') close()
  }

  function open(children) {
    content.replaceChildren(...children)
    document.body.classList.add('no-scroll')
    dialog.showModal()
    document.addEventListener('keydown', onKeydown)
  }

  function close() {
    dialog.close()
    document.body.classList.remove('no-scroll')
    document.removeEventListener('keydown', onKeydown)
  }

  return { root: dialog, open, close }
}