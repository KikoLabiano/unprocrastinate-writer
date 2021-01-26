export const upReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_BACKGROUND_IMAGE':
      return {
        ...state,
        backgroundImg: payload
      };

    default:
      return state;
  }
};
