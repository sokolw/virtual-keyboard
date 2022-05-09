import '../scss/main.scss';
import Application from './modules/Application';

function delay() {
  window.app = {
    run: new Application(),
  };
}

setTimeout(delay, 100);
