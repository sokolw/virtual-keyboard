/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scss/main.scss?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _modules_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Application */ \"./src/js/modules/Application.js\");\n\n\n\nwindow.app = {\n  run: new _modules_Application__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n};\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/Application.js":
/*!***************************************!*\
  !*** ./src/js/modules/Application.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Application)\n/* harmony export */ });\n/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Environment */ \"./src/js/modules/Environment.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ \"./src/js/modules/Keyboard.js\");\n/* harmony import */ var _TextContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextContainer */ \"./src/js/modules/TextContainer.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities */ \"./src/js/modules/Utilities.js\");\n\n\n\n\n\nclass Application {\n  environment;\n\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.environment = new _Environment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.test();\n  }\n\n  test() {\n    const wrapper = this.environment.getWrapper;\n    document.body.append(wrapper);\n    const description = _Utilities__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createDivElement();\n    description.classList.add('description', 'wrapper__description');\n    const inputWindow = _Utilities__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createDivElement();\n    inputWindow.classList.add(...['input-window', 'wrapper__input-window']);\n    wrapper.append(description);\n    wrapper.append(inputWindow);\n\n    let p = document.createElement('h1');\n    p.classList.add('description__title');\n    p.textContent = 'Virtual keyboard';\n    description.append(p);\n\n    p = document.createElement('p');\n    p.classList.add('description__requirement');\n    p.textContent = 'The keyboard was created in OS Windows 10, GoogleChrome v100';\n    description.append(p);\n\n    p = document.createElement('p');\n    p.classList.add('description__language');\n    p.textContent = 'To switch the language, use the keyboard shortcut Alt + Shift';\n    description.append(p);\n\n    const TEXT_CONTAINER = new _TextContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    inputWindow.append(TEXT_CONTAINER.getInputContainer);\n\n    const KEYBOARD = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](TEXT_CONTAINER);\n    wrapper.append(KEYBOARD.keyboard);\n    // eslint-disable-next-line no-console\n    console.log(KEYBOARD);\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/Application.js?");

/***/ }),

/***/ "./src/js/modules/Environment.js":
/*!***************************************!*\
  !*** ./src/js/modules/Environment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Environment)\n/* harmony export */ });\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ \"./src/js/modules/Utilities.js\");\n\n\nclass Environment {\n  wrapper;\n\n  constructor() {\n    this.init();\n  }\n\n  get getWrapper() {\n    return this.wrapper;\n  }\n\n  init() {\n    Environment.createHead();\n    this.addWrapper();\n  }\n\n  static createHead() {\n    // реализовать добавление head\n  }\n\n  addWrapper() {\n    this.wrapper = _Utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDivElement();\n    this.wrapper.classList.add('wrapper');\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/Environment.js?");

/***/ }),

