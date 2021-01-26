import React, { useReducer } from 'react';

import styles from './UnprocrastinateWriter.module.css';
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
    <div className={getBackgroundImg()}>
      <SideBar
        options={[
          { id: 'background', label: 'Background', backgroundColor: '#4caf50' },
          { id: 'font', label: 'Font', backgroundColor: '#8caf50' },
          { id: 'music', label: 'Music', backgroundColor: '#7daf50' }
        ]}></SideBar>
      <Writer></Writer>
    </div>
  );
};
export { UnprocrastinateWriter };
