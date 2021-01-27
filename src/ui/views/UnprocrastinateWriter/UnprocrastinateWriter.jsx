import React, { useReducer } from 'react';
import { useRecoilValue } from 'recoil';

import { backgroundState, listOfBackgroundsState } from '../../../store';

import styles from './UnprocrastinateWriter.module.css';

import { Gallery } from './_components/Gallery';
import { MusicPlayer } from './_components/MusicPlayer';
import { SideBar } from './_components/SideBar';
import { Writer } from './_components/Writer';

import { upReducer } from './_functions/Reducers/upReducer';

const UnprocrastinateWriter = () => {
  const [upWriterState, upWriterDispatcher] = useReducer(upReducer, { backgroundImage: 'default' });
  const background = useRecoilValue(backgroundState);
  const listOfBackgrounds = useRecoilValue(listOfBackgroundsState);

  const getBackgroundImg = () => {
    switch (upWriterState.backgroundImage) {
      case 'default':
        return styles.defaultImage;

      default:
        break;
    }
  };

  return (
    <div
      className={`${getBackgroundImg()} ${styles.background}`}
      style={{ backgroundImage: `url(${listOfBackgrounds[background]})` }}>
      <SideBar
        options={[
          { id: 'background', label: 'Background', icon: 'image', top: '150', height: '100' },
          { id: 'font', label: 'Font', icon: 'font', top: '300', height: '100' },
          { id: 'music', label: 'Music', icon: 'music', top: '450', height: '200' }
        ]}>
        {[<Gallery numberOfBackgrounds={listOfBackgrounds.length}></Gallery>, <></>, <MusicPlayer></MusicPlayer>]}
      </SideBar>
      <div className={styles.container}>
        <Writer></Writer>
      </div>
    </div>
  );
};
export { UnprocrastinateWriter };
