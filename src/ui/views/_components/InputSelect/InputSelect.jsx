import React, { useEffect, useReducer } from 'react';

import { InputText } from '../InputText';

import { inputSelectReducer } from './_functions/Reducers/inputSelectReducer';

const InputSelect = ({ className, filtrable = true, onChange = () => {}, hasEmptyOption = false, options, value }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: this.props.value.value };

  //   this.handleChange = this.handleChange.bind(this);
  //   console.log(this.props.value);
  // }

  const [inputSelectState, inputSelectDispatcher] = useReducer(inputSelectReducer, {
    isFiltered: false,
    filteredOptions: options,
    filter: '',
    selectValue: value.value
  });

  const { filter, filteredOptions, isFiltered, selectValue } = inputSelectState;

  const handleChange = event => {
    inputSelectDispatcher({ type: 'SET_VALUE', payload: event.target.value });
    onChange(event);
  };

  const onFilter = value => {
    inputSelectDispatcher({
      type: 'SET_FILTER',
      payload: value
    });
  };

  return (
    <div>
      {filtrable && (
        <InputText
          // className={styles.fontSizeInput}
          onChange={e => onFilter(e.target.value)}
          type="text"
          value={filter}></InputText>
      )}
      <select className={className} onChange={handleChange} value={selectValue}>
        {hasEmptyOption ? <option value="">--Please choose an option--</option> : null}
        {!isFiltered
          ? options.map(opt => {
              return (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              );
            })
          : filteredOptions.map(opt => {
              return (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              );
            })}
      </select>
    </div>
  );
};

export { InputSelect };
