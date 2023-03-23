import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be a currency');
    }
    this._amount = amount; //eslint-disable-line
    this._currency = currency; //eslint-disable-line
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = amount; //eslint-disable-line
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be a currency');
    }
    this._currency = currency; //eslint-disable-line
  }

  get amount() {
    return this._amount; // eslint-disable-line
  }

  get currency() {
    return this._currency; // eslint-disable-line
  }

  displayFullPrice() {
    const currDisplay = this._currency.displayFullCurrency(); // eslint-disable-line
    return `${this._amount} ${currDisplay}`; // eslint-disable-line
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
