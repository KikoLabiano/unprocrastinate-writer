import React from 'react';

import styles from './SideBar.module.css';

const SideBar = ({ children, options = [] }) => {
  return (
    <div id="sideNav" className={styles.sideNav}>
      {options.map((option, i) => (
        <div
          className={styles.sideNavElement}
          id={option.id}
          style={{ top: `${(i + 1) * 150}px`, backgroundColor: option.backgroundColor }}>
          {children[i]}
        </div>
      ))}
    </div>
  );
};

export { SideBar };
