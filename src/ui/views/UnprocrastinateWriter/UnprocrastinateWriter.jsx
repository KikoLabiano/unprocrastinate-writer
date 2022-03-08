import React from 'react';
import { useRecoilValue } from 'recoil';

import { backgroundState } from 'store';

import styles from './UnprocrastinateWriter.module.scss';

// import { AwesomeIcons } from 'conf/AwesomeIcons';
import { FileManagement } from './_components/FileManagement';
import { FileTitle } from './_components/FileTitle';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gallery } from './_components/Gallery';
import { MusicPlayer } from './_components/MusicPlayer';
import { SideBar } from './_components/SideBar';
import { TextEditor } from './_components/TextEditor';
import { Writer } from './_components/Writer';

// import { useDarkMode } from 'ui/tools/Hooks/useDarkMode';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const UnprocrastinateWriter = () => {
  const backgroundProperties = useRecoilValue(backgroundState);

  const language = useRecoilValue(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  // const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(${backgroundProperties.listOfBackgrounds[backgroundProperties.selectedBackground].img})`
      }}>
      {/* <div className={styles.themeSwitcher}>
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.themeButton}
          icon={AwesomeIcons(isDarkMode ? 'lightTheme' : 'darkTheme')}
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
      </div> */}
      <SideBar
        options={[
          {
            id: 'background',
            label: messages[language]['gallery'],
            icon: 'image',
            top: '150',
            height: '115',
            className: styles.gallery
          },
          { id: 'font', label: messages[language]['font'], icon: 'font', top: '315', height: '200' },
          { id: 'music', label: messages[language]['music'], icon: 'music', top: '565', height: '300' }
        ]}>
        {[
          <Gallery numberOfBackgrounds={backgroundProperties.listOfBackgrounds.length}></Gallery>,
          <TextEditor></TextEditor>,
          <MusicPlayer></MusicPlayer>
        ]}
      </SideBar>
      <div className={styles.container}>
        <FileTitle></FileTitle>
        <Writer></Writer>
      </div>
      <div>
        <FileManagement></FileManagement>
      </div>
    </div>
  );
};
export { UnprocrastinateWriter };
