import { createElement } from '../utils/dom.js'
import { loadResults, formatDate } from '../game/storage.js'

export function createLeaderboardContent() {
  const results = loadResults()
  const title = createElement('h2', { classes: ['modal__title'], text: 'Leaderboard' })

  const closeBtn = createElement('button', {
    classes: ['btn', 'btn--primary', 'modal__close'],
    text: 'Close',
    attrs: { type: 'button', 'data-close': 'true' },
  })

  if (results.length === 0) {
    return [
      title,
      createElement('p', { classes: ['modal__text'], text: 'No results yet' }),
      closeBtn,
    ]
  }

  const rows = results.map((r, i) => createElement('tr', {
    children: [
      createElement('td', { text: String(i + 1) }),
      createElement('td', { text: String(r.moves) }),
      createElement('td', { text: formatDate(r.date) }),
    ],
  }))

  const table = createElement('table', {
    classes: ['leaderboard'],
    children: [
      createElement('thead', {
        children: [createElement('tr', {
          children: [
            createElement('th', { text: '#' }),
            createElement('th', { text: 'Moves' }),
            createElement('th', { text: 'Date' }),
          ],
        })],
      }),
      createElement('tbody', { children: rows }),
    ],
  })

  return [title, table, closeBtn]
}