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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Application)\n/* harmony export */ });\n/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Environment */ \"./src/js/modules/Environment.js\");\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities */ \"./src/js/modules/Utilities.js\");\n\n\n\nclass Application {\n  environment;\n\n  status;\n\n  // временно\n  engLowerCaseButtons = [\n    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',\n    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'Del',\n    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter',\n    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⮝', 'Shift',\n    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⮜', '⮟', '⮞', 'Ctrl',\n  ];\n\n  codeKeyEn = [\n    ['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Minus', '-'], ['Equal', '='], ['Backspace', 'Backspace'],\n    ['Tab', 'Tab'], ['KeyQ', 'q'], ['KeyW', 'w'], ['KeyE', 'e'], ['KeyR', 'r'], ['KeyT', 't'], ['KeyY', 'y'], ['KeyU', 'u'], ['KeyI', 'i'], ['KeyO', 'o'], ['KeyP', 'p'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '\\\\'], ['Delete', 'Del'],\n    ['CapsLock', 'CapsLock'], ['KeyA', 'a'], ['KeyS', 's'], ['KeyD', 'd'], ['KeyF', 'f'], ['KeyG', 'g'], ['KeyH', 'h'], ['KeyJ', 'j'], ['KeyK', 'k'], ['KeyL', 'l'], ['Semicolon', ';'], ['Quote', '\\''], ['Enter', 'Enter'],\n    ['ShiftLeft', 'Shift'], ['KeyZ', 'z'], ['KeyX', 'x'], ['KeyC', 'c'], ['KeyV', 'v'], ['KeyB', 'b'], ['KeyN', 'n'], ['KeyM', 'm'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', '⮝'], ['ShiftRight', 'Shift'],\n    ['ControlLeft', 'Ctrl'], ['MetaLeft', 'Win'], ['AltLeft', 'Alt'], ['Space', ' '], ['AltRight', 'Alt'], ['ArrowLeft', '⮜'], ['ArrowDown', '⮟'], ['ArrowRight', '⮞'], ['ControlRight', 'Ctrl'],\n  ];\n\n  codeKeyEnMap = new Map(this.codeKeyEn);\n\n  codeKeyButtonMap = new Map();\n\n  constructor() {\n    this.init();\n  }\n\n  init() {\n    this.environment = new _Environment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.test();\n  }\n\n  #component() {\n    this.text = 123;\n    const element = document.createElement('div');\n    element.textContent = 'Привет';\n    return element;\n  }\n\n  test() {\n    const wrapper = this.environment.getWrapper;\n    document.body.append(wrapper);\n    const description = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDivElement();\n    description.classList.add('description', 'wrapper__description');\n    const inputWindow = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDivElement();\n    inputWindow.classList.add(...['input-window', 'wrapper__input-window']);\n    const keyboard = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDivElement();\n    keyboard.classList.add(...['keyboard', 'wrapper__keyboard']);\n    wrapper.append(description);\n    wrapper.append(inputWindow);\n    wrapper.append(keyboard);\n\n    let p = document.createElement('h1');\n    p.classList.add('description__title');\n    p.textContent = 'Virtual keyboard';\n    description.append(p);\n\n    p = document.createElement('p');\n    p.classList.add('description__requirement');\n    p.textContent = 'The keyboard was created in OS Windows 10, GoogleChrome v100';\n    description.append(p);\n\n    p = document.createElement('p');\n    p.classList.add('description__language');\n    p.textContent = 'To switch the language, use the keyboard shortcut Alt + Shift';\n    description.append(p);\n\n    const textarea = document.createElement('textarea');\n    textarea.classList.add(...['textarea', 'input-window__textarea']);\n    inputWindow.append(textarea);\n\n    // for (let i = 0; i < this.engLowerCaseButtons.length; i += 1) {\n    //   const keyboardButton = Utilities.createDivElement();\n    //   switch (this.engLowerCaseButtons[i]) {\n    //     case 'Backspace':\n    //       keyboardButton.classList.add('keyboard-button_backspace');\n    //       break;\n    //     case 'CapsLock':\n    //       keyboardButton.classList.add('keyboard-button_capslock');\n    //       break;\n    //     case 'Enter':\n    //       keyboardButton.classList.add('keyboard-button_enter');\n    //       break;\n    //     case 'Shift':\n    //       keyboardButton.classList.add('keyboard-button_shift');\n    //       break;\n    //     case 'Ctrl':\n    //       keyboardButton.classList.add('keyboard-button_ctrl');\n    //       break;\n    //     case 'Space':\n    //       keyboardButton.classList.add('keyboard-button_space');\n    //       break;\n\n    //     default:\n    //       break;\n    //   }\n\n    //   keyboardButton.classList.add('keyboard-button');\n    //   const spanItem = document.createElement('span');\n    //   spanItem.textContent = this.engLowerCaseButtons[i];\n    //   keyboardButton.append(spanItem);\n    //   keyboard.append(keyboardButton);\n    // }\n\n    function keydownHandler(event) {\n      if (this.codeKeyEnMap.has(event.code)) {\n        if (!this.codeKeyButtonMap.get(event.code).classList.contains('active')) {\n          this.codeKeyButtonMap.get(event.code).classList.add('active');\n        }\n        textarea.textContent += `${this.codeKeyEnMap.get(event.code)}`;\n        textarea.scrollTop = textarea.scrollHeight;\n      }\n      // textarea.textContent += `Key: ${event.key} Code: ${event.code}\\n`;\n      // eslint-disable-next-line no-console\n      // console.log(`Key: ${event.key} Code: ${event.code}\\n`);\n    }\n\n    function keyupHandler(event) {\n      if (this.codeKeyEnMap.has(event.code)) {\n        if (this.codeKeyButtonMap.get(event.code).classList.contains('active')) {\n          this.codeKeyButtonMap.get(event.code).classList.remove('active');\n        }\n      }\n    }\n    // хз мб в топ окружение\n    window.addEventListener('keydown', keydownHandler.bind(this));\n    window.addEventListener('keyup', keyupHandler.bind(this));\n\n    function mousedownHandler(event) {\n      const key = event.currentTarget.getAttribute('data-id');\n      if (this.codeKeyEnMap.has(key)) {\n        if (!this.codeKeyButtonMap.get(key).classList.contains('active')) {\n          this.codeKeyButtonMap.get(key).classList.add('active');\n        }\n        textarea.textContent += `${this.codeKeyEnMap.get(key)}`;\n        textarea.scrollTop = textarea.scrollHeight;\n      }\n    }\n    function mouseupHandler(event) {\n      const key = event.currentTarget.getAttribute('data-id');\n      if (this.codeKeyEnMap.has(key)) {\n        if (this.codeKeyButtonMap.get(key).classList.contains('active')) {\n          this.codeKeyButtonMap.get(key).classList.remove('active');\n        }\n      }\n    }\n\n    function initKeyBoard(value, key) {\n      const keyboardButton = _Utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createDivElement();\n      const spanItem = document.createElement('span');\n      this.codeKeyButtonMap.set(key, keyboardButton);\n\n      switch (key) {\n        case 'Backspace':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_backspace');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        case 'CapsLock':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_capslock');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        case 'Enter':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_enter');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        case 'ShiftLeft':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_shift');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        case 'ShiftRight':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_shift');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        case 'ControlLeft':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_ctrl');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        case 'ControlRight':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_ctrl');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        case 'Space':\n          keyboardButton.classList.add('keyboard-button', 'keyboard-button_space');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n        default:\n          keyboardButton.classList.add('keyboard-button');\n          spanItem.textContent = value;\n          keyboardButton.addEventListener('mousedown', mousedownHandler.bind(this));\n          keyboardButton.addEventListener('mouseup', mouseupHandler.bind(this));\n          keyboardButton.setAttribute('data-id', `${key}`);\n          break;\n      }\n      keyboardButton.append(spanItem);\n      keyboard.append(keyboardButton);\n    }\n    this.codeKeyEnMap.forEach(initKeyBoard.bind(this));\n    // eslint-disable-next-line no-console\n    console.dir(this.codeKeyButtonMap);\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/Application.js?");

/***/ }),

/***/ "./src/js/modules/Environment.js":
/*!***************************************!*\
  !*** ./src/js/modules/Environment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Environment)\n/* harmony export */ });\n/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ \"./src/js/modules/Utilities.js\");\n\n\nclass Environment {\n  wrapper;\n\n  constructor() {\n    this.init();\n  }\n\n  get getWrapper() {\n    return this.wrapper;\n  }\n\n  init() {\n    Environment.createHead();\n    this.addWrapper();\n  }\n\n  static createHead() {\n    // реализовать добавление head\n  }\n\n  addWrapper() {\n    this.wrapper = _Utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createDivElement();\n    this.wrapper.classList.add('wrapper');\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/Environment.js?");

/***/ }),

/***/ "./src/js/modules/Utilities.js":
/*!*************************************!*\
  !*** ./src/js/modules/Utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Utilities)\n/* harmony export */ });\nclass Utilities {\n  static createDivElement() {\n    return document.createElement('div');\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/js/modules/Utilities.js?");

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