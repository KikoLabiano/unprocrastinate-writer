import React from 'react';
import { useRecoilState } from 'recoil';

import styles from './Gallery.module.css';

import { backgroundState, listOfBackgroundsState } from '../../../../../store';

import { AwesomeIcons } from '../../../../../conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Gallery = ({ numberOfBackgrounds }) => {
  const [background, setBackground] = useRecoilState(backgroundState);

  const onPreviousBackground = () => {
    if (background === 0) {
      setBackground(numberOfBackgrounds - 1);
    } else {
      setBackground(background - 1);
    }
  };

  const onNextBackground = () => {
    if (background === numberOfBackgrounds - 1) {
      setBackground(0);
    } else {
      setBackground(background + 1);
    }
  };

  return (
    <div className={styles.galleryControls}>
      <FontAwesomeIcon aria-hidden={false} icon={AwesomeIcons('arrowLeft')} onClick={onPreviousBackground} />
      <FontAwesomeIcon aria-hidden={false} icon={AwesomeIcons('arrowRight')} onClick={onNextBackground} />
    </div>
  );
};

export { Gallery };
