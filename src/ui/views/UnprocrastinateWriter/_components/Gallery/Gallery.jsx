import React from 'react';
import { useRecoilState } from 'recoil';

import styles from './Gallery.module.css';

import { backgroundState } from '../../../../../store';

import { AwesomeIcons } from '../../../../../conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Gallery = ({ numberOfBackgrounds }) => {
  const [backgroundProperties, setBackground] = useRecoilState(backgroundState);

  const onPreviousBackground = () => {
    const inmBackgroundProperties = { ...backgroundProperties };
    if (inmBackgroundProperties.selectedBackground === 0) {
      inmBackgroundProperties.selectedBackground = numberOfBackgrounds - 1;
    } else {
      inmBackgroundProperties.selectedBackground = inmBackgroundProperties.selectedBackground - 1;
    }
    setBackground(inmBackgroundProperties);
  };

  const onNextBackground = () => {
    const inmBackgroundProperties = { ...backgroundProperties };
    if (inmBackgroundProperties.selectedBackground === numberOfBackgrounds - 1) {
      inmBackgroundProperties.selectedBackground = 0;
    } else {
      inmBackgroundProperties.selectedBackground = inmBackgroundProperties.selectedBackground + 1;
    }
    setBackground(inmBackgroundProperties);
  };

  const onTogglePlayGallery = () => {
    const inmBackgroundProperties = { ...backgroundProperties };

    if (!inmBackgroundProperties.isPlaying) {
      // setInterval(() => {
      //   console.log('llego');
      //   onNextBackground();
      // }, 1000);
    }
    inmBackgroundProperties.isPlaying = !inmBackgroundProperties.isPlaying;
    setBackground(inmBackgroundProperties);
  };

  return (
    <div className={styles.galleryControls}>
      <FontAwesomeIcon aria-hidden={false} icon={AwesomeIcons('arrowLeft')} onClick={onPreviousBackground} />
      <FontAwesomeIcon
        aria-hidden={false}
        icon={AwesomeIcons(backgroundProperties.isPlaying ? 'pause' : 'play')}
        onClick={onTogglePlayGallery}
      />
      <FontAwesomeIcon aria-hidden={false} icon={AwesomeIcons('arrowRight')} onClick={onNextBackground} />
    </div>
  );
};

export { Gallery };
