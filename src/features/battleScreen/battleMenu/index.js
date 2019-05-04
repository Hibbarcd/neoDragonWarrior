import React from 'react';
// import store from '../../config/store'
import './style.css'
import { connect } from 'react-redux';

 function BattleMenu(props) {
        return (         
        <div className="battleMenu">
            <h1> Battle Menu </h1>
              <h2>
                <ul>LV</ul>
                <ul>HP</ul>
                <ul>MP</ul>
                <ul>E</ul>
              </h2>    
          </div>
        )
 }
   function mapStateToProps(state) {
      return {
        ...state.player,
      } 
    }
   export default connect(mapStateToProps)(BattleMenu);