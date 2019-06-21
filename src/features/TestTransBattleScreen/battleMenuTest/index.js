import React from 'react';
import store from '../../../config/store'
import './style.css'

 export default function BattleMenuTest(battleMenu) {

  const combatBegin = store.getState().battleMenuReducer.combatBegin
console.log(combatBegin)
 

  //  if (!combatBegin) {  
  //   return (
  //   <div className='noncombat' />
  // )
  //  }
  // }
//=========================reveal battle Screen==========================

  

//======================functional section================================================


// else  {
//   return (         
//     <div className="battleMenuTest">
//       <table className="commandsMenu">
//         <tbody id='commands'>
//         <tr id="fight">
//           <td>FIGHT</td>
//         </tr>
//         <tr id="spell">            
//           <td>SPELL</td>
//         </tr>
//         <tr id="run">
//           <td>RUN</td>
//         </tr>
//         <tr id="item">
//           <td>ITEM</td>
//         </tr>               
//       </tbody>
//     </table> 
//       </div>
//     )
// }
// }

// //=========================reveal battle Screen==========================
// function battleBeginning(combatBegin) {
// combatBegin = true
// console.log('Starting Battle')
// console.log(combatBegin)
// }


function dispatchMenu() {
  store.dispatch({
    type: 'DISPLAY_MENU',
    payload: {
      combatBegin: true
    }
  })
}

function attemptMenuDisplay(combatBegin){
  const showMenu = store.getState().BattleMenuTest.combatBegin

  if(DisplayCombatMenu(showMenu))
        dispatchMenu()
}

function DisplayCombatMenu(combatBegin) {  
  return (
      <div className="battleMenuTest">
        <table className="commandsMenu">
          <tbody id='commands'>
            <tr id="fight">
              <td>FIGHT</td>
            </tr>
            <tr id="spell">            
              <td>SPELL</td>
            </tr>
            <tr id="run">
              <td>RUN</td>
            </tr>
            <tr id="item">
              <td>ITEM</td>
          </tr>               
        </tbody>
      </table> 
    </div>  
  )
}
}
//=======================================================================
function handleKeyDown(e) {
  e.preventDefault()
  
  switch(e.keyCode) {
      case 13:
            return attemptMenuDisplay('DISPLAY_MENU')
            
    default:
      return (
        <div className='noncombat' />
      )
  }
}

window.addEventListener('keydown', (e) => {
  handleKeyDown(e)
})
  
return battleMenu
}