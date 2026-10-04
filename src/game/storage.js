const STORAGE_KEY = 'memory-game-leaderboard'
const MAX_RESULTS = 10

export function loadResults() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveResult(moves) {
  const results = loadResults()
  results.push({ moves, date: new Date().toISOString() })

  results.sort((a, b) => {
    if (a.moves !== b.moves) return a.moves - b.moves
    return new Date(a.date) - new Date(b.date)
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(results.slice(0, MAX_RESULTS)))
}

export function formatDate(iso) {
  const d = new Date(iso)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `${day}.${month}.${year}`
}