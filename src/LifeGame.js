const Cell = require('../src/Cell');

class LifeGame {
  constructor() {}
  
  getBoard () {
    return this.board
  }
  
  initBoard () {
    this.board = {
      width: 50,
      height: 50
    }
  }
  
  initCells () {
    this.board.cells = [...Array(50)].map(x => [...Array(50)].map(y => new Cell(x, y, 0)))
    console.log(this.board.cells)
  }
}

module.exports = LifeGame