import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super(sqft);
    if (typeof floor !== 'number') {
      throw TypeError('Floor must be a number');
    }
    this._floor = floor; // eslint-disable-line
  }

  set floor(floor) {
    if (typeof floor !== 'number') {
      throw TypeError('Floor must be a number');
    }
    this._floor = floor; // eslint-disable-line
  }

  get floor() {
    return this._floor // eslint-disable-line
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors`; // eslint-disable-line
  }
}
