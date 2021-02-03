import React from 'react';
import { useRecoilValue } from 'recoil';

import styles from './FileTitle.module.css';

import { fontState, writerTextState } from '../../../../../store';

const FileTitle = () => {
  const writerText = useRecoilValue(writerTextState);
  const fontOptions = useRecoilValue(fontState);

  console.log(fontOptions);
  return (
    <div className={styles.fileTitleWrapper}>
      <h3 style={{ color: fontOptions.fontColor }}>
        {writerText.fileName !== '' ? writerText.fileName : 'Not saved!'}
      </h3>
    </div>
  );
};

export { FileTitle };
