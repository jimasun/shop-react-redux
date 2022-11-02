import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as cart from '../actions/cartActions'
import * as wish from '../actions/wishActions'

import Container from './parts/Container'

import './ShopItemPage.css'

const ShopItemPage = (props) => {
  return (
    <Container>
      <div className="ShopItemPage">
        <div className="image">
          <img src={props.item.image_url} />
        </div>
        <div className="details">
          <div className="title">{props.item.name}</div>
          <div className="author">{props.item.tagline}</div>
          <div className="interact">
            <div className="price">{parseFloat(props.item.abv).toFixed(1)}</div>
            <div className={`cart ${props.item.inCart}`}
              onClick={() => props.addToCart(props.item)}>
              <FontAwesomeIcon icon="shopping-basket" /></div>
            <div className={`whish ${props.item.inWish}`}
              onClick={() => props.toggleInWish(props.item.id)}>
              <FontAwesomeIcon icon="heart" /></div>
          </div>
        </div>
      </div >
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => ({
  item: state.shop.items.find(item => item.id == ownProps.match.params.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: (item) => dispatch(cart.addItem(item)),
  toggleInWish: (id) => dispatch(wish.toggleItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemPage)