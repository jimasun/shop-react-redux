import React from 'react'

import ShopItem from './ShopItem'

import './Shop.css'
import { useEffect } from 'react'

const Shop = (props) => {
  const urlName = (name) => {
    return encodeURI(name.replace(/\s/g, '-'))
  }

  useEffect(() => {
    props.fetchItemsAsync()
  }, [])

  return (
    <div className="Shop">
      {props.items.map((item) =>
        <ShopItem
          item={item}
          key={`item-${item.id}`}
          urlName={urlName(item.name)}
          addToCart={() => { props.addToCart(item) }}
          toggleInWish={() => { props.toggleInWish(item.id) }} />
      )}
    </div>
  )
}

export default Shop