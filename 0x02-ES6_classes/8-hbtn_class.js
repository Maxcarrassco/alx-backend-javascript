export default class Airport {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._size = size; // eslint-disable-line
    this._location = location; // eslint-disable-line
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._location = location; // eslint-disable-line
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }
    this._size = size; // eslint-disable-line
  }

  get location() {
    return this._location; // eslint-disable-line
  }

  get size() {
    return this._size; // eslint-disable-line
  }

  [Symbol.toPrimitive](type) {
    if (type === 'string') {
      return this._location; // eslint-disable-line
    }
    return this._size; // eslint-disable-line
  }
}
