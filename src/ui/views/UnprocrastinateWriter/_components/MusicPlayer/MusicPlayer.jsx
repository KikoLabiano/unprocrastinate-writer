import React, { useRef } from 'react';

import isNil from 'lodash/isNil';

import AlexMasonAttempts from '../../../../assets/sounds/music/AlexMasonAttempts.mp3';

const MusicPlayer = () => {
  const audioRef = useRef();
  const onPlayMusic = () => {
    if (!isNil(audioRef) && !isNil(audioRef.current)) {
      audioRef.current.play();
    }
  };
  return (
    <div onClick={onPlayMusic}>
      Play!
      <audio className="audio-element" ref={audioRef}>
        <source src={AlexMasonAttempts}></source>
      </audio>
    </div>
  );
};

export { MusicPlayer };
