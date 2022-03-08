import React from 'react';

import styles from './SideBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AwesomeIcons } from 'conf/AwesomeIcons';

const SideBar = ({ children, options = [] }) => {
  return options.map((option, i) => (
    <div
      className={styles.sideNavElement}
      id={option.id}
      key={option.id}
      style={{ top: `${option.top}px`, height: `${option.height}px` }}>
      <FontAwesomeIcon aria-hidden={false} className={styles.icon} icon={AwesomeIcons(option.icon)} />
      <div className={`${option.className ? option.className : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flexBasis: '90%' }}>{children[i]}</div>
        <div className={styles.sideBarLabel}>{option.label}</div>
      </div>
    </div>
  ));
};

export { SideBar };
