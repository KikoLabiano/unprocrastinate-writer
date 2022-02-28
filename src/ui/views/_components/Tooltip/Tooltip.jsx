import React, { useState } from 'react';
import styles from './Tooltip.module.scss';

const Tooltip = ({ children, content, delay, direction }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div className={styles.tooltipWrapper} onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <div className={`${styles.tooltipTip} ${styles[direction] || 'top'}`}>{content}</div>}
    </div>
  );
};

export { Tooltip };
