import React, { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import isNil from 'lodash/isNil';

import typeWriter1 from 'ui/assets/sounds/effects/typeWriter1.wav';
import typeWriter2 from 'ui/assets/sounds/effects/typeWriter2.mp3';
import typeWriterBell from 'ui/assets/sounds/effects/typeWriterBell.mp3';

import styles from './Writer.module.scss';

import { fontState, writerSoundState, writerTextState } from 'store';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const Writer = () => {
  const fontOptions = useRecoilValue(fontState);
  const writerSoundOptions = useRecoilValue(writerSoundState);
  const [writerText, setWriterText] = useRecoilState(writerTextState);

  const language = useRecoilValue(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  const audioRef = useRef();
  // const writerFont = fontOptions.fontFamilyList.filter(font => font.value === fontOptions.fontFamily.value) ;

  const onChange = value => {
    console.log(value);
    const inmWriterText = { ...writerText };
    inmWriterText.text = value;
    if (inmWriterText.fileName !== '') {
      inmWriterText.hasUnsavedChanges = true;
    }
    setWriterText(inmWriterText);
  };

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
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => onKeyDown(e)}
        placeholder={messages[language]['writerPlaceholder']}
        rows={30}
        style={{
          color: fontOptions.fontColor,
          fontFamily: fontOptions.fontFamilyList.find(font => font.value === fontOptions.fontFamily.value).value,
          fontSize: `${fontOptions.fontSize}pt`,
          fontStyle: fontOptions.fontStyle,
          fontWeight: fontOptions.fontWeight
        }}
        value={writerText.text}></textarea>
      <audio className="audio-element" ref={audioRef}>
        <source src={typeWriter2}></source>
      </audio>
    </>
  );
};

export { Writer };
