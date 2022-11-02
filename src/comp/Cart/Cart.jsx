import React from 'react'

import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => (
  <div className="Cart">
    <div className="header">
      <span className="title">
        You have
          <span className="count"> {props.items.length} </span>
        item(s) in your basket
        </span>
      <span className="checkout">
        Checkout
          <span className="price"> {props.total}</span>
      </span>
    </div>
    <div className="items">
      {props.items.map(item =>
        <CartItem
          key={`item-${item.id}`}
          item={item}
          removeItem={() => { props.removeItem(item) }}
          updateItemCount={(count) => { props.updateItemCount(item, count) }} />
      )}
    </div>
  </div>
)

export default Cart