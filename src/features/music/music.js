import React from 'react';

//===========================================================

function GlobalAudio() {

  return (
      <div>
        <audio id='global' controls autoPlay><source src="https://www.woodus.com/den/gallery/graphics/dq3snes/mp3/09%20Dragon%20Quest%203%20-%20Adventure.mp3" id='myaudio' type="audio/mpeg" />
        Your browser does not support the audio tag.
        </audio>
      </div>
    )
  }


export default (GlobalAudio);