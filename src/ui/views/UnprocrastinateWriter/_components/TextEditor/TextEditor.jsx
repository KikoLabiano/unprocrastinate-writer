import React from 'react';
import { useRecoilState } from 'recoil';
import Select from 'react-select';

import styles from './TextEditor.module.css';

import { InputSelect } from '../../../../views/_components/InputSelect';
import { InputText } from '../../../../views/_components/InputText';

import { fontState } from '../../../../../store';

const TextEditor = () => {
  const [fontOptions, setFontOptions] = useRecoilState(fontState);

  const onChangeFontProperty = (fontProperty, fontPropertyValue) => {
    console.log(fontPropertyValue);
    const inmFontOptions = { ...fontOptions };
    inmFontOptions[fontProperty] = fontPropertyValue;
    console.log(inmFontOptions);
    setFontOptions(inmFontOptions);
  };

  return (
    <div className={styles.textEditorWrapper}>
      <div className={styles.optionWrapper}>
        <span>Font size:</span>
        <InputText
          className={styles.fontSizeInput}
          onInput={e => onChangeFontProperty('fontSize', e.target.value)}
          onKeyPress={e => onChangeFontProperty('fontSize', e.target.value)}
          step={1}
          type="number"
          value={fontOptions.fontSize}></InputText>
        <span>pt</span>
      </div>
      <div className={styles.optionWrapper}>
        <span>Font color:</span>
        <InputText
          className={styles.fontColorInput}
          onInput={e => onChangeFontProperty('fontColor', e.target.value)}
          onKeyPress={e => onChangeFontProperty('fontColor', e.target.value)}
          type="color"
          value={fontOptions.fontColor}></InputText>
      </div>
      <div className={styles.optionWrapper}>
        <span>Font color:</span>
        {/* <InputSelect
          className={styles.fontColorSelect}
          onChange={e => onChangeFontProperty('fontFamily', { value: e.target.value })}
          options={fontOptions.fontFamilyList}
          value={fontOptions.fontFamily}></InputSelect> */}
        <Select options={fontOptions.fontFamilyList} />
      </div>
    </div>
  );
};

export { TextEditor };
