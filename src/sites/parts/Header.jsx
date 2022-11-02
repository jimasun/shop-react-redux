import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Cart from '../../comp/Cart'
import Wish from '../../comp/Wish'

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  toggleCart() {
    document.querySelector('.Cart').classList.toggle('visible')
    document.querySelector('.Wish').classList.toggle('visible', false)
  }

  toggleWish() {
    document.querySelector('.Wish').classList.toggle('visible')
    document.querySelector('.Cart').classList.toggle('visible', false)
  }

  render() {
    return (
      <div className="Header">
        <Link className="link" to="/">
          <div className="icon">
            <FontAwesomeIcon icon="beer" /></div>
          <div className="title">
            Punk Beer Store</div>
        </Link>
        <div className="wish"
          onClick={this.toggleWish}>
          <FontAwesomeIcon icon="heart" /></div>
        <div className="cart"
          onClick={this.toggleCart}>
          <FontAwesomeIcon icon="shopping-basket" /></div>
        <Cart />
        <Wish />
      </div>
    )
  }
}

export default Header