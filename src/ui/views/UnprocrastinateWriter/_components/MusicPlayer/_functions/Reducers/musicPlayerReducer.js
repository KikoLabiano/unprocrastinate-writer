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
    case 'SET_PROGRESS_BAR':
      console.log({ payload });
      return {
        ...state,
        progressBarValue: payload
      };
    case 'SET_RANDOM_ACTIVE':
      return {
        ...state,
        isRandomActive: !state.isRandomActive
      };
    case 'SET_VOLUME':
      return {
        ...state,
        volume: payload
      };
    default:
      return state;
  }
};
