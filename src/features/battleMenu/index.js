import React from 'react';
// import store from '../../config/store'
import { connect } from 'react-redux';

 function BattleMenu(props) {
        return (
        <div className="BattleMenu"
        style={{
           position: 'relative',
           margin: '0 auto',
           height: '400px',
           width: '255px',
           right: '62vh',
           bottom: '555px',
           border: '5px solid white',
           borderRadius: '15px',
           backgroundColor: 'black',
           color: 'white',
        }}
        />  
    )
   }

   function mapStateToProps(state) {
      return {
        ...state.player,
      }
    }
   export default connect(mapStateToProps)(BattleMenu);