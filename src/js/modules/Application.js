import Environment from './Environment';
import Keyboard from './Keyboard';
import TextContainer from './TextContainer';
import Utilities from './Utilities';

export default class Application {
  environment;

  language;

  constructor() {
    this.init();
  }

  init() {
    this.environment = new Environment();
    this.language = Application.loadLanguage();
    this.test();
  }

  test() {
    const wrapper = this.environment.getWrapper;
    document.body.append(wrapper);
    const description = Utilities.createDivElement();
    description.classList.add('description', 'wrapper__description');
    const inputWindow = Utilities.createDivElement();
    inputWindow.classList.add(...['input-window', 'wrapper__input-window']);
    wrapper.append(description);
    wrapper.append(inputWindow);

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

    const TEXT_CONTAINER = new TextContainer();
    inputWindow.append(TEXT_CONTAINER.getInputContainer);

    const KEYBOARD = new Keyboard(TEXT_CONTAINER, this.language !== null ? this.language : 'en');
    wrapper.append(KEYBOARD.keyboard);
    // eslint-disable-next-line no-console
    console.log(KEYBOARD);
  }

  static loadLanguage() {
    return window.localStorage.getItem('language');
  }
}
