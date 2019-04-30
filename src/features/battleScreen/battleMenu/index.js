import React from 'react';
// import store from '../../config/store'
import './style.css'

import { connect } from 'react-redux';

 function BattleMenu(props) {
        return (
          <div>
          <h1> Battle Menu </h1>
          <h2>
            <ul>LV</ul>
            <ul>HP</ul>
            <ul>MP</ul>
            <ul>E</ul>
          </h2>
          

        <div className="BattleMenu"
        style={{
           position: 'relative',
           margin: '0 auto',
           height: '400px',
           width: '255px',
           right: '62vh',
           bottom: '550px',
           border: '5px solid white',
           borderRadius: '15px',
           backgroundColor: 'black',
           color: 'white',
        }}
        /> 
        </div> 
    )
   }

   function mapStateToProps(state) {
      return {
        ...state.player,
      }
    }
   export default connect(mapStateToProps)(BattleMenu);