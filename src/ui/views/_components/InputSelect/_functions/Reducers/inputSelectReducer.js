export const inputSelectReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_VALUE':
      console.log(payload);
      return {
        ...state,
        selectValue: payload
      };
    case 'SET_FILTER':
      return {
        ...state,
        isFiltered: payload.filter !== '',
        filter: payload.filter,
        filteredOptions:
          payload.filter !== ''
            ? payload.options.filter(filteredOption =>
                filteredOption.value.toLowerCase().includes(payload.filter.toLowerCase())
              )
            : state.filteredOptions
      };
    default:
      return state;
  }
};
