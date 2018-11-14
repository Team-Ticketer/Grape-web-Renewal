import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import wallet from './wallet'
import concertReducer from './concertReducer';

const reducer = combineReducers({
  routing: routerReducer,
  wallet,
  concertReducer,
})

export default reducer
