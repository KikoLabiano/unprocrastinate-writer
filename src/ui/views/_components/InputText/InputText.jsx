import React from 'react';

const InputText = ({
  className,
  onChange = () => {},
  onInput,
  onKeyPress,
  placeholder,
  step = 1,
  type = 'text',
  value
}) => {
  console.log(value);
  return (
    <input
      className={className}
      onChange={onChange}
      onInput={onInput}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      step={step}
      type={type}
      value={value}></input>
  );
};

export { InputText };
