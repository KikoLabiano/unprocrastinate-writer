import React from 'react';
import { useRecoilValue } from 'recoil';

import styles from './Writer.module.css';

import { fontState } from '../../../../../store';

const Writer = () => {
  const fontProperties = useRecoilValue(fontState);

  return (
    <textarea
      className={styles.writerArea}
      placeholder="Start writing..."
      rows={30}
      style={{
        color: fontProperties.fontColor,
        fontSize: `${fontProperties.fontSize}pt`,
        fontFamily: fontProperties.fontFamily
      }}></textarea>
  );
};

export { Writer };
