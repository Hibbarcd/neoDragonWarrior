import React from 'react';
// import store from '../../config/store'
// import './style.css';
import { connect } from 'react-redux';


 function PartyMenu(props) {
        return (
        <div
        style={{
           position: 'relative',
           margin: '0 auto',
           height: '150px',
           width: '814px',
           bottom: '367px',
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
   export default connect(mapStateToProps)(PartyMenu);