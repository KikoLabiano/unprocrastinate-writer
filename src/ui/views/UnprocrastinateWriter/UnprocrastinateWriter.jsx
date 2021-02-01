import React from 'react';
import { useRecoilValue } from 'recoil';

import { backgroundState } from '../../../store';

import styles from './UnprocrastinateWriter.module.css';

import { FileManagement } from './_components/FileManagement';
import { Gallery } from './_components/Gallery';
import { MusicPlayer } from './_components/MusicPlayer';
import { SideBar } from './_components/SideBar';
import { TextEditor } from './_components/TextEditor';
import { Writer } from './_components/Writer';

const UnprocrastinateWriter = () => {
  const backgroundProperties = useRecoilValue(backgroundState);

  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(${backgroundProperties.listOfBackgrounds[backgroundProperties.selectedBackground]})`
      }}>
      <SideBar
        options={[
          { id: 'background', label: 'Background', icon: 'image', top: '150', height: '100' },
          { id: 'font', label: 'Font', icon: 'font', top: '300', height: '200' },
          { id: 'music', label: 'Music', icon: 'music', top: '550', height: '300' }
        ]}>
        {[
          <Gallery numberOfBackgrounds={backgroundProperties.listOfBackgrounds.length}></Gallery>,
          <TextEditor></TextEditor>,
          <MusicPlayer></MusicPlayer>
        ]}
      </SideBar>
      <div className={styles.container}>
        <Writer></Writer>
      </div>
      <FileManagement></FileManagement>
    </div>
  );
};
export { UnprocrastinateWriter };
