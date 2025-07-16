import { AlignText } from '../../../src/constants.js';

export const props = [

  {
    name: 'Workshops',
    radius: 0.88,
    itemLabelRadius: 0.92,
    itemLabelRadiusMax: 0.4,
    itemLabelRotation: 0,
    itemLabelAlign: AlignText.right,
    itemLabelBaselineOffset: -0.13,
    itemLabelFont: 'Pragati Narrow',
    itemBackgroundColors: ['#b7e4c7', '#74c69d', '#52b788', '#76c893'],
    itemLabelColors: ['#1b4332'],
    rotationSpeedMax: 700,
    rotationResistance: -70,
    lineWidth: 0,
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
  },
];