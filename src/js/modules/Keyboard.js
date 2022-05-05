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
    this.virtualCommandKeys = new Map([['CapsLock', false], ['ShiftLeft', false], ['ShiftRight', false], ['ControlLeft', false], ['ControlRight', false]]);
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
      if (event.altKey && event.shiftKey) {
        this.updateKeyboard();
      }
      if (!this.buttonsInContainer.get(event.code).classList.contains('active')) {
        this.buttonsInContainer.get(event.code).classList.add('active');
      }
      // this.inputContainer.textContent += `${event.code}->`;
      // this.inputContainer.textContent += `${this.currentLanguageData[0].get(event.code)}`;
      this.textContainer.addChar(this.currentLanguageData[0].get(event.code));
      this.inputContainer.scrollTop = this.inputContainer.scrollHeight;
      // работа с окном
      this.inputContainer.focus();
      // this.currentCaretPosition = this.inputContainer.textContent.length;
      // this.inputContainer.setSelectionRange(this.current, this.currentCaretPosition);
    }
  }

  keyupHandler(event) {
    if (this.buttonsInContainer.has(event.code)) {
      if (this.buttonsInContainer.get(event.code).classList.contains('active')) {
        this.buttonsInContainer.get(event.code).classList.remove('active');
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

  updateKeyboard() {
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
}
