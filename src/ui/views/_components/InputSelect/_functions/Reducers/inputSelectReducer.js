export const inputSelectReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_VALUE':
      return {
        ...state,
        selectValue: payload
      };
    case 'SET_FILTER':
      console.log(
        payload,
        state.filteredOptions,
        state.filteredOptions.filter(filteredOption => filteredOption.value.includes(payload))
      );
      return {
        ...state,
        isFiltered: payload !== '',
        filter: payload,
        filteredOptions:
          payload !== ''
            ? [...state.filteredOptions.filter(filteredOption => filteredOption.value.includes(payload))]
            : state.filteredOptions
      };
    default:
      return state;
  }
};
