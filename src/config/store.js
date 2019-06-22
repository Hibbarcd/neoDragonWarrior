import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import enemyReducer from '../features/enemies/reducer'
import mapReducer from '../features/map/reducer'
import audioReducer from '../features/music/reducer'
import battleMenuReducer from '../features/TestTransBattleScreen/battleMenuTest/reducer'

const rootReducer = combineReducers({
  player: playerReducer,
  enemy: enemyReducer,
  map: mapReducer,
  battleMenu: battleMenuReducer,
  music: audioReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;