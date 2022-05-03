import Utilities from './Utilities';

export default class Environment {
  wrapper;

  constructor() {
    this.init();
  }

  get getWrapper() {
    return this.wrapper;
  }

  init() {
    Environment.createHead();
    this.addWrapper();
  }

  static createHead() {
    // реализовать добавление head
  }

  addWrapper() {
    this.wrapper = Utilities.createDivElement();
    this.wrapper.classList.add('wrapper');
  }
}
