const assert = require('assert')
const LifeGame = require('../src/LifeGame');


it('should init game', () => {
  let game = new LifeGame()
  assert.strictEqual(game instanceof LifeGame, true)
})

it('should init 50x50 board game', () => {
  let game = new LifeGame()
  game.initBoard()
  assert.strictEqual(game.getBoard().width, 50)
  assert.strictEqual(game.getBoard().height, 50)
})

it('should init cells', () => {
  let game = new LifeGame()
  game.initBoard()
  game.initCells()
  const boardIsFilledWithCells = game.getBoard().every(row => row.every(cell => cell instanceof Cell))
  assert.strictEqual(boardIsFilledWithCells, true)
})