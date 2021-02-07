import React from 'react';
import { useRecoilValue } from 'recoil';

import styles from './FileTitle.module.css';

import { AwesomeIcons } from '../../../../../conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '../../../../views/_components/Tooltip';

import { fontState, writerTextState } from '../../../../../store';

const FileTitle = () => {
  const writerText = useRecoilValue(writerTextState);
  const fontOptions = useRecoilValue(fontState);

  console.log(fontOptions);
  return (
    <div className={styles.fileTitleWrapper}>
      <h3 style={{ color: fontOptions.fontColor }}>
        {writerText.fileName !== '' ? (
          !writerText.hasUnsavedChanges ? (
            writerText.fileName
          ) : (
            <>
              <span>{writerText.fileName}</span>
              <Tooltip content="Unsaved changes" direction="bottom">
                <FontAwesomeIcon
                  aria-hidden={false}
                  className={styles.unsavedChanges}
                  icon={AwesomeIcons('exclamation')}
                />
              </Tooltip>
            </>
          )
        ) : (
          <span>Not saved!</span>
        )}
      </h3>
    </div>
  );
};

export { FileTitle };
