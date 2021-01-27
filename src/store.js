import { atom } from 'recoil';

import defaultImage from './ui/assets/img/defaultImage.jpg';
import winter1 from './ui/assets/img/winter1.jpg';
import winter2 from './ui/assets/img/winter2.jpg';

export const backgroundState = atom({
  key: 'selectedBackground',
  default: 0
});

export const listOfBackgroundsState = atom({
  key: 'listOfBackgrounds',
  default: [defaultImage, winter1, winter2]
});

export const fontState = atom({
  key: 'fontOptions',
  default: { fontSize: '12pt', fontColor: 'red' }
});
