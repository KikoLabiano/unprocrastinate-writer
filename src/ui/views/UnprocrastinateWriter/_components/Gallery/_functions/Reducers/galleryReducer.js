export const galleryReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CHANGE_BACKGROUND':
      return {
        ...state,
        backgroundImg: payload
      };
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: payload
      };
    default:
      return state;
  }
};
