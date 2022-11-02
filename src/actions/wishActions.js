import * as type from './.index.js'
import { makeActionCreator } from './.index.js'

export const toggleItem = makeActionCreator(type.WISH_TOG_ITEM, 'id')
export const addItem = makeActionCreator(type.WISH_ADD_ITEM, 'id')
export const removeItem = makeActionCreator(type.WISH_REM_ITEM, 'id')
