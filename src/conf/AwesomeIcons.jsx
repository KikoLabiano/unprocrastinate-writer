import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faFileAlt,
  faFont,
  faImage,
  faMusic,
  faPauseCircle,
  faPlayCircle,
  faRandom,
  faStepBackward,
  faStepForward,
  faStopCircle,
  faVolumeMute
} from '@fortawesome/free-solid-svg-icons';

export const AwesomeIcons = icon => {
  switch (icon) {
    case 'font':
      return faFont;
    case 'image':
      return faImage;
    case 'arrowLeft':
      return faArrowCircleLeft;
    case 'arrowRight':
      return faArrowCircleRight;
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
    default:
      return faFileAlt;
  }
};
