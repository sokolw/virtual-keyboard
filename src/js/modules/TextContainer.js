import Utilities from './Utilities';

export default class TextContainer {
  currentPositionCaret;

  constructor() {
    this.charVault = [];
    this.inputContainer = TextContainer.createInputContainer();
    // this.init();
  }

  get getInputContainer() {
    return this.inputContainer;
  }

  // init() {
  //   this.inputContainer;
  // }

  static createInputContainer() {
    const temp = Utilities.createTextareaElement();
    temp.classList.add('textarea', 'input-window__textarea');
    return temp;
  }

  addChar(char) {
    if (this.getCurrentPositionCaret() === this.charVault.length) {
      this.charVault.push(char);
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() + 1);
      this.updateTextContainer();
    } else {
      this.charVault.splice(this.getCurrentPositionCaret(), 0, char);
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() + 1);
      this.updateTextContainer();
    }
  }

  updateCurrentPositionCaret(position) {
    this.currentPositionCaret = position;
  }

  getCurrentPositionCaret() {
    return this.inputContainer.selectionStart;
  }

  updateTextContainer() {
    this.inputContainer.textContent = this.charVault.join('');
    this.inputContainer.setSelectionRange(this.currentPositionCaret, this.currentPositionCaret);
  }
}
