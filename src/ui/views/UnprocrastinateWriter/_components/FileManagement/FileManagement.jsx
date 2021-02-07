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
import { Tooltip } from '../../../../views/_components/Tooltip';

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

  const onSaveAsFile = () => {
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

  const onSaveFile = () => {
    const fs = window.require('fs');
    fs.writeFile(writerText.fileName.toString(), writerText.text, function (err) {
      if (err) throw err;
      const inmWriterText = { ...writerText };
      inmWriterText.fileName = writerText.fileName.toString();
      setWriterText(inmWriterText);
    });
  };

  return (
    <div className={styles.fileManagementWrapper}>
      <Tooltip content="Open file" direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('folder')}
          onClick={onOpenFile}
        />
      </Tooltip>
      <Tooltip content="Save file" direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('save')}
          onClick={onSaveFile}
        />
      </Tooltip>
      <Tooltip content="Save file as..." direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('saveAs')}
          onClick={onSaveAsFile}
        />
      </Tooltip>
      <Tooltip content="Copy to clipboard" direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('copy')}
          onClick={onCopyToClipboard}
        />
      </Tooltip>
      <Toast message="Text copied!" inputRef={toastRef} />
    </div>
  );
};

export { FileManagement };
