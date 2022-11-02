import React from 'react'

import WishItem from './WishItem'
import './Wish.css'

const Wish = (props) => {
  return (
    <div className="Wish">
      <div className="header">
        <span className="title">
          You have
          <span className="count"> {props.items.length} </span>
          item(s) in your wishlist
        </span>
      </div>
      <div className="items">
        {props.items.map(item =>
          <WishItem
            key={`item-${item.id}`}
            item={item}
            removeFromWish={() => { props.removeFromWish(item) }}
            addToCart={(item) => { props.addToCart(item) }} />
        )}
      </div>
    </div>
  )
}

export default Wish