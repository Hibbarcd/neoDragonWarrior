import React from 'react';
import { connect } from 'react-redux';

 class AudioController {
   constructor() {

    this.bgMusic = new Audio('Adventure.mp3');
    this.bgMusic.volume = 0.4;
    this.bgMusic.loop = true;
   }
   
 startMusic() {
  this.bgMusic = new Audio();
  console.log('audio playing')
  }

stopMusic() {  
  console.log('audio stopped')
  }
}

class AudioSetup {
  constructor() {
    this.audioController = new AudioController()
  }

  autoplayAudio() {
    this.audioController.startMusic()
  }
}
if ( document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ReadyMusic());
}
else {
  ReadyMusic();
}

function ReadyMusic(props) {
  return ( AudioSetup.readyMusic()
  )
}

function mapStateToProps(state) {
  return {
    ...state.player,
  }
}
export default connect(mapStateToProps)(ReadyMusic)