import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './WishItem.css'

const WishItem = (props) => (
  <div className="WishItem">
    <div className="image">
      <img src={props.item.image_url} />
    </div>
    <span className="removeFromWish" onClick={props.removeFromWish}><FontAwesomeIcon icon="trash"/></span>
    <span className="addToCart" onClick={props.addToCart}><FontAwesomeIcon icon="shopping-basket"/></span>
  </div>
)

export default WishItem