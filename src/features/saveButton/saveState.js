import React from 'react';
import './style.css';
import { connect } from 'react-redux';

function clickSave() {
  
    console.log('Game state saved!')
    console.log()
}
 function SaveBtn() {
        return (         
        <div onClick={() => clickSave()} className="saveButton">
        <h3>Save</h3>
          </div>
        )
 }
   function mapStateToProps(state) {
      return {
        ...state.SaveBtn,
      } 
    }
   export default connect(mapStateToProps)(SaveBtn);