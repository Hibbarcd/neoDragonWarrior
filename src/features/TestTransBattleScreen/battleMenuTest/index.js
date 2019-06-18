import React from 'react';
// import store from '../../config/store'
import './style.css'
import { connect } from 'react-redux';

 function BattleMenuTest(props) {
        return (         
        <div className="battleMenuTest">
          <table className="commandsMenu">
          <h1>Battle Commands</h1>
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
   function mapStateToProps(state) {
      return {
        ...state.player,
      } 
    }
   export default connect(mapStateToProps)(BattleMenuTest);