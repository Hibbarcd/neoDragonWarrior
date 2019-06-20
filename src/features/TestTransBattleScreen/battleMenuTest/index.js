import React from 'react';
// import store from '../../config/store'
import './style.css'
import { connect } from 'react-redux';
import App from '../../../App';

 function BattleMenuTest(props) {
   let combatBegin = props.combatBegin 
   console.log(combatBegin)
   combatBegin = false;
   console.log(combatBegin)

   if (props.combatBegin) {  
    return (
    <div className='noncombat' />
  )
   }
   
      else  {
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
 
//=========================reveal battle Screen==========================
function battleBeginning(combatBegin) {
  combatBegin = true
  console.log('Starting Battle')
  console.log(combatBegin)
}
  

//======================================================================
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
   function mapStateToProps(state) {
      return {
        ...state.player,
      } 
    }
  
   export default connect(mapStateToProps)(BattleMenuTest);