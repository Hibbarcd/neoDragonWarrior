import React from 'react';
// import store from '../../config/store'
import './style.css'
import { connect } from 'react-redux';

 function BattleMenu(props) {
        return (         
        <div className="battleMenu">
        <h1>Battle Commands</h1>
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
   function mapStateToProps(state) {
      return {
        ...state.player,
      } 
    }
   export default connect(mapStateToProps)(BattleMenu);