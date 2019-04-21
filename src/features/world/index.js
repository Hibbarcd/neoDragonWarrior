
import React from 'react'
import Map from '../map'
import Player from '../player'
import { tiles } from '../../data/maps/1'
import store from '../../config/store'

function World(props) {
  store.dispatch({ type: 'ADD_TILES', payload: {
    //ES6 can use tiles:tiles or tiles, to mean the same thing
    tiles,
  }})
  return (
    <div
      style={{
        position: 'relative',
        width: '820px',
        height: '560px',
        margin: '0 auto',
      }}
    >
      <Map />
      <Player />
    </div>
  )
}

export default World