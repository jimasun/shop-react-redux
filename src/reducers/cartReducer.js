import * as type from './../actions/.index'

const initialState = {
  items: [],
  total: 0
}

const toggleItem = (prevState, action) => {
  if (!!prevState.items.find(item => item.id === action.item.id)) {
    return removeItem(prevState, action)
  } else {
    return addItem(prevState, action)
  }
}

const addItem = (prevState, action) => {
  let count = 1,
    price = parseFloat(action.item.price),
    total = price,
    item = prevState.items.find(item => item.id === action.item.id),
    index = prevState.items.indexOf(item),
    items = [...prevState.items]

  if (!!item) {
    count = item.count + 1
    total = item.total + price
    items.splice(index, 1)
  }

  return Object.assign({}, prevState, {
    items: [...items, {
      id: action.item.id,
      count: count,
      total: total
    }],
    total: prevState.total + price
  })
}

const removeItem = (prevState, action) => {
  const cartItem = [...prevState.items]
    .find(item => item.id === action.item.id)

  return Object.assign({}, prevState, {
    items: [...prevState.items]
      .filter(item => item.id !== action.item.id),
    total: prevState.total - cartItem.total
  })
}

const updateItemCount = (prevState, action) => {
  const cartItems = [...prevState.items],
    cartItem = cartItems.find(item => item.id === action.item.id),
    oldTotal = cartItem.total

  cartItem.count = action.count
  cartItem.total = action.count * action.item.price

  return Object.assign({}, prevState, {
    cart: {
      items: cartItems.splice(cartItem, 1),
      total: prevState.total - oldTotal + cartItem.total
    }
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.CART_TOG_ITEM:
      return toggleItem(state, action)
    case type.CART_ADD_ITEM:
      return addItem(state, action)
    case type.CART_REM_ITEM:
      return removeItem(state, action)
    case type.CART_CHA_COUN:
      return updateItemCount(state, action)
    default:
      return state
  }
}