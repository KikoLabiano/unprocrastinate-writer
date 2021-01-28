import React from 'react';
import { useRecoilState } from 'recoil';

import { InputText } from '../../../../views/_components/InputText';

import { fontState } from '../../../../../store';

const TextEditor = () => {
  const [fontOptions, setFontOptions] = useRecoilState(fontState);

  const onChangeFontProperty = (fontProperty, fontPropertyValue) => {
    console.log(fontPropertyValue);
    const inmFontOptions = { ...fontOptions };
    inmFontOptions[fontProperty] = fontPropertyValue;
    setFontOptions(inmFontOptions);
  };

  return (
    <div>
      <span>Font size:</span>
      <InputText
        onInput={e => onChangeFontProperty('fontSize', e.target.value)}
        onKeyPress={e => onChangeFontProperty('fontSize', e.target.value)}
        step={1}
        type="number"
        value={fontOptions.fontSize}></InputText>
      <span>pt</span>
    </div>
  );
};

export { TextEditor };
