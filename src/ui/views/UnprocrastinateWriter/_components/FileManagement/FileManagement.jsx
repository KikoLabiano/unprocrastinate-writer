import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import isNil from 'lodash/isNil';
// import electron from 'electron';

// import fs from 'fs';
import path from 'path';

import styles from './FileManagement.module.css';

import { writerTextState } from '../../../../../store';

import { AwesomeIcons } from '../../../../../conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Toast } from '../../../_components/Toast';

const FileManagement = () => {
  const [writerText, setWriterText] = useRecoilState(writerTextState);
  const toastRef = useRef();

  const onCopyToClipboard = () => {
    let text = writerText.text;
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {
        console.error('Error in copying text: ', err);
      });
    console.log(toastRef);
    if (!isNil(toastRef.current)) {
      toastRef.current.show();
    }
  };

  const onOpenFile = () => {
    const electron = window.require('electron');
    const fs = window.require('fs');
    const dialog = electron.remote.dialog;
    dialog
      .showOpenDialog({
        properties: ['openFile', 'multiSelections']
      })
      .then(result => {
        fs.readFile(result.filePaths[0], 'utf-8', (err, data) => {
          if (err) {
            console.error('An error ocurred reading the file :' + err.message);
            return;
          }
          const inmWriterText = { ...writerText };
          inmWriterText.text = data;
          inmWriterText.fileName = result.filePaths[0];
          setWriterText(inmWriterText);
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  const onSaveFile = () => {
    const electron = window.require('electron');
    const fs = window.require('fs');
    const dialog = electron.remote.dialog;
    dialog
      .showSaveDialog({
        title: 'Select the File Path to save',
        defaultPath: path.join(__dirname, '../assets/sample.txt'),
        buttonLabel: 'Save',
        // Restricting the user to only Text Files.
        filters: [
          {
            name: 'Text Files',
            extensions: ['txt', 'docx']
          }
        ],
        properties: []
      })
      .then(file => {
        // Stating whether dialog operation was cancelled or not.
        console.log(file.canceled);
        if (!file.canceled) {
          console.log(file.filePath.toString());
          // Creating and Writing to the sample.txt file
          fs.writeFile(file.filePath.toString(), writerText.text, function (err) {
            if (err) throw err;
            const inmWriterText = { ...writerText };
            inmWriterText.fileName = file.filePath.toString();
            setWriterText(inmWriterText);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.fileManagementWrapper}>
      <FontAwesomeIcon
        aria-hidden={false}
        className={styles.fileManagementButton}
        icon={AwesomeIcons('folder')}
        onClick={onOpenFile}
      />
      <FontAwesomeIcon
        aria-hidden={false}
        className={styles.fileManagementButton}
        icon={AwesomeIcons('save')}
        onClick={onSaveFile}
      />
      <FontAwesomeIcon
        aria-hidden={false}
        className={styles.fileManagementButton}
        icon={AwesomeIcons('copy')}
        onClick={onCopyToClipboard}
      />
      <Toast message="Text copied!" inputRef={toastRef} />
    </div>
  );
};

export { FileManagement };
