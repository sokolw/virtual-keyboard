import Utilities from './Utilities';

export default class TextContainer {
  currentPositionCaret;

  CURRENT_LENGTH_ROW = 54;

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

  updateCurrentPositionCaretOfContainer() {
    this.inputContainer.setSelectionRange(this.currentPositionCaret, this.currentPositionCaret);
  }

  updateTextContainer() {
    this.inputContainer.textContent = this.charVault.join('');
    this.inputContainer.setSelectionRange(this.currentPositionCaret, this.currentPositionCaret);
  }

  backspace() {
    if (this.getCurrentPositionCaret() === this.charVault.length) {
      this.charVault.pop();
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret());
      this.updateTextContainer();
    } else if (this.getCurrentPositionCaret() - 1 > -1) {
      this.charVault.splice(this.getCurrentPositionCaret() - 1, 1);
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() - 1);
      this.updateTextContainer();
    }
  }

  delete() {
    if (!(this.getCurrentPositionCaret() === this.charVault.length)) {
      this.charVault.splice(this.getCurrentPositionCaret(), 1);
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret());
      this.updateTextContainer();
    }
  }

  enter() {
    this.addChar('\n');
  }

  tab() {
    const spaces = 4;
    for (let time = 0; time < spaces; time += 1) {
      this.addChar(' ');
    }
  }

  up() {
    const upPart = this.charVault.slice(0, this.getCurrentPositionCaret()).join('').split('\n');
    if (upPart.length === 1) {
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() - this.CURRENT_LENGTH_ROW);
    } else if (upPart[upPart.length - 1].length > this.CURRENT_LENGTH_ROW) {
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() - this.CURRENT_LENGTH_ROW);
    } else if (upPart[upPart.length - 1].length < upPart[upPart.length - 2].length) {
      const shiftedPosition = this.getCurrentPositionCaret()
      - ((upPart[upPart.length - 2].length - upPart[upPart.length - 1].length)
      + upPart[upPart.length - 1].length) - 1;
      this.updateCurrentPositionCaret(shiftedPosition);
    } else {
      const shiftedPosition = this.getCurrentPositionCaret() - upPart[upPart.length - 1].length - 1;
      this.updateCurrentPositionCaret(shiftedPosition);
    }
    if (this.currentPositionCaret >= 0) {
      this.updateCurrentPositionCaretOfContainer();
    }
  }

  down() {
    const upPart = this.charVault.slice(0, this.getCurrentPositionCaret()).join('').split('\n');
    const downPart = this.charVault.slice(this.getCurrentPositionCaret()).join('').split('\n');
    if (downPart.length === 1) {
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() + this.CURRENT_LENGTH_ROW);
    } else if (downPart[0].length > this.CURRENT_LENGTH_ROW) {
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() + this.CURRENT_LENGTH_ROW);
    } else if (downPart[0].length < downPart[1].length) {
      const shiftedPosition = this.getCurrentPositionCaret()
      + (downPart[0].length + upPart[upPart.length - 1].length) + 1;
      this.updateCurrentPositionCaret(shiftedPosition);
    } else {
      const shiftedPosition = this.getCurrentPositionCaret()
      + (downPart[0].length + upPart[upPart.length - 1].length) + 1;
      this.updateCurrentPositionCaret(shiftedPosition);
    }
    if (this.currentPositionCaret > 0) {
      this.updateCurrentPositionCaretOfContainer();
    }
  }

  left() {
    if (this.getCurrentPositionCaret() > 0) {
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() - 1);
      this.updateCurrentPositionCaretOfContainer();
    }
  }

  right() {
    if (this.getCurrentPositionCaret() > -1) {
      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() + 1);
      this.updateCurrentPositionCaretOfContainer();
    }
  }
}
