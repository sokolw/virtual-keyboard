import KeyboardKeysData from './KeyboardKeysData';
import Utilities from './Utilities';

export default class Keyboard {
  keyboard;

  currentLanguageData;

  currentCaretPosition;

  constructor(textContainer = null, language = 'en') {
    this.keysData = new KeyboardKeysData();
    // temp
    this.inputContainer = textContainer.getInputContainer;
    // new use start
    this.textContainer = textContainer;
    // new use end
    this.buttonsInContainer = new Map();
    this.language = language;
    this.virtualCommandCombineKeys = new Map([['CapsLock', false], ['ShiftLeft', false], ['ShiftRight', false], ['ControlLeft', false], ['ControlRight', false], ['MetaLeft', false], ['AltLeft', false], ['AltRight', false]]);
    this.init();
  }

  init() {
    this.addLanguage(this.language);
    this.createKeyboardBox();
    // init eng keys
    this.currentLanguageData[0].forEach(this.createKeys.bind(this));
    this.createGlobalKeyHandlers();
  }

  createKeyboardBox() {
    this.keyboard = Utilities.createDivElement();
    this.keyboard.classList.add('keyboard', 'wrapper__keyboard');
  }

  createKeys(value, key) {
    const keyboardButton = Utilities.createDivElement();
    const spanItem = Utilities.createSpanElement();
    this.buttonsInContainer.set(key, keyboardButton);

    if (['Backspace', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'Space'].includes(key)) {
      keyboardButton.classList.add('keyboard-button', `keyboard-button_${value.length <= 1 ? 'space' : value.toLowerCase()}`);
      spanItem.textContent = value;
      this.addKeyHandlers(keyboardButton);
      keyboardButton.setAttribute('data-id', `${key}`);
    } else {
      keyboardButton.classList.add('keyboard-button');
      spanItem.textContent = value;
      this.addKeyHandlers(keyboardButton);
      keyboardButton.setAttribute('data-id', `${key}`);
    }

    keyboardButton.append(spanItem);
    // add to container
    this.keyboard.append(keyboardButton);
  }

  addKeyHandlers(key) {
    key.addEventListener('mousedown', this.mousedownHandler.bind(this));
    key.addEventListener('mouseup', this.mouseupHandler.bind(this));
    key.addEventListener('mouseout', this.mouseoutHandler.bind(this));
  }

  createGlobalKeyHandlers() {
    window.addEventListener('keydown', this.keydownHandler.bind(this));
    window.addEventListener('keyup', this.keyupHandler.bind(this));
    // window.addEventListener('blur', this.blurHandler.bind(this));
  }

  // key events
  keydownHandler(event) {
    if (this.buttonsInContainer.has(event.code)) {
      event.preventDefault();
      this.currentCaretPosition = this.inputContainer.selectionStart;
      // eslint-disable-next-line no-console
      console.log(this.currentCaretPosition);
      // eslint-disable-next-line no-console
      // console.log(event.code); ControlLeft AltRight-toggled
      // this.activateButton(event);

      // engine
      if (this.virtualCommandCombineKeys.has(event.code)) {
        if (event.code === 'CapsLock') {
          this.toggleCapsLock(event);
        } else {
          this.activateButton(event);
          // switch language
          if (event.altKey && event.shiftKey) {
            if (this.virtualCommandCombineKeys.get('CapsLock')) {
              this.disableCapsLock('CapsLock');
              this.updateKeyboardLanguage();
              this.enableCapsLock('CapsLock');
            } else {
              this.updateKeyboardLanguage();
            }
          }
          // shift
          if (event.shiftKey && !event.altKey) {
            this.toggleShift(event.code);
          }
        }
      } else {
        this.activateButton(event);
        if (event.code === 'Backspace') {
          this.textContainer.backspace();
        } else if (event.code === 'Delete') {
          this.textContainer.delete();
        } else if (event.code === 'Enter') {
          this.textContainer.enter();
        } else if (event.code === 'Tab') {
          this.textContainer.tab();
        } else if (event.code === 'ArrowUp') {
          this.textContainer.up();
        } else if (event.code === 'ArrowDown') {
          this.textContainer.down();
        } else if (event.code === 'ArrowLeft') {
          this.textContainer.left();
        } else if (event.code === 'ArrowRight') {
          this.textContainer.right();
        } else {
          this.textContainer.addChar(this.isModifiedKey(event.code));
        }
        // работа с окном ??? скролл и тд
        this.inputContainer.scrollTop = this.inputContainer.scrollHeight;
        this.inputContainer.focus();
      }

      // this.inputContainer.textContent += `${event.code}->`;
      // this.inputContainer.textContent += `${this.currentLanguageData[0].get(event.code)}`;

      // this.currentCaretPosition = this.inputContainer.textContent.length;
      // this.inputContainer.setSelectionRange(this.current, this.currentCaretPosition);
    }
  }