/***/ "./src/js/modules/Keyboard.js":
/*!************************************!*\
  !*** ./src/js/modules/Keyboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _KeyboardKeysData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyboardKeysData */ \"./src/js/modules/KeyboardKeysData.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities */ \"./src/js/modules/Utilities.js\");\n\n\n\nclass Keyboard {\n  keyboard;\n\n  currentLanguageData;\n\n  currentCaretPosition;\n\n  constructor(textContainer = null, language = 'en') {\n    this.keysData = new _KeyboardKeysData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    // temp\n    this.inputContainer = textContainer.getInputContainer;\n    // new use start\n    this.textContainer = textContainer;\n    // new use end\n    this.buttonsInContainer = new Map();\n    this.language = language;\n    this.virtualCommandKeys = new Map([['CapsLock', false], ['ShiftLeft', false], ['ShiftRight', false], ['ControlLeft', false], ['ControlRight', false]]);\n    this.init();\n  }\n\n  init() {\n    this.addLanguage(this.language);\n    this.createKeyboardBox();\n    // init eng keys\n    this.currentLanguageData[0].forEach(this.createKeys.bind(this));\n    this.createGlobalKeyHandlers();\n  }\n\n  createKeyboardBox() {\n    this.keyboard = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDivElement();\n    this.keyboard.classList.add('keyboard', 'wrapper__keyboard');\n  }\n\n  createKeys(value, key) {\n    const keyboardButton = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDivElement();\n    const spanItem = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createSpanElement();\n    this.buttonsInContainer.set(key, keyboardButton);\n\n    if (['Backspace', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'Space'].includes(key)) {\n      keyboardButton.classList.add('keyboard-button', `keyboard-button_${value.length <= 1 ? 'space' : value.toLowerCase()}`);\n      spanItem.textContent = value;\n      this.addKeyHandlers(keyboardButton);\n      keyboardButton.setAttribute('data-id', `${key}`);\n    } else {\n      keyboardButton.classList.add('keyboard-button');\n      spanItem.textContent = value;\n      this.addKeyHandlers(keyboardButton);\n      keyboardButton.setAttribute('data-id', `${key}`);\n    }\n\n    keyboardButton.append(spanItem);\n    // add to container\n    this.keyboard.append(keyboardButton);\n  }\n\n  addKeyHandlers(key) {\n    key.addEventListener('mousedown', this.mousedownHandler.bind(this));\n    key.addEventListener('mouseup', this.mouseupHandler.bind(this));\n    key.addEventListener('mouseout', this.mouseoutHandler.bind(this));\n  }\n\n  createGlobalKeyHandlers() {\n    window.addEventListener('keydown', this.keydownHandler.bind(this));\n    window.addEventListener('keyup', this.keyupHandler.bind(this));\n    // window.addEventListener('blur', this.blurHandler.bind(this));\n  }\n\n  // key events\n  keydownHandler(event) {\n    if (this.buttonsInContainer.has(event.code)) {\n      event.preventDefault();\n      this.currentCaretPosition = this.inputContainer.selectionStart;\n      // eslint-disable-next-line no-console\n      console.log(this.currentCaretPosition);\n      if (event.altKey && event.shiftKey) {\n        this.updateKeyboard();\n      }\n      if (!this.buttonsInContainer.get(event.code).classList.contains('active')) {\n        this.buttonsInContainer.get(event.code).classList.add('active');\n      }\n      // this.inputContainer.textContent += `${event.code}->`;\n      // this.inputContainer.textContent += `${this.currentLanguageData[0].get(event.code)}`;\n      this.textContainer.addChar(this.currentLanguageData[0].get(event.code));\n      this.inputContainer.scrollTop = this.inputContainer.scrollHeight;\n      // работа с окном\n      this.inputContainer.focus();\n      // this.currentCaretPosition = this.inputContainer.textContent.length;\n      // this.inputContainer.setSelectionRange(this.current, this.currentCaretPosition);\n    }\n  }\n\n  keyupHandler(event) {\n    if (this.buttonsInContainer.has(event.code)) {\n      if (this.buttonsInContainer.get(event.code).classList.contains('active')) {\n        this.buttonsInContainer.get(event.code).classList.remove('active');\n      }\n    }\n  }\n\n  // mouse events\n  mousedownHandler(event) {\n    const key = event.currentTarget.getAttribute('data-id');\n    if (this.buttonsInContainer.has(key)) {\n      if (!this.buttonsInContainer.get(key).classList.contains('active')) {\n        this.buttonsInContainer.get(key).classList.add('active');\n      }\n      this.inputContainer.textContent += `${this.currentLanguageData[0].get(key)}`;\n      this.inputContainer.scrollTop = this.inputContainer.scrollHeight;\n    }\n  }\n\n  mouseupHandler(event) {\n    const key = event.currentTarget.getAttribute('data-id');\n    if (this.buttonsInContainer.has(key)) {\n      if (this.buttonsInContainer.get(key).classList.contains('active')) {\n        this.buttonsInContainer.get(key).classList.remove('active');\n      }\n    }\n  }\n\n  mouseoutHandler(event) {\n    this.mouseupHandler(event);\n  }\n\n  // toggle language\n  toggleLanguage(language) {\n    if (language === 'en') {\n      this.language = 'ru';\n      this.currentLanguageData = [this.keysData.codeKeyRuMap, this.keysData.shiftedCodeKeyRuMap];\n    }\n    if (language === 'ru') {\n      this.language = 'en';\n      this.currentLanguageData = [this.keysData.codeKeyEnMap, this.keysData.shiftedCodeKeyEnMap];\n    }\n  }\n\n  addLanguage(language) {\n    if (language === 'en') {\n      this.currentLanguageData = [this.keysData.codeKeyEnMap, this.keysData.shiftedCodeKeyEnMap];\n    }\n    if (language === 'ru') {\n      this.currentLanguageData = [this.keysData.codeKeyRuMap, this.keysData.shiftedCodeKeyRuMap];\n    }\n  }\n\n  updateKeyboard() {\n    this.toggleLanguage(this.language);\n    this.buttonsInContainer.forEach(this.updateKeys.bind(this));\n  }\n\n  updateKeys(value, key) {\n    const temp = value;\n    temp.firstChild.textContent = this.currentLanguageData[0].get(key);\n  }\n\n  blurHandler(event) { // no use\n    // eslint-disable-next-line no-console\n    console.log(`tab${event.code}${this.language}`);\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/Keyboard.js?");

/***/ }),

