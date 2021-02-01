import React from 'react';
// import electron from 'electron';

// import fs from 'fs';
import path from 'path';

import styles from './FileManagement.module.css';

import { AwesomeIcons } from '../../../../../conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FileManagement = () => {
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
    </div>
  );
};

export { FileManagement };
