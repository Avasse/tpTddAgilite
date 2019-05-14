class Cell {
  constructor(x, y, state) {
    this._x     = x
    this._y     = y
    this._state = state
  }
  
  get x () {
    return this._x
  }
  
  set x (value) {
    this._x = value
  }
  
  get y () {
    return this._y
  }
  
  set y (value) {
    this._y = value
  }
  
  get state () {
    return this._state
  }
  
  set state (value) {
    this._state = value
  }
}

module.exports = Cell