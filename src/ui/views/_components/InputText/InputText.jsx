import React from 'react';

const InputText = ({ className, onChange = () => {}, onInput, onKeyPress, step = 1, type = 'text', value }) => {
  console.log({ value });
  return (
    <input
      className={className}
      onInput={onInput}
      onChange={onChange}
      onKeyPress={onKeyPress}
      step={step}
      type={type}
      value={value}></input>
  );
};

export { InputText };

// import React, { useState } from 'react';

// const InputText = ({
//   className,
//   onInput,
//   onKeyDown = () => {},
//   onKeyPress = () => {},
//   step = 1,
//   type = 'text',
//   value
// }) => {
//   console.log({ value });
//   const [inputValue, setInputValue] = useState(value);

//   const handleOnKeyPress = event => {
//     setInputValue(event.target.value);
//     onKeyPress(event);
//   };

//   return (
//     <input
//       className={className}
//       onInput={onInput}
//       onKeyPress={handleOnKeyPress}
//       step={step}
//       type={type}
//       value={inputValue}></input>
//   );
// };

// export { InputText };
