import { connect } from 'react-redux'
import * as action from './../actions/cartActions'

import Cart from './Cart/Cart'

const mapStateToProps = (state) => ({
  items: state.cart.items.map(itemInCart => Object.assign(
    {},
    itemInCart,
    state.shop.items.find(item => item.id === itemInCart.id)
  )),
  total: state.cart.total
})

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(action.removeItem(item)),
  updateItemCount: (item, count) => dispatch(action.updateItemCount(item, count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)