import { Wheel } from '../../../dist/spin-wheel-esm.js';

window.onload = () => {

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
  };

  const container = document.querySelector('.wheel-wrapper');

  window.wheel = new Wheel(container, props);

};