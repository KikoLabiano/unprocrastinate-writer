import React, { useReducer } from 'react';

import defaultImage from '../../assets/img/defaultImage.jpg';
import winter1 from '../../assets/img/winter1.jpg';
import winter2 from '../../assets/img/winter2.jpg';

import styles from './UnprocrastinateWriter.module.css';
import { MusicPlayer } from './_components/MusicPlayer';
import { SideBar } from './_components/SideBar';
import { Writer } from './_components/Writer';

import { upReducer } from './_functions/Reducers/upReducer';

const UnprocrastinateWriter = () => {
  const [upWriterState, upWriterDispatcher] = useReducer(upReducer, { backgroundImage: 'default' });

  const getBackgroundImg = () => {
    switch (upWriterState.backgroundImage) {
      case 'default':
        return styles.defaultImage;

      default:
        break;
    }
  };

  return (
    <div className={`${getBackgroundImg()} ${styles.background}`} style={{ backgroundImage: `url(${defaultImage})` }}>
      <SideBar
        options={[
          { id: 'background', label: 'Background', backgroundColor: 'transparent' },
          { id: 'font', label: 'Font', backgroundColor: '#8caf50' },
          { id: 'music', label: 'Music', backgroundColor: '#7daf50' }
        ]}>
        {[<span>Background</span>, <></>, <MusicPlayer></MusicPlayer>]}
      </SideBar>
      <div className={styles.container}>
        <Writer></Writer>
      </div>
    </div>
  );
};
export { UnprocrastinateWriter };
