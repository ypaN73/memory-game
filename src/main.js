import './style.css'
import { createGame } from './game/state.js'
import { createHeader } from './components/header.js'
import { createCounters } from './components/counters.js'
import { createBoard } from './components/board.js'

const state = createGame()
const counters = createCounters()

const header = createHeader(
  () => console.log('new game'),
  () => console.log('leaderboard'),
)

const board = createBoard(state.cards, (uid) => console.log('click', uid))

const container = document.createElement('div')
container.className = 'app'
container.append(header, counters.root, board.root)

document.body.append(container)