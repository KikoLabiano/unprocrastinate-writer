import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
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
  const writerText = useRecoilValue(writerTextState);
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

  const onSaveFile = () => {
    const electron = window.require('electron');
    const fs = window.require('fs');
    console.log(electron);
    console.log(electron.app);

    // fs.dir(electron.remote.app.getPath('appData') + '\\sticky-notes\\');
    // //Write in file
    // fs.write(
    //   electron.remote.app.getPath('appData') +
    //     '\\sticky-notes\\sticky' +
    //     electron.remote.getCurrentWindow().id +
    //     '.txt',
    //   'This is a test'
    // );
    const dialog = electron.remote.dialog;
    dialog
      .showSaveDialog({
        title: 'Select the File Path to save',
        defaultPath: path.join(__dirname, '../assets/sample.txt'),
        // defaultPath: path.join(__dirname, '../assets/'),
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
          fs.writeFile(file.filePath.toString(), 'This is a Sample File', function (err) {
            if (err) throw err;
            console.log('Saved!');
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
