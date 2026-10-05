import { createElement } from '../utils/dom.js'

export function createModal() {
  const content = createElement('div', { classes: ['modal__content'] })
  const wrap = createElement('div', { classes: ['modal__wrap'], children: [content] })

  const dialog = createElement('dialog', {
    classes: ['modal'],
    children: [wrap],
  })

  function onKeydown(event) {
    if (event.key === 'Escape') close()
  }

  function onWrapClick(event) {
    if (event.target === wrap) close()
  }

  function open(children) {
    content.replaceChildren(...children)
    document.body.classList.add('no-scroll')
    dialog.showModal()
    document.addEventListener('keydown', onKeydown)
    wrap.addEventListener('click', onWrapClick)
  }

  function close() {
    if (dialog.open) dialog.close()
    document.body.classList.remove('no-scroll')
    document.removeEventListener('keydown', onKeydown)
    wrap.removeEventListener('click', onWrapClick)
  }

  return { root: dialog, open, close }
}