/***/ "./src/js/modules/KeyboardKeysData.js":
/*!********************************************!*\
  !*** ./src/js/modules/KeyboardKeysData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyboardKeysData)\n/* harmony export */ });\nclass KeyboardKeysData {\n  constructor() {\n    this.codeKeyEnMap = new Map(this.codeKeyEnArray);\n    this.shiftedCodeKeyEnMap = new Map(this.shiftedCodeKeyEnArray);\n    this.codeKeyRuMap = new Map(this.codeKeyRuArray);\n    this.shiftedCodeKeyRuMap = new Map(this.shiftedCodeKeyRuArray);\n    this.codeKeyEnArray = null;\n    this.shiftedCodeKeyEnArray = null;\n    this.codeKeyRuArray = null;\n    this.shiftedCodeKeyRuArray = null;\n  }\n\n  codeKeyEnArray = [\n    ['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'],\n    ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\\\'], ['Delete', 'Del'],\n    ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', '\\''], ['Enter', 'Enter'],\n    ['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', '⮝'], ['ShiftRight', 'Shift'],\n    ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '⮜'], ['ArrowDown', '⮟'], ['ArrowRight', '⮞'], ['ControlRight', 'Ctrl'],\n  ];\n\n  shiftedCodeKeyEnArray = [\n    ['Backquote', '~'], ['Digit1', '!'], ['Digit2', '@'], ['Digit3', '#'], ['Digit4', '$'], ['Digit5', '%'], ['Digit6', '^'], ['Digit7', '&'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'],\n    ['BracketLeft', '{'], ['BracketRight', '}'], ['Backslash', '|'],\n    ['Semicolon', ':'], ['Quote', '\"'],\n    ['Comma', '<'], ['Period', '>'], ['Slash', '?'],\n  ];\n\n  codeKeyRuArray = [\n    ['Backquote', 'ё'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'],\n    ['Tab', 'Tab'], ['KeyQ', 'й'], ['KeyW', 'ц'], ['KeyE', 'у'], ['KeyR', 'к'], ['KeyT', 'е'], ['KeyY', 'н'], ['KeyU', 'г'], ['KeyI', 'ш'], ['KeyO', 'щ'], ['KeyP', 'з'], ['BracketLeft', 'х'], ['BracketRight', 'ъ'], ['Backslash', '\\\\'], ['Delete', 'Del'],\n    ['CapsLock', 'CapsLock'], ['KeyA', 'ф'], ['KeyS', 'ы'], ['KeyD', 'в'], ['KeyF', 'а'], ['KeyG', 'п'], ['KeyH', 'р'], ['KeyJ', 'о'], ['KeyK', 'л'], ['KeyL', 'д'], ['Semicolon', 'ж'], ['Quote', 'э'], ['Enter', 'Enter'],\n    ['ShiftLeft', 'Shift'], ['KeyZ', 'я'], ['KeyX', 'ч'], ['KeyC', 'с'], ['KeyV', 'м'], ['KeyB', 'и'], ['KeyN', 'т'], ['KeyM', 'ь'], ['Comma', 'б'], ['Period', 'ю'], ['Slash', '.'], ['ArrowUp', '⮝'], ['ShiftRight', 'Shift'],\n    ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '⮜'], ['ArrowDown', '⮟'], ['ArrowRight', '⮞'], ['ControlRight', 'Ctrl'],\n  ];\n\n  shiftedCodeKeyRuArray = [\n    ['Digit1', '!'], ['Digit2', '\"'], ['Digit3', '№'], ['Digit4', ';'], ['Digit5', '%'], ['Digit6', ':'], ['Digit7', '?'], ['Digit8', '*'], ['Digit9', '('], ['Digit0', ')'], ['Minus', '_'], ['Equal', '+'],\n    ['Backslash', '/'],\n    ['Slash', ','],\n  ];\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/KeyboardKeysData.js?");

/***/ }),

/***/ "./src/js/modules/TextContainer.js":
/*!*****************************************!*\
  !*** ./src/js/modules/TextContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TextContainer)\n/* harmony export */ });\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ \"./src/js/modules/Utilities.js\");\n\n\nclass TextContainer {\n  currentPositionCaret;\n\n  constructor() {\n    this.charVault = [];\n    this.inputContainer = TextContainer.createInputContainer();\n    // this.init();\n  }\n\n  get getInputContainer() {\n    return this.inputContainer;\n  }\n\n  // init() {\n  //   this.inputContainer;\n  // }\n\n  static createInputContainer() {\n    const temp = _Utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTextareaElement();\n    temp.classList.add('textarea', 'input-window__textarea');\n    return temp;\n  }\n\n  addChar(char) {\n    if (this.getCurrentPositionCaret() === this.charVault.length) {\n      this.charVault.push(char);\n      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() + 1);\n      this.updateTextContainer();\n    } else {\n      this.charVault.splice(this.getCurrentPositionCaret(), 0, char);\n      this.updateCurrentPositionCaret(this.getCurrentPositionCaret() + 1);\n      this.updateTextContainer();\n    }\n  }\n\n  updateCurrentPositionCaret(position) {\n    this.currentPositionCaret = position;\n  }\n\n  getCurrentPositionCaret() {\n    return this.inputContainer.selectionStart;\n  }\n\n  updateTextContainer() {\n    this.inputContainer.textContent = this.charVault.join('');\n    this.inputContainer.setSelectionRange(this.currentPositionCaret, this.currentPositionCaret);\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/TextContainer.js?");

/***/ }),

/***/ "./src/js/modules/Utilities.js":
/*!*************************************!*\
  !*** ./src/js/modules/Utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Utilities)\n/* harmony export */ });\nclass Utilities {\n  static createDivElement() {\n    return document.createElement('div');\n  }\n\n  static createSpanElement() {\n    return document.createElement('span');\n  }\n\n  static createTextareaElement() {\n    return document.createElement('textarea');\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/Utilities.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;