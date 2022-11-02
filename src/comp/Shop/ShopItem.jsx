import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ShopItem.css'

const ShopItem = (props) => (
  <div className="ShopItem">
    <Link to={`/items/${props.urlName}/${props.item.id}`}>
      <div className="image">
        <img src={props.item.image_url} />
      </div>
    </Link>
    <div className="details">
      <div className="title">{props.item.name}</div>
      <div className="author">{props.item.tagline}</div>
      <div className="interact">
        <div className="price">{parseFloat(props.item.abv).toFixed(1)}</div>
        <div className={`cart ${props.item.inCart}`}
          onClick={props.addToCart}>
          <FontAwesomeIcon icon="shopping-basket" /></div>
        <div className={`whish ${props.item.inWish}`}
          onClick={props.toggleInWish}>
          <FontAwesomeIcon icon="heart" /></div>
      </div>
    </div>
  </div >
)

export default ShopItem