export default class KeyboardKeysData {
  constructor() {
    this.codeKeyEnMap = new Map(this.codeKeyEnArray);
    this.shiftedCodeKeyEnMap = new Map(this.shiftedCodeKeyEnArray);
    this.codeKeyRuMap = new Map(this.codeKeyRuArray);
    this.shiftedCodeKeyRuMap = new Map(this.shiftedCodeKeyRuArray);
    this.codeKeyEnArray = null;
    this.shiftedCodeKeyEnArray = null;
    this.codeKeyRuArray = null;
    this.shiftedCodeKeyRuArray = null;
  }

  codeKeyEnArray = [
    ['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'],
    ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\'], ['Delete', 'Del'],
    ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', '\''], ['Enter', 'Enter'],
    ['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', '⮝'], ['ShiftRight', 'Shift'],
    ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '⮜'], ['ArrowDown', '⮟'], ['ArrowRight', '⮞'], ['ControlRight', 'Ctrl'],
  ];

  shiftedCodeKeyEnArray = [
    ['Backquote', '~'], ['Digit1', '!'], ['Digit2', '@'], ['Digit3', '#'], ['Digit4', '$'], ['Digit5', '%'], ['Digit6', '^'], ['Digit7', '&'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'],
    ['BracketLeft', '{'], ['BracketRight', '}'], ['Backslash', '|'],
    ['Semicolon', ':'], ['Quote', '"'],
    ['Comma', '<'], ['Period', '>'], ['Slash', '?'],
  ];

  codeKeyRuArray = [
    ['Backquote', 'ё'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'],
    ['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', '\\'], ['Delete', 'Del'],
    ['CapsLock', 'CapsLock'], ['KeyA', 'ф'], ['KeyS', 'ы'], ['KeyD', 'в'], ['KeyF', 'а'], ['KeyG', 'п'], ['KeyH', 'р'], ['KeyJ', 'о'], ['KeyK', 'л'], ['KeyL', 'д'], ['Semicolon', 'ж'], ['Quote', 'э'], ['Enter', 'Enter'],
    ['ShiftLeft', 'Shift'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', '.'], ['ArrowUp', '⮝'], ['ShiftRight', 'Shift'],
    ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '⮜'], ['ArrowDown', '⮟'], ['ArrowRight', '⮞'], ['ControlRight', 'Ctrl'],
  ];

  shiftedCodeKeyRuArray = [
    ['Digit1', '!'], ['Digit2', '"'], ['Digit3', '№'], ['Digit4', ';'], ['Digit5', '%'], ['Digit6', ':'], ['Digit7', '?'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'],
    ['Backslash', '/'],
    ['Slash', ','],
  ];
}
