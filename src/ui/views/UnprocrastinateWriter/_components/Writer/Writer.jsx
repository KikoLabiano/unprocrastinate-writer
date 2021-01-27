import React from 'react';

import styles from './Writer.module.css';

const Writer = ({ fontOptions = { fontColor: 'white', fontSize: '2rem', fontFamily: 'calibri' } }) => {
  return (
    <textarea
      className={styles.writerArea}
      placeholder="Start writing..."
      rows={30}
      style={{
        color: fontOptions.fontColor,
        fontSize: fontOptions.fontSize,
        fontFamily: fontOptions.fontFamily
      }}></textarea>
  );
};

export { Writer };
