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
    this.addWrapper();
  }

  addWrapper() {
    this.wrapper = Utilities.createDivElement();
    this.wrapper.classList.add('wrapper');
  }
}