  keyupHandler(event) {
    if (this.buttonsInContainer.has(event.code)) {
      if (event.code !== 'CapsLock') {
        this.disableButton(event);
        if (this.virtualCommandCombineKeys.has(event.code)) {
          if (this.virtualCommandCombineKeys.get(event.code)) {
            this.toggleShift(event.code);
          }
        }
      }
    }
  }

  // mouse events
  mousedownHandler(event) {
    const key = event.currentTarget.getAttribute('data-id');
    if (this.buttonsInContainer.has(key)) {
      if (!this.buttonsInContainer.get(key).classList.contains('active')) {
        this.buttonsInContainer.get(key).classList.add('active');
      }
      this.inputContainer.textContent += `${this.currentLanguageData[0].get(key)}`;
      this.inputContainer.scrollTop = this.inputContainer.scrollHeight;
    }
  }

  mouseupHandler(event) {
    const key = event.currentTarget.getAttribute('data-id');
    if (this.buttonsInContainer.has(key)) {
      if (this.buttonsInContainer.get(key).classList.contains('active')) {
        this.buttonsInContainer.get(key).classList.remove('active');
      }
    }
  }

  mouseoutHandler(event) {
    this.mouseupHandler(event);
  }

  // toggle language
  toggleLanguage(language) {
    if (language === 'en') {
      this.language = 'ru';
      this.currentLanguageData = [this.keysData.codeKeyRuMap, this.keysData.shiftedCodeKeyRuMap];
    }
    if (language === 'ru') {
      this.language = 'en';
      this.currentLanguageData = [this.keysData.codeKeyEnMap, this.keysData.shiftedCodeKeyEnMap];
    }
  }

  addLanguage(language) {
    if (language === 'en') {
      this.currentLanguageData = [this.keysData.codeKeyEnMap, this.keysData.shiftedCodeKeyEnMap];
    }
    if (language === 'ru') {
      this.currentLanguageData = [this.keysData.codeKeyRuMap, this.keysData.shiftedCodeKeyRuMap];
    }
  }

  updateKeyboardLanguage() {
    this.toggleLanguage(this.language);
    this.buttonsInContainer.forEach(this.updateKeys.bind(this));
  }

  updateKeys(value, key) {
    const temp = value;
    temp.firstChild.textContent = this.currentLanguageData[0].get(key);
  }

  blurHandler(event) { // no use
    // eslint-disable-next-line no-console
    console.log(`tab${event.code}${this.language}`);
  }

  toggleCapsLock(event) {
    const key = event.code;
    if (key === 'CapsLock') {
      if (!this.virtualCommandCombineKeys.get(key)) {
        this.activateButton(event);
        this.virtualCommandCombineKeys.set(key, true);
        if (this.virtualCommandCombineKeys.get('ShiftLeft') || this.virtualCommandCombineKeys.get('ShiftRight')) {
          this.buttonsInContainer.forEach(this.updateOnlyShiftKeys.bind(this));
        } else {
          this.buttonsInContainer.forEach(this.updateCapsKeys.bind(this));
        }
      } else {
        this.disableButton(event);
        this.virtualCommandCombineKeys.set(key, false);
        if (this.virtualCommandCombineKeys.get('ShiftLeft') || this.virtualCommandCombineKeys.get('ShiftRight')) {
          this.buttonsInContainer.forEach(this.updateShiftKeys.bind(this));
        } else {
          this.buttonsInContainer.forEach(this.updateCapsKeys.bind(this));
        }
      }
    }
  }

  disableCapsLock(keyCode) {
    if (keyCode === 'CapsLock') {
      if (this.buttonsInContainer.get(keyCode).classList.contains('active')) {
        this.buttonsInContainer.get(keyCode).classList.remove('active');
      }
      this.virtualCommandCombineKeys.set(keyCode, false);
      this.buttonsInContainer.forEach(this.updateCapsKeys.bind(this));
    }
  }

