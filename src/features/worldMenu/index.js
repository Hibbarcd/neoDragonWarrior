import React from 'react';
// import store from '../../config/store'
import { connect } from 'react-redux';
import './style.css'


 function PartyMenu(props) {
        return (
          <div>
          <h1> Battle Menu </h1>
          <h2>
            <ul>LV</ul>
            <ul>HP</ul>
            <ul>MP</ul>
            <ul>E</ul>
          </h2>
        <div className="WorldPartyMenu"
        style={{
           position: 'relative',
           margin: '0 auto',
           height: '150px',
           width: '814px',
           bottom: '515px',
           border: '5px solid white',
           borderRadius: '15px',
           backgroundColor: 'black',
           color: 'white',
           zIndex: '10',
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
   export default connect(mapStateToProps)(PartyMenu);