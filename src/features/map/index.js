import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import './style.css';
import { connect } from 'react-redux';

function MapTile(props) { 
    return <div 
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
    }}
    />
 }
 function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'grass'
        case 2:
            return 'tree'
        case 3: 
            return 'tree2'
        case 4:
            return 'tree3'
        case 11:
            return 'chest'
        case 5:
            return 'rock'
        case 8:
            return 'rock2'
        case 10: 
            return 'water'
    }
   }
 function MapRow(props) { 
     return <div className='row'>
     {
         props.tiles.map(tile => <MapTile tile={tile} /> )
     }
     </div> 
  }

function Map(props) {
    return (
        <div 
        style={{
            position: 'relative',
            top: '0px',
            left: '0px',
            // border: '2px solid white',
            backgroundColor: '#42b842',
            width: '820px',
            height: '600px',
            margin: '0 auto',
        }}
        >
        {
            props.tiles.map( row => <MapRow tiles={row} /> )
        }
        </div>
    )
}
function mapStateToProps(state){
return {
    tiles: state.map.tiles,
}
}
export default connect(mapStateToProps)(Map);