import React from 'react';

import styles from './Writer.module.css';

const Writer = ({ fontOptions = { fontColor: 'white', fontSize: '2rem', fontFamily: 'calibri' } }) => {
  return (
    <textarea
      className={styles.writerArea}
      rows={30}
      style={{ color: fontOptions.fontColor, fontSize: fontOptions.fontSize, fontFamily: fontOptions.fontFamily }}>
      Text goes here
    </textarea>
  );
};

export { Writer };
