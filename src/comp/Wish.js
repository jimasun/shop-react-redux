import { connect } from 'react-redux'
import * as wish from './../actions/wishActions'
import * as cart from './../actions/cartActions'

import Wish from './Wish/Wish'

const mapStateToProps = (state) => ({
  items: state.wish.items.map(itemId => Object.assign({},
    state.shop.items.find(item => item.id === itemId)
  )),
})

const mapDispatchToProps = (dispatch) => ({
  removeFromWish: (id) => { dispatch(wish.removeItem(id)) },
  addToCart: (item) => dispatch(cart.addItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Wish)