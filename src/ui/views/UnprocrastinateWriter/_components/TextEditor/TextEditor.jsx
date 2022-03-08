import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import styles from './TextEditor.module.scss';

import { AwesomeIcons } from 'conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputSelect } from 'ui/views/_components/InputSelect';
import { InputText } from 'ui/views/_components/InputText';

import { fontState } from 'store';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const TextEditor = () => {
  const [fontOptions, setFontOptions] = useRecoilState(fontState);

  const language = useRecoilValue(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  const getSelectElement = fontValue => fontOptions.fontFamilyList.find(font => font.value === fontValue);

  const onChangeFontProperty = (fontProperty, fontPropertyValue) => {
    const inmFontOptions = { ...fontOptions };
    inmFontOptions[fontProperty] = fontPropertyValue;
    setFontOptions(inmFontOptions);
  };

  return (
    <div className={styles.textEditorWrapper}>
      <div className={styles.optionWrapper}>
        <span>{messages[language]['fontSize']}:</span>
        <InputText
          className={styles.fontSizeInput}
          onInput={e => onChangeFontProperty('fontSize', e.target.value)}
          onChange={e => onChangeFontProperty('fontSize', e.target.value)}
          step={1}
          type="number"
          value={fontOptions.fontSize}></InputText>
        <span>pt</span>
      </div>
      <div className={styles.optionWrapper}>
        <span>{messages[language]['fontColor']}:</span>
        <InputText
          className={styles.fontColorInput}
          onInput={e => onChangeFontProperty('fontColor', e.target.value)}
          onKeyPress={e => onChangeFontProperty('fontColor', e.target.value)}
          type="color"
          value={fontOptions.fontColor}></InputText>
      </div>
      <div className={styles.optionWrapper}>
        <span>{messages[language]['fontFamily']}:</span>
        <InputSelect
          className={styles.fontFamilySelect}
          filterClassName={styles.fontFamilyFilter}
          onChange={e => onChangeFontProperty('fontFamily', getSelectElement(e.target.value))}
          onFilter={filtered => onChangeFontProperty('fontFamily', getSelectElement(filtered))}
          options={fontOptions.fontFamilyList}
          value={fontOptions.fontFamily}></InputSelect>
      </div>
      <div className={styles.optionWrapper}>
        <span>{messages[language]['fontStyle']}:</span>
        <div className={styles.fontWeightStyle}>
          <FontAwesomeIcon
            aria-hidden={false}
            className={fontOptions.fontStyle === 'italic' ? styles.optionSelected : styles.optionUnselected}
            icon={AwesomeIcons('italic')}
            onClick={e => onChangeFontProperty('fontStyle', fontOptions.fontStyle === 'italic' ? 'normal' : 'italic')}
          />
          <FontAwesomeIcon
            aria-hidden={false}
            className={fontOptions.fontWeight === 'bold' ? styles.optionSelected : styles.optionUnselected}
            icon={AwesomeIcons('bold')}
            onClick={e => onChangeFontProperty('fontWeight', fontOptions.fontWeight === 'bold' ? 'normal' : 'bold')}
          />
        </div>
        {/* <InputText
          className={styles.fontColorInput}
          onInput={e => onChangeFontProperty('fontColor', e.target.value)}
          onKeyPress={e => onChangeFontProperty('fontColor', e.target.value)}
          type="color"
          value={fontOptions.fontColor}></InputText> */}
      </div>
    </div>
  );
};

export { TextEditor };
