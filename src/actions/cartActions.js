import * as type from './.index.js'
import { makeActionCreator } from './.index.js'

export const toggleItem = makeActionCreator(type.CART_TOG_ITEM, 'item')
export const addItem = makeActionCreator(type.CART_ADD_ITEM, 'item')
export const removeItem = makeActionCreator(type.CART_REM_ITEM, 'item')
export const updateItemCount = makeActionCreator(type.CART_CHA_COUN, 'item', 'count')
