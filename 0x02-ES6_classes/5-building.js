export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    if (this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft; // eslint-disable-line
  }

  evacuationWarningMessage() { // eslint-disable-line
  }

  set sqft(sqft) {
    this._sqft = sqft; // eslint-disable-line
  }

  get sqft() {
    return this._sqft // eslint-disable-line
  }
}
