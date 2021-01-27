import React from 'react';

import styles from './WaveViewer.module.css';

const WaveViewer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wavesWrapper}>
        <div className={`${styles.line1} ${styles.line}`}></div>
        <div className={`${styles.line2} ${styles.line}`}></div>
        <div className={`${styles.line3} ${styles.line}`}></div>
        <div className={`${styles.line4} ${styles.line}`}></div>
        <div className={`${styles.line5} ${styles.line}`}></div>
        <div className={`${styles.line6} ${styles.line}`}></div>
        <div className={`${styles.line7} ${styles.line}`}></div>
      </div>
    </div>
  );
};

export { WaveViewer };
