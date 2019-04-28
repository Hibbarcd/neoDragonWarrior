import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import enemyReducer from '../features/enemies/reducer'
import mapReducer from '../features/map/reducer';

const rootReducer = combineReducers({
  player: playerReducer,
  enemy: enemyReducer,
  map: mapReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;