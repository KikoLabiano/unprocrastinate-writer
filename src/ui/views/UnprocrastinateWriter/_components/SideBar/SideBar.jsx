import React from 'react';

import styles from './SideBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AwesomeIcons } from '../../../../../conf/AwesomeIcons';

const SideBar = ({ children, options = [] }) => {
  return options.map((option, i) => (
    <div
      className={styles.sideNavElement}
      id={option.id}
      style={{ top: `${option.top}px`, height: `${option.height}px` }}>
      <FontAwesomeIcon aria-hidden={false} className={styles.icon} icon={AwesomeIcons(option.icon)} />
      {children[i]}
    </div>
  ));
};

export { SideBar };
