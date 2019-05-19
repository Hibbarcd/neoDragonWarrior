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
         // eslint-disable-next-line
    switch (type) {
        case 100:
            return 'grass'
        case 102:
            return 'tree'
        case 103: 
            return 'tree2'
        case 104:
            return 'tree3'
        case 106:
            return 'bridgeEW'
        case 107:
            return 'bridgeNS'
//=======================Interractive Tiles=================================
        case 109:
            return 'chest'
        case 110:
            return 'cave'
        case 111:
            return 'tower'
//==========================Town Tiles ===================================
        case 112:
            return 'village'
        case 113:
            return 'town_left'
        case 114:
            return 'town_right'
//=========================Castle Tiles===============================================
        case 120:
            return 'castle_top_left'
        case 121:
            return 'castle_top_right'
        case 122: 
            return 'castle_bottom_left'
        case 123:
            return 'castle_bottom_right'
//======================Impassable Tiles===========================
        case 150:
            return 'rock'
        case 151:
            return 'rock2'
        case 180: 
            return 'onetile_riverNS'
        case 181: 
            return 'onetile_riverEW'
        case 182:
            return 'top_left_cornerwater'
        case 183:
            return 'bottom_right_cornerwater'
        case 184:
            return 'top_right_cornerwater'
        case 185:
            return 'bottom_left_cornerwater'
        case 160: 
            return 'water'
        case 161:
            return 'lake_EastShore'
        case 162:
            return 'lake_SouthShore'
//==================================================================
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
            border: '2px solid white',
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