  enableCapsLock(keyCode) {
    if (keyCode === 'CapsLock') {
      if (!this.buttonsInContainer.get(keyCode).classList.contains('active')) {
        this.buttonsInContainer.get(keyCode).classList.add('active');
      }
      this.virtualCommandCombineKeys.set(keyCode, true);
      this.buttonsInContainer.forEach(this.updateCapsKeys.bind(this));
    }
  }

  activateButton(event) {
    if (!this.buttonsInContainer.get(event.code).classList.contains('active')) {
      this.buttonsInContainer.get(event.code).classList.add('active');
    }
  }

  disableButton(event) {
    if (this.buttonsInContainer.get(event.code).classList.contains('active')) {
      this.buttonsInContainer.get(event.code).classList.remove('active');
    }
  }

  updateCapsKeys(value, key) {
    if (this.currentLanguageData[0].get(key).length === 1 && this.virtualCommandCombineKeys.get('CapsLock')) {
      const temp = value;
      temp.firstChild.textContent = this.currentLanguageData[0].get(key).toUpperCase();
    } else if (this.currentLanguageData[0].get(key).length === 1) {
      const temp = value;
      temp.firstChild.textContent = this.currentLanguageData[0].get(key);
    }
  }

  isModifiedKey(keyCode) {
    if (this.virtualCommandCombineKeys.get('CapsLock') && !(this.virtualCommandCombineKeys.get('ShiftLeft') || this.virtualCommandCombineKeys.get('ShiftRight'))) {
      return this.currentLanguageData[0].get(keyCode).toUpperCase();
    }
    if ((this.virtualCommandCombineKeys.get('ShiftLeft') || this.virtualCommandCombineKeys.get('ShiftRight')) && !this.virtualCommandCombineKeys.get('CapsLock')) {
      if (this.currentLanguageData[1].has(keyCode)) {
        return this.currentLanguageData[1].get(keyCode);
      }
      return this.currentLanguageData[0].get(keyCode).toUpperCase();
    }
    if ((this.virtualCommandCombineKeys.get('ShiftLeft') || this.virtualCommandCombineKeys.get('ShiftRight')) && this.virtualCommandCombineKeys.get('CapsLock')) {
      if (this.currentLanguageData[1].has(keyCode)) {
        return this.currentLanguageData[1].get(keyCode);
      }
      return this.currentLanguageData[0].get(keyCode);
    }
    return this.currentLanguageData[0].get(keyCode);
  }

  toggleShift(key) {
    if (!this.virtualCommandCombineKeys.get(key) && !this.virtualCommandCombineKeys.get('CapsLock')) {
      this.virtualCommandCombineKeys.set(key, true);
      this.buttonsInContainer.forEach(this.updateShiftKeys.bind(this));
    } else if (this.virtualCommandCombineKeys.get(key) && !this.virtualCommandCombineKeys.get('CapsLock')) {
      this.virtualCommandCombineKeys.set(key, false);
      this.buttonsInContainer.forEach(this.updateKeys.bind(this));
    } else if (!this.virtualCommandCombineKeys.get(key) && this.virtualCommandCombineKeys.get('CapsLock')) {
      this.virtualCommandCombineKeys.set(key, true);
      this.buttonsInContainer.forEach(this.updateOnlyShiftKeys.bind(this));
    } else if (this.virtualCommandCombineKeys.get(key) && this.virtualCommandCombineKeys.get('CapsLock')) {
      this.virtualCommandCombineKeys.set(key, false);
      this.buttonsInContainer.forEach(this.updateCapsKeys.bind(this));
    }
  }

  updateShiftKeys(value, key) {
    const temp = value;
    if (this.currentLanguageData[1].has(key)) {
      temp.firstChild.textContent = this.currentLanguageData[1].get(key);
    } else if (this.currentLanguageData[0].get(key).length === 1) {
      temp.firstChild.textContent = this.currentLanguageData[0].get(key).toUpperCase();
    }
  }

  updateOnlyShiftKeys(value, key) {
    const temp = value;
    if (this.currentLanguageData[1].has(key)) {
      temp.firstChild.textContent = this.currentLanguageData[1].get(key);
    } else if (this.currentLanguageData[0].get(key).length === 1) {
      temp.firstChild.textContent = this.currentLanguageData[0].get(key);
    }
  }
}
