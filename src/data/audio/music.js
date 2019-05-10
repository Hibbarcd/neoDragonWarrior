import { connect } from 'react-redux';

    let bgMusic = Audio('Adventure.mp3')
    bgMusic.volume = 0.4
    bgMusic.loop = true
     
 startMusic() {
  Audio.bgMusic.play();
  console.log('audio playing')
  }
stopMusic() {  
  Audio.bgMusic.pause();
  console.log('audio stopped')
  }

//========================music timer===================================
// startCountDown() {
//   return setInterval(() => {
//       this.timeRemaining--;
//       this.timer.innerText = this.timeRemaining;
//           if (this.timeRemaining === 0)
//           this.gameOver();
//   }
//   ,1000);
// }
//======================================================================
function Audio() {
  const audioController = new AudioController()
  return (
    setTimeout(() => {
      audioController.startMusic()
    },5000)
  )
}
function mapStateToProps(state) {
  return {
    ...state.player, 
  }
}
export default connect(mapStateToProps)(Audio)