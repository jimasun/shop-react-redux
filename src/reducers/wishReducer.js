import * as type from './../actions/.index'

const initialState = {
  items: []
}

const toggleItem = (prevState, action) => {
  if (!!prevState.items.find(wItemId => wItemId === action.id)) {
    return removeItem(prevState, action)
  } else {
    return addItem(prevState, action)
  }
}

const addItem = (prevState, action) => {
  return Object.assign({}, prevState, {
    items: [...prevState.items, action.id]
  })
}

const removeItem = (prevState, action) => {
  return Object.assign({}, prevState, {
    items: [...prevState.items]
      .filter(item => item !== action.id) || []
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.WISH_TOG_ITEM:
      return toggleItem(state, action)
    case type.WISH_ADD_ITEM:
      return addItem(state, action)
    case type.WISH_REM_ITEM:
      return removeItem(state, action)
    default:
      return state
  }
}