import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import isNil from 'lodash/isNil';

import spanishLogo from 'ui/assets/img/spanish.png';
import englishLogo from 'ui/assets/img/english.png';

import styles from './FileManagement.module.scss';

import { writerTextState } from 'store';

import { AwesomeIcons } from 'conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputText } from 'ui/views/_components/InputText';
import { Toast } from 'ui/views/_components/Toast';
import { Tooltip } from 'ui/views/_components/Tooltip';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const FileManagement = () => {
  const [writerText, setWriterText] = useRecoilState(writerTextState);

  const [language, setLanguage] = useRecoilState(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  const [fullScreen, setFullScreen] = useState(false);
  const inputFileRef = useRef();
  const toastRef = useRef();

  // useEffect(() => {
  //   const i_id = setInterval(() => {
  //     console.log(writerText.text);
  //     onCopyToClipboard();
  //   }, 3000);
  //   return () => {
  //     clearInterval(i_id);
  //   };
  // }, []);

  const onCopyToClipboard = () => {
    let text = writerText.text;
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch(err => {
        console.error('Error in copying text: ', err);
      });
    if (!isNil(toastRef.current)) {
      toastRef.current.show();
    }
  };

  const onFileNameChange = value => {
    const inmWriterText = { ...writerText };
    inmWriterText.fileName = value;
    setWriterText(inmWriterText);
  };

  const onFullScreen = () => {
    if (fullScreen) {
      document.exitFullscreen();
    } else {
      document.getElementById('root').requestFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  const onOpenFile = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = evt => {
        const inmWriterText = { ...writerText };
        inmWriterText.text = evt.target.result;
        inmWriterText.fileName = file.name;
        setWriterText(inmWriterText);
      };
      // reader.onerror = function (evt) {
      //     document.getElementById("fileContents").innerHTML = "error reading file";
      // }
    }
    // const electron = window.require('electron');
    // const fs = window.require('fs');
    // const dialog = electron.remote.dialog;
    // dialog
    //   .showOpenDialog({
    //     properties: ['openFile', 'multiSelections']
    //   })
    //   .then(result => {
    //     fs.readFile(result.filePaths[0], 'utf-8', (err, data) => {
    //       if (err) {
    //         console.error('An error ocurred reading the file :' + err.message);
    //         return;
    //       }
    //       const inmWriterText = { ...writerText };
    //       inmWriterText.text = data;
    //       inmWriterText.fileName = result.filePaths[0];
    //       setWriterText(inmWriterText);
    //     });
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  };

  // const onSaveAsFile = () => {
  //   const electron = window.require('electron');
  //   const fs = window.require('fs');
  //   const dialog = electron.remote.dialog;
  //   dialog
  //     .showSaveDialog({
  //       title: 'Select the File Path to save',
  //       defaultPath: path.join(__dirname, '../assets/sample.txt'),
  //       buttonLabel: 'Save',
  //       // Restricting the user to only Text Files.
  //       filters: [
  //         {
  //           name: 'Text Files',
  //           extensions: ['txt', 'docx']
  //         }
  //       ],
  //       properties: []
  //     })
  //     .then(file => {
  //       // Stating whether dialog operation was cancelled or not.
  //       console.log(file.canceled);
  //       if (!file.canceled) {
  //         console.log(file.filePath.toString());
  //         // Creating and Writing to the sample.txt file
  //         fs.writeFile(file.filePath.toString(), writerText.text, function (err) {
  //           if (err) throw err;
  //           const inmWriterText = { ...writerText };
  //           inmWriterText.fileName = file.filePath.toString();
  //           inmWriterText.hasUnsavedChanges = false;
  //           setWriterText(inmWriterText);
  //         });
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const download = (text, fileName) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const onSaveFile = () => {
    download(
      writerText.text,
      !writerText.fileName.includes('.txt') ? `${writerText.fileName}.txt` : writerText.fileName
    );
    // download(writerText.text, 'myfilename.txt', 'text/plain');
  };

  // const saveFile = async (blob) => {
  //   const a = document.createElement('a');
  //   a.download = 'my-file.txt';
  //   a.href = URL.createObjectURL(blob);
  //   a.addEventListener('click', (e) => {
  //     setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
  //   });
  //   a.click();
  // };

  // const obj = {hello: 'world'};
  // const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

  // saveFile(blob);

  return (
    <div className={styles.fileManagementWrapper}>
      <div className={styles.languagesWrapper}>
        <Tooltip content={messages[language]['english']} direction="bottom">
          <img
            alt={messages[language]['english']}
            className={`${styles.languageLogo} ${language === 'en' ? styles.languageActive : ''}`}
            onClick={() => setLanguage('en')}
            src={englishLogo}
          />
        </Tooltip>
        <Tooltip content={messages[language]['spanish']} direction="bottom">
          <img
            alt={messages[language]['spanish']}
            className={`${styles.languageLogo} ${language === 'es' ? styles.languageActive : ''}`}
            onClick={() => setLanguage('es')}
            src={spanishLogo}
          />
        </Tooltip>
      </div>
      <Tooltip content={messages[language]['openFile']} direction="bottom">
        <input accept=".txt" type="file" hidden id="file" onChange={onOpenFile} ref={inputFileRef} />
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('folder')}
          onClick={() => inputFileRef.current.click()}
        />
      </Tooltip>
      <Tooltip content={messages[language]['saveFile']} direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('save')}
          onClick={onSaveFile}
        />
      </Tooltip>
      {/* <Tooltip content="Save file as..." direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('saveAs')}
          onClick={onSaveAsFile}
        />
      </Tooltip> */}
      <Tooltip content={messages[language]['copyToClipboard']} direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={AwesomeIcons('copy')}
          onClick={onCopyToClipboard}
        />
      </Tooltip>
      <Tooltip content={messages[language][!fullScreen ? 'fullScreen' : 'restore']} direction="bottom">
        <FontAwesomeIcon
          aria-hidden={false}
          className={styles.fileManagementButton}
          icon={!fullScreen ? AwesomeIcons('desktop') : AwesomeIcons('minimize')}
          onClick={onFullScreen}
        />
      </Tooltip>
      <InputText
        className={styles.fileName}
        onChange={e => onFileNameChange(e.target.value)}
        placeholder={messages[language]['fileName']}
        type="text"
        value={writerText.fileName}></InputText>
      <Toast message="Text copied!" inputRef={toastRef} />
    </div>
  );
};

export { FileManagement };
