import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faBold,
  faClipboardList,
  faDesktop,
  faEdit,
  faExclamationCircle,
  faExternalLinkAlt,
  faFileAlt,
  faFolderOpen,
  faFont,
  faImage,
  faImages,
  faItalic,
  faMoon,
  faMusic,
  faPauseCircle,
  faPenSquare,
  faPlayCircle,
  faRandom,
  faSave,
  faStepBackward,
  faStepForward,
  faStopCircle,
  faSun,
  faVolumeMute,
  faVolumeUp,
  faWindowRestore
} from '@fortawesome/free-solid-svg-icons';

export const AwesomeIcons = icon => {
  switch (icon) {
    case 'arrowLeft':
      return faArrowCircleLeft;
    case 'arrowRight':
      return faArrowCircleRight;
    case 'bold':
      return faBold;
    case 'copy':
      return faClipboardList;
    case 'exclamation':
      return faExclamationCircle;
    case 'folder':
      return faFolderOpen;
    case 'font':
      return faFont;
    case 'image':
      return faImage;
    case 'italic':
      return faItalic;
    case 'music':
      return faMusic;
    case 'mute':
      return faVolumeMute;
    case 'nextSong':
      return faStepForward;
    case 'pause':
      return faPauseCircle;
    case 'play':
      return faPlayCircle;
    case 'previousSong':
      return faStepBackward;
    case 'random':
      return faRandom;
    case 'save':
      return faSave;
    case 'saveAs':
      return faPenSquare;
    case 'stop':
      return faStopCircle;
    case 'volume':
      return faVolumeUp;
    case 'desktop':
      return faDesktop;
    case 'minimize':
      return faWindowRestore;
    case 'gallery':
      return faImages;
    case 'lightTheme':
      return faSun;
    case 'darkTheme':
      return faMoon;
    case 'link':
      return faExternalLinkAlt;
    default:
      return faFileAlt;
  }
};
