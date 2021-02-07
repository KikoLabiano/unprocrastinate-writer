import React, { useEffect, useRef, useReducer } from 'react';
import { useRecoilState } from 'recoil';

import isNil from 'lodash/isNil';

import styles from './MusicPlayer.module.css';

import AlexMasonAttempts from '../../../../assets/sounds/music/AlexMasonAttempts.mp3';
import AlexMasonPrisoner from '../../../../assets/sounds/music/AlexMasonPrisoner.mp3';
import DanielBirchBrokenSurfaces2 from '../../../../assets/sounds/music/DanielBirchBrokenSurfaces2.mp3';

import { AwesomeIcons } from '../../../../../conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WaveViewer } from './_components/WaveViewer';

import { writerSoundState } from '../../../../../store';
import { musicPlayerReducer } from './_functions/Reducers/musicPlayerReducer';

const MusicPlayer = () => {
  const audioRef = useRef();
  const progressBarRef = useRef();

  const [writerSoundOptions, setWriterSoundOptions] = useRecoilState(writerSoundState);

  const [musicPlayerState, musicPlayerDispatcher] = useReducer(musicPlayerReducer, {
    isPlaying: false,
    isRandomActive: false,
    listOfSongs: [AlexMasonAttempts, AlexMasonPrisoner, DanielBirchBrokenSurfaces2],
    listOfSongsData: [
      { title: 'Attemps', author: 'Alex Mason', album: 'Albion' },
      { title: 'Prisoner', author: 'Alex Mason', album: 'Albion' },
      { title: 'Broken surfaces 2', author: 'Daniel Birch', album: 'Restless States' }
    ],
    playingSong: 0,
    progressBarValue: 0,
    volume: 0.5
  });

  const {
    isPlaying,
    isRandomActive,
    listOfSongs,
    listOfSongsData,
    playingSong,
    progressBarValue,
    volume
  } = musicPlayerState;

  useEffect(() => {
    if (!isNil(audioRef) && !isNil(audioRef.current)) {
      audioRef.current.addEventListener('ended', onNextSong);
    }
  }, []);

  useEffect(() => {
    if (!isNil(audioRef) && !isNil(audioRef.current)) {
      console.log({ volume });
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // if (!isNil(playingSong)) {
    if (!isNil(audioRef) && !isNil(audioRef.current)) {
      audioRef.current.src = listOfSongs[playingSong];
      audioRef.current.load();

      console.log(audioRef.current.currentSrc);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
    // }
  }, [playingSong, isPlaying]);

  const onChangeSongProgress = e => {
    console.log({ e });
    var percent = e.nativeEvent.offsetX / progressBarRef.current.offsetWidth;
    console.log(percent, e.nativeEvent.offsetX, progressBarRef.current.offsetWidth, audioRef.current.duration);
    audioRef.current.currentTime = percent * audioRef.current.duration;
    musicPlayerDispatcher({ type: 'SET_PROGRESS_BAR', payload: percent * 100 });
  };

  const onChangeVolume = e => {
    console.log(e.target.value);
    musicPlayerDispatcher({ type: 'SET_VOLUME', payload: e.target.value / 100 });
  };

  const onNextSong = () => {
    if (isRandomActive) {
      musicPlayerDispatcher({
        type: 'SET_PLAYING_SONG',
        payload: generateRandom(0, listOfSongs.length - 1, playingSong)
      });
    } else {
      let inmPlayingSong = playingSong;
      if (inmPlayingSong === listOfSongs.length - 1) {
        musicPlayerDispatcher({ type: 'SET_PLAYING_SONG', payload: 0 });
      } else {
        inmPlayingSong = inmPlayingSong + 1;
        musicPlayerDispatcher({ type: 'SET_PLAYING_SONG', payload: inmPlayingSong });
      }
    }
  };

  const onPlayMusic = () => {
    if (!isNil(audioRef) && !isNil(audioRef.current)) {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      musicPlayerDispatcher({ type: 'SET_IS_PLAYING', payload: !isPlaying });
    }
  };

  const onPreviousSong = () => {
    if (isRandomActive) {
      musicPlayerDispatcher({
        type: 'SET_PLAYING_SONG',
        payload: generateRandom(0, listOfSongs.length - 1, playingSong)
      });
    } else {
      let inmPlayingSong = playingSong;
      if (inmPlayingSong === 0) {
        musicPlayerDispatcher({ type: 'SET_PLAYING_SONG', payload: listOfSongs.length - 1 });
      } else {
        inmPlayingSong = inmPlayingSong - 1;
        musicPlayerDispatcher({ type: 'SET_PLAYING_SONG', payload: inmPlayingSong });
      }
    }
  };

  const onRandomSong = () => musicPlayerDispatcher({ type: 'SET_RANDOM_ACTIVE' });

  const onToggleTypeWriterSoundOff = () => {
    const inmWriterSoundOptions = { ...writerSoundOptions };
    inmWriterSoundOptions.isSoundActive = !inmWriterSoundOptions.isSoundActive;
    setWriterSoundOptions(inmWriterSoundOptions);
  };

  const onUpdateSongProgress = e => {
    if (isPlaying) {
      console.log(e.target.currentTime);
      musicPlayerDispatcher({ type: 'SET_PROGRESS_BAR', payload: (e.target.currentTime * 100) / e.target.duration });
    }
  };

  const generateRandom = (min, max, excluded) => {
    var n = Math.floor(Math.random() * (max - min) + min);
    if (n >= excluded) n++;
    return n;
  };

  return (
    <div className={styles.musicPlayerWrapper}>
      <div className={styles.musicPlayerView}>{/* <WaveViewer></WaveViewer> */}</div>
      <div className={styles.musicPlayerControls}>
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.musicPlayerControlsButton}
          icon={AwesomeIcons('previousSong')}
          onClick={onPreviousSong}
        />
        <FontAwesomeIcon
          aria-hidden={false}
          className={`${isPlaying ? styles.musicPlayerControlPressed : ''} ${styles.musicPlayerControlsButton}`}
          icon={AwesomeIcons(isPlaying ? 'pause' : 'play')}
          onClick={onPlayMusic}
        />
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.musicPlayerControlsButton}
          icon={AwesomeIcons('nextSong')}
          onClick={onNextSong}
        />
      </div>
      <div>
        <progress
          min="0"
          max="100"
          onClick={onChangeSongProgress}
          ref={progressBarRef}
          value={progressBarValue}></progress>
      </div>
      <div>
        <input
          className={styles.musicPlayerControlsVolume}
          type="range"
          min="1"
          max="100"
          onChange={onChangeVolume}
          value={volume * 100}
        />
      </div>
      <div>
        <FontAwesomeIcon
          aria-hidden={false}
          className={`${isRandomActive ? [styles.randomSelected, styles.musicPlayerControlPressed].join(' ') : ''} ${
            styles.musicPlayerControlsButton
          }`}
          icon={AwesomeIcons('random')}
          onClick={onRandomSong}
        />
      </div>
      {!isNil(playingSong) && (
        <div
          className={
            styles.songInfo
          }>{`${listOfSongsData[playingSong].title} - ${listOfSongsData[playingSong].author} (${listOfSongsData[playingSong].album})`}</div>
      )}
      <FontAwesomeIcon
        aria-hidden={false}
        className={`${
          writerSoundOptions.isSoundActive
            ? [styles.soundTypewriterActive, styles.musicPlayerControlPressed].join(' ')
            : styles.soundTypewriterDeactive
        } ${styles.soundTypewriter} ${styles.musicPlayerControlsButton}`}
        icon={AwesomeIcons('volume')}
        onClick={onToggleTypeWriterSoundOff}
      />
      <audio className="audio-element" ref={audioRef} onTimeUpdate={onUpdateSongProgress}>
        <source src={listOfSongs[playingSong]}></source>
      </audio>
    </div>
  );
};

export { MusicPlayer };
