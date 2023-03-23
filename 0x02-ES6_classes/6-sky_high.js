import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw TypeError('Floor must be a number');
    }
    this._floors = floors; // eslint-disable-line
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw TypeError('Floor must be a number');
    }
    this._floors = floors; // eslint-disable-line
  }

  get floors() {
    return this._floors // eslint-disable-line
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // eslint-disable-line
  }
}
