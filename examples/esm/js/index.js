import { Wheel } from '../../../dist/spin-wheel-esm.js';

window.onload = () => {

  const props = {
    items: [
      {
        label: 'pottery workshop',
      },
      {
        label: 'jewelry workshop',
      },
      {
        label: 'cooking workshop',
      },
      {
        label: 'your choice',
      },
    ],
  };

  const container = document.querySelector('.wheel-wrapper');

  window.wheel = new Wheel(container, props);

};