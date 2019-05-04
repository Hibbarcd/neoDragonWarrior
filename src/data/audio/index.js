import React from 'react';
import { connect } from 'react-redux';
import handleMusic from './music'


 function AudioController(props) {
      return null(
      <div
      />
      )
    }

    function mapStateToProps(state) {
      return {
        ...state.player,
      }
    }
  export default connect(mapStateToProps)(handleMusic(AudioController))