import store from '../../config/store'

export default function handleMusic(player) {
    
    this.bgMusic = new Audio('Adventure.mp3');
    this.bgMusic.volume = 0.4;
    this.bgMusic.loop = true;
 }
componentDidMount() {
   const audio = new Audio();
   audio.src = "Adventure.mp3"
}

playSong(audio) {  
  console.log('audio playing')
  audio.play();
}

function mapStateToProps(state) {
    return {
      ...state.player,
    }
  }
}
