import React from 'react';
import { useRecoilValue } from 'recoil';

import first from 'lodash/first';

import styles from './Writer.module.css';

import { fontState } from '../../../../../store';

const Writer = () => {
  const fontProperties = useRecoilValue(fontState);
  console.log(fontProperties);
  return (
    <textarea
      className={styles.writerArea}
      placeholder="Start writing..."
      rows={30}
      style={{
        color: fontProperties.fontColor,
        fontSize: `${fontProperties.fontSize}pt`,
        fontFamily: first(fontProperties.fontFamilyList.filter(font => font.value === fontProperties.fontFamily.value))
          .value
      }}></textarea>
  );
};

export { Writer };
