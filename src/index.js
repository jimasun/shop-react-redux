import React, { Suspense } from 'react'
import Thunk from 'redux-thunk'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket, faBeer, faHeart, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';


import ShopPage from './sites/ShopPage'
import ShopItemPage from './sites/ShopItemPage'

import beers from '../beers.json'
import reducers from './reducers/.index'

library.add(faShoppingBasket, faBeer, faHeart, faTrash, faSpinner)

const preloadedState = {
  shop: {
    items: beers
  }
}

// const store = configureStore(reducers,
//   preloadedState,
//   applyMiddleware(Thunk)
// )

const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(Thunk)
)

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<ShopPage />} />
            <Route path='/items/:name/:id' element={<ShopItemPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)