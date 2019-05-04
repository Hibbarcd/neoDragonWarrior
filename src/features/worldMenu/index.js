import React from 'react';
// import store from '../../config/store'
import { connect } from 'react-redux';
import './style.css'

 function PartyMenu(props) {
        return (
          <div className="worldMenu">
          <h1> Const Menu </h1>
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
   export default connect(mapStateToProps)(PartyMenu);