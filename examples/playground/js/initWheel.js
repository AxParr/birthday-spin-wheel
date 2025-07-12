import { Wheel } from '../../../dist/spin-wheel-esm.js';

const props = {
  items: [
    {
      label: 'Dinner & Movie',
    },
    {
      label: 'Coffee Date',
    },
    {
      label: 'Walk in the Park',
    },
    {
      label: 'Museum Visit',
    },
    {
      label: 'Cooking Together',
    },
    {
      label: 'Game Night',
    },
    {
      label: 'Concert',
    },
    {
      label: 'Beach Day',
    },
    {
      label: 'Wine Tasting',
    },
    {
      label: 'Escape Room',
    },
    {
      label: 'Dancing',
    },
    {
      label: 'Hiking',
    },
  ],
  itemBackgroundColors: [
    '#b7e4c7',
    '#74c69d',
    '#52b788',
    '#76c893',
    '#40916c',
    '#b7e4c7',
    '#74c69d',
    '#52b788',
    '#76c893',
    '#40916c',
    '#b7e4c7',
    '#74c69d',
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