import { combineReducers } from 'redux'

import shop from './shopReducer'
import cart from './cartReducer'
import wish from './wishReducer'

export default combineReducers({
  shop, cart, wish
})