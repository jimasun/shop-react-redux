export const CART_TOG_ITEM = 'CART_TOG_ITEM'
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REM_ITEM = 'CART_REM_ITEM'
export const CART_CHA_COUN = 'CART_CHA_COUN'

export const WISH_TOG_ITEM = 'WISH_TOG_ITEM'
export const WISH_ADD_ITEM = 'WISH_ADD_ITEM'
export const WISH_REM_ITEM = 'WISH_REM_ITEM'

export const SHOP_FET_ITMS_A = 'SHOP_FET_ITMS_A'
export const SHOP_FET_ITMS = 'SHOP_FET_ITMS'
export const SHOP_FET_STRT = 'SHOP_FET_STRT'
export const SHOP_FET_STOP = 'SHOP_FET_STOP'
export const SHOP_FET_FAIL = 'SHOP_FET_FAIL'

// Helper function to create basic actionCreators
export const makeActionCreator = (type, ...argNames) => {
  return {
    [type](...args) {
      const action = { type }
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
      })
      return action
    }
  }[type]
}