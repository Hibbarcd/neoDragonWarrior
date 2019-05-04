import React from 'react'
import { connect } from 'react-redux'
// import enemySprite from './monster_list.png'
import handleEnemy from './randomEnemy'
import enemy from './slime.png'

function Enemy(props) {
  return (
    <div
      style={{
        position: 'absolute',
        // top: props.position[1],
        // left: props.position[0],
        backgroundImage: `url(${enemy.png}')`,
        // backgroundImage: `url('${enemySprite}')`,
        // backgroundPosition: props.spriteLocation,
        width: '400px',
        height: '400px',
      }}
    />
  )
}

function mapStateToProps(state) {
  return {
    ...state.enemy,
  }
}

export default connect(mapStateToProps)(handleEnemy(Enemy))
