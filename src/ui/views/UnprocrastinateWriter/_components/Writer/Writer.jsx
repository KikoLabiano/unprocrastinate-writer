import React from 'react';
import { useRecoilValue } from 'recoil';

import styles from './Writer.module.css';

import { fontState } from '../../../../../store';

const Writer = () => {
  const fontOptions = useRecoilValue(fontState);
  // const writerFont = fontOptions.fontFamilyList.filter(font => font.value === fontOptions.fontFamily.value) ;

  return (
    <textarea
      className={styles.writerArea}
      placeholder="Start writing..."
      rows={30}
      style={{
        color: fontOptions.fontColor,
        fontSize: `${fontOptions.fontSize}pt`,
        fontFamily: fontOptions.fontFamilyList.find(font => font.value === fontOptions.fontFamily.value).value
      }}></textarea>
  );
};

export { Writer };
