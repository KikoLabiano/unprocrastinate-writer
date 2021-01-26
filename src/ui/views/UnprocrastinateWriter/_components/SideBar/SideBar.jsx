import React from 'react';

import styles from './SideBar.module.css';

const SideBar = ({ options = [] }) => {
  return (
    <div id="sideNav" className={styles.sideNav}>
      {options.map((option, i) => (
        <a href="#" id={option.id} style={{ top: `${(i + 1) * 100}px`, backgroundColor: option.backgroundColor }}>
          {option.label}
        </a>
      ))}
    </div>
  );
};

export { SideBar };
