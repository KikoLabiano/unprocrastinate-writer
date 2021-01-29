import { atom } from 'recoil';

import defaultImage from './ui/assets/img/defaultImage.jpg';
import winter1 from './ui/assets/img/winter1.jpg';
import winter2 from './ui/assets/img/winter2.jpg';

export const backgroundState = atom({
  key: 'backgroundProperties',
  default: { isPlaying: false, listOfBackgrounds: [defaultImage, winter1, winter2], selectedBackground: 0 }
});

export const fontState = atom({
  key: 'fontOptions',
  default: {
    fontSize: 22,
    fontColor: 'white',
    fontFamily: { value: 'Bodoni Moda', label: 'Bodoni Moda' },
    fontFamilyList: [
      { value: 'Amatic SC', label: 'Amatic SC' },
      { value: 'Arial', label: 'Arial' },
      { value: 'Arial Black', label: 'Arial Black' },
      { value: 'Arial narrow', label: 'Arial narrow' },
      { value: 'Arial Nova', label: 'Arial Nova' },
      { value: 'Bodoni Moda', label: 'Bodoni Moda' },
      { value: 'Book Antiqua', label: 'Book Antiqua' },
      { value: 'Calibri', label: 'Calibri' },
      { value: 'Calibri Light', label: 'Calibri Light' },
      { value: 'Consolas', label: 'Consolas' },
      { value: 'Courier New', label: 'Courier New' },
      { value: 'Dancing Script', label: 'Dancing Script' },
      { value: 'Great Vibes', label: 'Great Vibes' },
      { value: 'Indie Flower', label: 'Indie Flower' },
      { value: 'Lucidatypewriter', label: 'Lucidatypewriter' },
      { value: 'Palatino Linotype', label: 'Palatino Linotype' },
      { value: 'papyrus', label: 'Papyrus' },
      { value: 'Rajdhani', label: 'Rajdhani' },
      { value: 'Segoe UI', label: 'Segoe UI' },
      { value: 'Sylfaen', label: 'Sylfaen' },
      { value: 'Tahoma', label: 'Tahoma' },
      { value: 'Times New Roman', label: 'Times New Roman' },
      { value: 'Verdana', label: 'Verdana' }
    ]
  }
});
