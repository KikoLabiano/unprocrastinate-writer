import { atom } from 'recoil';

import defaultImage from './ui/assets/img/defaultImage.jpg';
import grunge from './ui/assets/img/grunge.jpg';
import winter1 from './ui/assets/img/winter1.jpg';
import winter2 from './ui/assets/img/winter2.jpg';
import snowHills from './ui/assets/img/snowHills.jpg';
import bird from './ui/assets/img/bird.jpg';
import forestSea from './ui/assets/img/forestSea.jpg';
import fish from './ui/assets/img/fish.jpg';
import morning from './ui/assets/img/morning.jpg';
import lake from './ui/assets/img/lake.jpg';
import lostPlace from './ui/assets/img/lostPlace.jpg';
import road from './ui/assets/img/road.jpg';
import endlessRoad from './ui/assets/img/endlessRoad.jpg';
import tree from './ui/assets/img/tree.jpg';
import landscape from './ui/assets/img/landscape.jpg';
import lake2 from './ui/assets/img/lake2.jpg';
import sunrise from './ui/assets/img/sunrise.jpg';
import mountains from './ui/assets/img/mountains.jpg';
import thunderstorm from './ui/assets/img/thunderstorm.jpg';
import aurora from './ui/assets/img/aurora.jpg';
import stars from './ui/assets/img/stars.jpg';
import milkyWay from './ui/assets/img/milkyWay.jpg';
import stars2 from './ui/assets/img/stars2.jpg';
import stars3 from './ui/assets/img/stars3.jpg';

export const backgroundState = atom({
  key: 'backgroundProperties',
  default: {
    isPlaying: false,
    listOfBackgrounds: [
      { img: defaultImage, link: 'https://pixabay.com/es/users/freecreativestuff-6346290/' },
      { img: grunge, link: 'https://pixabay.com/es/users/freecreativestuff-6346290/' },
      { img: winter1, link: 'https://pixabay.com/es/users/freecreativestuff-6346290/' },
      { img: winter2, link: 'https://pixabay.com/es/users/freecreativestuff-6346290/' },
      { img: snowHills, link: 'https://pixabay.com/es/users/susnpics-10235783/' },
      { img: bird, link: 'https://pixabay.com/es/users/kimdaejeung-7703165/' },
      { img: forestSea, link: 'https://pixabay.com/es/users/seaq68-4191072/' },
      { img: fish, link: 'https://pixabay.com/es/users/rethinktwice-1369537/' },
      { img: morning, link: 'https://pixabay.com/es/users/couleur-1195798/' },
      { img: lake, link: 'https://pixabay.com/es/users/lian_baumann-19732775/' },
      { img: lostPlace, link: 'https://pixabay.com/es/users/tilgnerpictures-3860534/' },
      { img: road, link: 'https://pixabay.com/es/users/valiphotos-1720744/' },
      { img: endlessRoad, link: 'https://pixabay.com/es/users/jplenio-7645255/' },
      { img: tree, link: 'https://pixabay.com/es/users/jplenio-7645255/' },
      { img: landscape, link: 'https://pixabay.com/es/users/biancamentil-2023852/' },
      { img: lake2, link: 'https://pixabay.com/es/users/strikers-3532212/' },
      { img: sunrise, link: 'https://pixabay.com/es/users/quangle-1584596/' },
      { img: mountains, link: 'https://pixabay.com/es/users/12019-12019/' },
      { img: thunderstorm, link: 'https://pixabay.com/es/users/jplenio-7645255/' },
      { img: aurora, link: 'https://pixabay.com/es/users/noel_bauza-2019050/' },
      { img: stars, link: 'https://pixabay.com/es/users/free-photos-242387/' },
      { img: milkyWay, link: 'https://pixabay.com/es/users/free-photos-242387/' },
      { img: stars2, link: 'https://pixabay.com/es/users/free-photos-242387/' },
      { img: stars3, link: 'https://pixabay.com/es/users/theartofsounds2001-4501413/' }
    ],
    selectedBackground: 0
  }
});

export const fontState = atom({
  key: 'fontOptions',
  default: {
    fontSize: 22,
    fontColor: '#ffffff',
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
    ],
    fontStyle: 'normal',
    fontWeight: 'normal'
  }
});

export const writerSoundState = atom({
  key: 'writerSoundOptions',
  default: {
    isSoundActive: false
  }
});

export const writerTextState = atom({
  key: 'writerText',
  default: {
    text: '',
    fileName: '',
    hasUnsavedChanges: false
  }
});
