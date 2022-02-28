import React, { useEffect, useState } from 'react';

import styles from './Toast.module.scss';

const Toast = ({ message = '', inputRef }) => {
  console.log(inputRef);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [isVisible]);

  const show = () => {
    setIsVisible(true);
  };

  return (
    isVisible && (
      <div id="toast" className={`${styles.toast} ${isVisible ? styles.show : ''}`} ref={inputRef}>
        {message}
      </div>
    )
  );
};

export { Toast };
