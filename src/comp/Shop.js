import { connect } from 'react-redux'
import * as cart from '../actions/cartActions'
import * as wish from '../actions/wishActions'
import * as shop from '../actions/shopActions'

import Shop from './Shop/Shop'
import withLoading from '../hoc/Loading'

const mapStateToProps = (state) => {
  const items = [...state.shop.items]

  items.forEach(sItem => {
    sItem.inCart = !!state.cart.items
      .find(cItem => cItem.id === sItem.id) || false

    sItem.inWish = !!state.wish.items
      .find(wItemId => wItemId === sItem.id) || false
  })

  return {
    items: items,
    loading: state.shop.loading,
    error: state.shop.error
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(cart.addItem(item)),
  toggleInWish: (id) => dispatch(wish.toggleItem(id)),
  fetchItemsAsync: () => dispatch(shop.fetchItemsAsync())
})

const ShopWithLoading = withLoading(Shop, {
  fullScreen: false,
  text: 'loading...',
  error: false
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopWithLoading)