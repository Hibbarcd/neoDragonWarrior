    const soundsData = {
        globalAmbient: 'Adventure.mp3'
      };


  const audioReducer = (state=soundsData, action) => {
    switch(action.type) {
      case 'PLAY_MUSIC':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default audioReducer