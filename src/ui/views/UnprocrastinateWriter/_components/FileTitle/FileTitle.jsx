import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';

import styles from './FileTitle.module.scss';

import { AwesomeIcons } from 'conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'ui/views/_components/Tooltip';

import { fontState, writerTextState } from 'store';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const FileTitle = () => {
  const writerText = useRecoilValue(writerTextState);
  const fontOptions = useRecoilValue(fontState);

  const language = useRecoilValue(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  const renderTitle = () => {
    if (writerText.fileName !== '') {
      if (!writerText.hasUnsavedChanges) {
        return writerText.fileName;
      } else {
        return (
          <Fragment>
            <span>{writerText.fileName}</span>
            <Tooltip content={messages[language]['unsavedChanges']} direction="bottom">
              <FontAwesomeIcon
                aria-hidden={false}
                className={styles.unsavedChanges}
                icon={AwesomeIcons('exclamation')}
              />
            </Tooltip>
          </Fragment>
        );
      }
    }
  };

  return (
    <div className={styles.fileTitleWrapper}>
      <h3 style={{ color: fontOptions.fontColor }}>{renderTitle()}</h3>
    </div>
  );
};

export { FileTitle };
