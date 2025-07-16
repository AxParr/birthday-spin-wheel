import { Wheel } from '../../../dist/spin-wheel-esm.js';

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
  itemBackgroundColors: [
    '#b7e4c7',
    '#74c69d',
    '#52b788',
    '#76c893',
  ],
  itemLabelFontSizeMax: 40,
  itemLabelColors: ['#1b4332'],
  lineColor: '#40916c',
  lineWidth: 4,
  borderColor: '#40916c',
  borderWidth: 6,
  rotationResistance: -100,
  rotationSpeedMax: 1000,
};

const container = document.querySelector('.wheel-wrapper');

// Save object globally for easy debugging.
window.wheel = new Wheel(container, props);

// Log events for easy debugging:
wheel.onCurrentIndexChange = e => console.log(e);
wheel.onRest = e => console.log(e);
wheel.onSpin = e => console.log(e);