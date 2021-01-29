import React, { useReducer, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import isNil from 'lodash/isNil';

import typeWriter1 from '../../../../assets/sounds/effects/typeWriter1.wav';
import typeWriter2 from '../../../../assets/sounds/effects/typeWriter2.mp3';
import typeWriterBell from '../../../../assets/sounds/effects/typeWriterBell.mp3';

import styles from './Writer.module.css';

import { fontState, writerSoundState } from '../../../../../store';

const Writer = () => {
  const fontOptions = useRecoilValue(fontState);
  const writerSoundOptions = useRecoilValue(writerSoundState);
  const audioRef = useRef();
  // const writerFont = fontOptions.fontFamilyList.filter(font => font.value === fontOptions.fontFamily.value) ;

  const onKeyDown = e => {
    if (writerSoundOptions.isSoundActive) {
      if (!isNil(audioRef) && !isNil(audioRef.current)) {
        if (e.key === 'Enter') {
          audioRef.current.src = typeWriterBell;
          audioRef.current.load();
          audioRef.current.play();
        } else {
          audioRef.current.src = typeWriter2;
          audioRef.current.load();
          if (audioRef.current.paused) {
            audioRef.current.play();
          } else {
            audioRef.current.currentTime = 0;
          }
        }
      }
    }
  };

  return (
    <>
      <textarea
        className={styles.writerArea}
        onKeyDown={e => onKeyDown(e)}
        placeholder="Start writing..."
        rows={30}
        style={{
          color: fontOptions.fontColor,
          fontFamily: fontOptions.fontFamilyList.find(font => font.value === fontOptions.fontFamily.value).value,
          fontSize: `${fontOptions.fontSize}pt`,
          fontStyle: fontOptions.fontStyle,
          fontWeight: fontOptions.fontWeight
        }}></textarea>
      <audio className="audio-element" ref={audioRef}>
        <source src={typeWriter2}></source>
      </audio>
    </>
  );
};

export { Writer };
