import Environment from './Environment';
import Utilities from './Utilities';

export default class Application {
  environment;

  status;

  // временно
  engLowerCaseButtons = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⮝', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⮜', '⮟', '⮞', 'Ctrl',
  ];

  codeKeyEn = [
    ['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'],
    ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Delete', 'Del'],
    ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', '\''], ['Enter', 'Enter'],
    ['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', '⮝'], ['ShiftRight', 'Shift'],
    ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '⮜'], ['ArrowDown', '⮟'], ['ArrowRight', '⮞'], ['ControlRight', 'Ctrl'],
  ];

  codeKeyEnMap = new Map(this.codeKeyEn);

  codeKeyButtonMap = new Map();

  constructor() {
    this.init();
  }

  init() {
    this.environment = new Environment();
    this.test();
  }

  #component() {
    this.text = 123;
    const element = document.createElement('div');
    element.textContent = 'Привет';
    return element;
  }

  test() {
    const wrapper = this.environment.getWrapper;
    document.body.append(wrapper);
    const description = Utilities.createDivElement();
    description.classList.add('description', 'wrapper__description');
    const inputWindow = Utilities.createDivElement();
    inputWindow.classList.add(...['input-window', 'wrapper__input-window']);
    const keyboard = Utilities.createDivElement();
    keyboard.classList.add(...['keyboard', 'wrapper__keyboard']);
    wrapper.append(description);
    wrapper.append(inputWindow);
    wrapper.append(keyboard);

    let p = document.createElement('h1');
    p.classList.add('description__title');
    p.textContent = 'Virtual keyboard';
    description.append(p);

    p = document.createElement('p');
    p.classList.add('description__requirement');
    p.textContent = 'The keyboard was created in OS Windows 10, GoogleChrome v100';
    description.append(p);

    p = document.createElement('p');
    p.classList.add('description__language');
    p.textContent = 'To switch the language, use the keyboard shortcut Alt + Shift';
    description.append(p);

    const textarea = document.createElement('textarea');
    textarea.classList.add(...['textarea', 'input-window__textarea']);
    inputWindow.append(textarea);

    // for (let i = 0; i < this.engLowerCaseButtons.length; i += 1) {
    //   const keyboardButton = Utilities.createDivElement();
    //   switch (this.engLowerCaseButtons[i]) {
    //     case 'Backspace':
    //       keyboardButton.classList.add('keyboard-button_backspace');
    //       break;
    //     case 'CapsLock':
    //       keyboardButton.classList.add('keyboard-button_capslock');
    //       break;
    //     case 'Enter':
    //       keyboardButton.classList.add('keyboard-button_enter');
    //       break;
    //     case 'Shift':
    //       keyboardButton.classList.add('keyboard-button_shift');
    //       break;
    //     case 'Ctrl':
    //       keyboardButton.classList.add('keyboard-button_ctrl');
    //       break;
    //     case 'Space':
    //       keyboardButton.classList.add('keyboard-button_space');
    //       break;

    //     default:
    //       break;
    //   }

    //   keyboardButton.classList.add('keyboard-button');
    //   const spanItem = document.createElement('span');
    //   spanItem.textContent = this.engLowerCaseButtons[i];
    //   keyboardButton.append(spanItem);
    //   keyboard.append(keyboardButton);
    // }

    function keydownHandler(event) {
      if (this.codeKeyEnMap.has(event.code)) {
        if (!this.codeKeyButtonMap.get(event.code).classList.contains('active')) {
          this.codeKeyButtonMap.get(event.code).classList.add('active');
        }
        textarea.textContent += `${this.codeKeyEnMap.get(event.code)}`;
        textarea.scrollTop = textarea.scrollHeight;
      }
      // textarea.textContent += `Key: ${event.key} Code: ${event.code}\n`;
      // eslint-disable-next-line no-console
      // console.log(`Key: ${event.key} Code: ${event.code}\n`);
    }

    function keyupHandler(event) {
      if (this.codeKeyEnMap.has(event.code)) {
        if (this.codeKeyButtonMap.get(event.code).classList.contains('active')) {
          this.codeKeyButtonMap.get(event.code).classList.remove('active');
        }
      }
    }
    // хз мб в топ окружение
    window.addEventListener('keydown', keydownHandler.bind(this));
    window.addEventListener('keyup', keyupHandler.bind(this));

    function mousedownHandler(event) {
      const key = event.currentTarget.getAttribute('data-id');
      if (this.codeKeyEnMap.has(key)) {
        if (!this.codeKeyButtonMap.get(key).classList.contains('active')) {
          this.codeKeyButtonMap.get(key).classList.add('active');
        }
        textarea.textContent += `${this.codeKeyEnMap.get(key)}`;
        textarea.scrollTop = textarea.scrollHeight;
      }
    }
    function mouseupHandler(event) {
      const key = event.currentTarget.getAttribute('data-id');
      if (this.codeKeyEnMap.has(key)) {
        if (this.codeKeyButtonMap.get(key).classList.contains('active')) {
          this.codeKeyButtonMap.get(key).classList.remove('active');
        }
      }
    }

    function initKeyBoard(value, key) {
      const keyboardButton = Utilities.createDivElement();
      const spanItem = document.createElement('span');
      this.codeKeyButtonMap.set(key, keyboardButton);

      switch (key) {
        case 'Backspace':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_backspace');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        case 'CapsLock':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_capslock');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        case 'Enter':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_enter');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        case 'ShiftLeft':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_shift');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        case 'ShiftRight':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_shift');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        case 'ControlLeft':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_ctrl');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        case 'ControlRight':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_ctrl');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        case 'Space':
          keyboardButton.classList.add('keyboard-button', 'keyboard-button_space');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
        default:
          keyboardButton.classList.add('keyboard-button');
          spanItem.textContent = value;
          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));
          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));
          keyboardButton.setAttribute('data-id', `${key}`);
          break;
      }
      keyboardButton.append(spanItem);
      keyboard.append(keyboardButton);
    }
    this.codeKeyEnMap.forEach(initKeyBoard.bind(this));
    // eslint-disable-next-line no-console
    console.dir(this.codeKeyButtonMap);
  }
}
