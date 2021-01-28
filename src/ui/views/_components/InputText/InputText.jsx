import React from 'react';

const InputText = ({ onInput, onKeyPress, step = 1, type = 'text', value }) => {
  return <input onInput={onInput} type={type} onKeyPress={onKeyPress} step={step} value={value}></input>;
};

export { InputText };
