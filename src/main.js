import './style.css'
import { createGame } from './game/state.js'
import { saveResult } from './game/storage.js'
import { createHeader } from './components/header.js'
import { createCounters } from './components/counters.js'
import { createBoard } from './components/board.js'
import { createModal } from './components/modal.js'
import { createLeaderboardContent } from './components/leaderboard.js'
import { createWinContent } from './components/winModal.js'
import { PAIRS_COUNT } from './data/cards.js'

const CLOSE_DELAY_MS = 1000

const state = createGame()
const counters = createCounters()
const modal = createModal()

const container = document.createElement('div')
container.className = 'app'

const header = createHeader(
  () => console.log('new game'),
  handleShowLeaderboard,
)
const board = createBoard(state.cards, handleCardClick)

container.append(header, counters.root, board.root)
document.body.append(container, modal.root)

modal.root.addEventListener('click', (event) => {
  const target = event.target
  if (target instanceof HTMLElement && target.dataset.close === 'true') {
    modal.close()
  }
})

function updateCardElement(uid, isFlipped, isMatched) {
  const el = board.root.querySelector(`[data-uid="${uid}"]`)
  if (!el) return
  el.classList.toggle('is-flipped', isFlipped)
  el.classList.toggle('is-matched', isMatched)
}

function handleCardClick(uid) {
  if (state.isLocked || state.isGameOver) return

  const card = state.cards.find((c) => c.uid === uid)
  if (!card || card.isFlipped || card.isMatched) return

  card.isFlipped = true
  updateCardElement(uid, true, false)

  if (state.firstUid === null) {
    state.firstUid = uid
    return
  }

  state.moves += 1
  counters.update(state.moves, state.pairsFound)

  const first = state.cards.find((c) => c.uid === state.firstUid)
  const second = card
  state.isLocked = true

  if (first.typeId === second.typeId) {
    first.isMatched = true
    second.isMatched = true
    state.pairsFound += 1
    counters.update(state.moves, state.pairsFound)
    state.firstUid = null
    state.isLocked = false

    if (state.pairsFound === PAIRS_COUNT) {
      state.isGameOver = true
      saveResult(state.moves)
      modal.open(createWinContent(state.moves, () => console.log('new game')))
    }
    return
  }

  state.closeTimerId = setTimeout(() => {
    first.isFlipped = false
    second.isFlipped = false
    updateCardElement(first.uid, false, false)
    updateCardElement(second.uid, false, false)
    state.firstUid = null
    state.isLocked = false
    state.closeTimerId = null
  }, CLOSE_DELAY_MS)
}

function handleShowLeaderboard() {
  modal.open(createLeaderboardContent())
}