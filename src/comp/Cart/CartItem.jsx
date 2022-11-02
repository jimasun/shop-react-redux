import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CartItem.css'

const CartItem = (props) => (
  <div className="CartItem">
    <span className="id">{props.item.id}</span>
    <span className="image">
      <img src={props.item.image} /></span>
    <span className="title">{props.item.name}</span>
    <input
      className="count"
      type="number"
      step="1"
      value={props.item.count}
      onChange={(event) => { props.updateItemCount(event.target.value) }} />
    <span className="total">{parseFloat(props.item.total).toFixed(1)}</span>
    <span className="remove"
      onClick={props.removeItem}>
      <FontAwesomeIcon icon="trash" />
    </span>
  </div>
)

export default CartItem