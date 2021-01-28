import React from 'react';

const InputText = ({ className, onInput, onKeyPress, step = 1, type = 'text', value }) => {
  console.log({ value });
  return (
    <input
      className={className}
      onInput={onInput}
      onKeyPress={onKeyPress}
      step={step}
      type={type}
      value={value}></input>
  );
};

export { InputText };
