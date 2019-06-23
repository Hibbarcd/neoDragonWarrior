import store from '../../../config/store'


export default function handleBattleMenu(battleMenuDisplay) {

  function getNewState(newState, combatBegin) {
            // eslint-disable-next-line
    switch(combatBegin) {
      case 'DISPLAY_MENU':
            return (
              'state changed'
        )
  }        
  }
  
  function dispatchMenu(combatBegin, newState) {
    store.dispatch({
      type: 'DISPLAY_MENU',
      payload: {
        combatBegin: newState
      }
    })
  }
  console.log(dispatchMenu)
  
  
  function attemptMenuDisplay(combatBegin){
    
    const oldState = store.getState().battleMenu.combatBegin
    const newState = getNewState(oldState, combatBegin)
  console.log(newState)
    dispatchMenu()
  }
  
    
    
    //=======================================================================
  function handleKeyDown(e) {
    e.preventDefault()
    
    switch(e.keyCode) {
        case 13:
              return attemptMenuDisplay('DISPLAY_MENU')
              
      default:
        return (
            null
        )
    }
  }
  
  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })
  
  return battleMenuDisplay
  }