import React from 'react';
import { connect } from 'react-redux'
import handleBattleMenu from './displaySetting'
import './style.css'

function BattleMenuDisplay(props)  {
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

//=======================================================================
function mapStateToProps(state) {
  return {
    ...state.battleMenu,
  }
}

export default connect(mapStateToProps)(handleBattleMenu(BattleMenuDisplay))
