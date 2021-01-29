import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faBold,
  faFileAlt,
  faFont,
  faImage,
  faItalic,
  faMusic,
  faPauseCircle,
  faPlayCircle,
  faRandom,
  faStepBackward,
  faStepForward,
  faStopCircle,
  faVolumeMute,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';

export const AwesomeIcons = icon => {
  switch (icon) {
    case 'bold':
      return faBold;
    case 'font':
      return faFont;
    case 'image':
      return faImage;
    case 'arrowLeft':
      return faArrowCircleLeft;
    case 'arrowRight':
      return faArrowCircleRight;
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
    case 'stop':
      return faStopCircle;
    case 'volume':
      return faVolumeUp;
    default:
      return faFileAlt;
  }
};
