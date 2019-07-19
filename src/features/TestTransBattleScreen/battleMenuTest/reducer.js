const initialState = {
    combatBegin: false,
  }
  
  const battleMenuReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'DISPLAY_MENU':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default battleMenuReducer