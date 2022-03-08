import React, { useEffect, useReducer } from 'react';

import { useRecoilValue } from 'recoil';

import first from 'lodash/first';
import isEmpty from 'lodash/isEmpty';

import styles from './InputSelect.module.scss';

import { InputText } from '../InputText';

import { inputSelectReducer } from './_functions/Reducers/inputSelectReducer';

import { languagesAtom, messagesAtom } from 'ui/tools/Atoms/MessagesAtoms';

const InputSelect = ({
  className,
  filterClassName,
  filtrable = true,
  onChange = () => {},
  onFilter = () => {},
  hasEmptyOption = false,
  options,
  value
}) => {
  const [inputSelectState, inputSelectDispatcher] = useReducer(inputSelectReducer, {
    isFiltered: false,
    filteredOptions: options,
    filter: '',
    selectValue: value.value
  });

  const language = useRecoilValue(languagesAtom);
  const messages = useRecoilValue(messagesAtom);

  const { filter, filteredOptions, isFiltered, selectValue } = inputSelectState;

  useEffect(() => {
    if (isFiltered && !isEmpty(filteredOptions)) {
      inputSelectDispatcher({ type: 'SET_VALUE', payload: first(filteredOptions).value });
      onFilter(first(filteredOptions).value);
    }
  }, [isFiltered, filter]);

  const onHandleChange = event => {
    inputSelectDispatcher({ type: 'SET_VALUE', payload: event.target.value });
    onChange(event);
  };

  const onHandleFilter = value => {
    inputSelectDispatcher({
      type: 'SET_FILTER',
      payload: { filter: value, options }
    });
  };

  return (
    <div className={styles.inputSelectWrapper}>
      {filtrable && (
        <InputText
          className={filterClassName}
          onChange={e => onHandleFilter(e.target.value)}
          placeholder={messages[language]['searchFont']}
          type="text"
          value={filter}></InputText>
      )}
      <select className={className} onChange={onHandleChange} value={selectValue}>
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
