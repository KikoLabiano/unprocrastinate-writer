export const musicPlayerReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: payload
      };
    case 'SET_PLAYING_SONG':
      return {
        ...state,
        playingSong: payload
      };
    case 'SET_RANDOM_ACTIVE':
      return {
        ...state,
        isRandomActive: !state.isRandomActive
      };
    default:
      return state;
  }
};
