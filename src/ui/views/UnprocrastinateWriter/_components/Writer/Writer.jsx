import React, { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import isNil from 'lodash/isNil';

// import typeWriter1 from 'ui/assets/sounds/effects/typeWriter1.wav';
import typeWriter2 from 'ui/assets/sounds/effects/typeWriter2.mp3';
import typeWriterBell from 'ui/assets/sounds/effects/typeWriterBell.mp3';

import styles from './Writer.module.scss';

import { fontState, writerSoundState, writerTextState } from 'store';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const Writer = () => {
  const fontOptions = useRecoilValue(fontState);
  const writerSoundOptions = useRecoilValue(writerSoundState);

  const language = useRecoilValue(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  const [writerText, setWriterText] = useRecoilState(writerTextState);

  const audioRef = useRef();

  const [isDragging, setIsDragging] = useState(false);

  // const writerFont = fontOptions.fontFamilyList.filter(font => font.value === fontOptions.fontFamily.value) ;

  const onChange = value => {
    const inmWriterText = { ...writerText };
    inmWriterText.text = value;
    if (inmWriterText.fileName !== '') {
      inmWriterText.hasUnsavedChanges = true;
    }
    setWriterText(inmWriterText);
  };

  const onDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDropFile = event => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = evt => {
        const inmWriterText = { ...writerText };
        inmWriterText.text = evt.target.result;
        inmWriterText.fileName = file.name;
        setWriterText(inmWriterText);
      };
    }
    setIsDragging(false);
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
    <div
      className={isDragging ? styles.dragging : ''}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDropFile}>
      {isDragging && <label>{messages[language]['dragFile']}</label>}
      {!isDragging && (
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
      )}
      <audio className="audio-element" ref={audioRef}>
        <source src={typeWriter2}></source>
      </audio>
    </div>
  );
};

export { Writer };
