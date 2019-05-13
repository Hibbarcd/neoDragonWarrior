
const initialState = {
  audioTrack: null,
  isPlaying: true,
};

export const audioReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'GLOBAL_TRACK':
    return {
      ...state,
      audioTrack: action.payload,
    }

  default: return state
  }
}

export default audioReducer
