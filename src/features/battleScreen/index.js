import React from 'react'
import store from '../../config/store'
import battleMenu from './battleMenu/index'


function BattleScreen(props) {
  store.dispatch({ type: 'BATTLE_SCREEN', payload: {
    //ES6 can use tiles:tiles or tiles, to mean the same thing
    battleMenu,
  }})
  return (
    <div
      style={{
          // this style section controls the battle menu box
        position: 'relative',
        width: '820px',
        height: '560px',
        margin: '0 auto', 
      }}
    >
    </div>
  )
}
function battleBeginning() {
    console.log('Starting Battle')
}

function handleKeyDown(e) {
    e.preventDefault()
    
    switch(e.keyCode) {
        case 13:
            return battleBeginning()

      default:
        console.log(e.keyCode)
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })
export default BattleScreen