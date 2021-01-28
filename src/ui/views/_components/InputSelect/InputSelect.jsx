import React from 'react';

const InputSelect = ({ className, onChange, hasEmptyOption = false, options, value }) => {
  return (
    <select className={className} onChange={onChange} value={value}>
      {hasEmptyOption ? <option value="">--Please choose an option--</option> : null}
      {options.map(opt => {
        console.log(opt.value === value.value);
        return (
          <option selected={opt.value === value.value} value={opt.value}>
            {opt}
          </option>
        );
      })}
    </select>
  );
};

export { InputSelect };
