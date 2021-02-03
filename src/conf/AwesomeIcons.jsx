import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faBold,
  faClipboardList,
  faFileAlt,
  faFolderOpen,
  faFont,
  faImage,
  faItalic,
  faMusic,
  faPauseCircle,
  faPlayCircle,
  faRandom,
  faSave,
  faStepBackward,
  faStepForward,
  faStopCircle,
  faVolumeMute,
  faVolumeUp
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
    case 'stop':
      return faStopCircle;
    case 'volume':
      return faVolumeUp;
    default:
      return faFileAlt;
  }
};
