const initialState = {
    combatBegin: false,
  }
  
  const battleMenuReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'UPDATE_MENU':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default battleMenuReducer