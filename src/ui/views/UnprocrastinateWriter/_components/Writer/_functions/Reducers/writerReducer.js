export const writerReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        textValue: payload
      };
    default:
      return state;
  }
};
