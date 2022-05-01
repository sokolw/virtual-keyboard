import '../scss/main.scss';

window.app = {
  run: null,
};

function component() {
  const element = document.createElement('div');
  element.textContent = 'Привет';
  return element;
}

document.body.append(component());

// eslint-disable-next-line no-alert
alert('test');
