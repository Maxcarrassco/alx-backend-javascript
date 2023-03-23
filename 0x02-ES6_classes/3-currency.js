export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._code = code; // eslint-disable-line
    this._name = name; // eslint-disable-line
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name; // eslint-disable-line
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = code; // eslint-disable-line
  }

  get name() {
    return this._name; // eslint-disable-line
  }

  get code() {
    return this._code; // eslint-disable-line
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`; // eslint-disable-line
  }
}
