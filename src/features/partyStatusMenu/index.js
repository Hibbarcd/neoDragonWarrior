import React from 'react';
import { connect } from 'react-redux';
import './style.css'

 function PartyMenu(props) {
        return (
          <table className="Party_Status_Menu"
                style={{
          // this style section controls the battle menu box
        position: 'relative',
        bottom: '42vh',            
      }}
      >
          {/* <h1> Const(fight screen party stats) Menu </h1> */}
          <tbody>
            <tr>
              <td>HP</td>
              <td>H45</td>              
              <td>H123</td>
              <td>H46</td>
            </tr>
            <tr>
              <td>MP</td>
              <td>M56</td>              
              <td>M23</td>
              <td>M16</td>
            </tr>
            <tr>
              <td>LV</td>
              <td>Lv6</td>              
              <td>Lv23</td>
              <td>Lv46</td>
            </tr>
          </tbody>
        </table> 
    )
   }

   function mapStateToProps(state) {
      return {
        ...state.player,
      }
    }
   export default connect(mapStateToProps)(PartyMenu);