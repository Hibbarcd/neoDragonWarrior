// import store from '../../config/store'

// export default function handleMusic(player) {

//     function getMusicSelection(location) {
//         // eslint-disable-next-line
//         switch(location) {
//           case 'GLOBAL':
//             return ['Adventure.mp3' ]
        //   case 'TOWN':
        //     return [  ]
        //   case 'INN':
        //     return [  ]
        //   case 'ARMORY':
        //     return [  ]
//         }
//       }
//       function dispatchMusic(location) {
//         store.dispatch({
//           type: 'PLAY_MUSIC',
//           payload: {
//             position: newPos,
//             direction,
//             spriteLocation: getMusicSelection(location),
//           }
//         })
//       }
//  return player
// }
//=====================================================================
import {
  SET_ACTIVE_TRACK,
  PLAY_TRACK
} from './constants'

// sets active track
export function setActiveTrack (activeTrack) {
  return {
    type: SET_ACTIVE_TRACK,
    payload: activeTrack
  }

}
//====================================================================