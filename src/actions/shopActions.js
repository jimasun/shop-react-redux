import * as type from './.index.js'
import { makeActionCreator } from './.index.js'

export const fetchItems = makeActionCreator(type.SHOP_FET_ITMS, 'items')
export const fetchItemsStart = makeActionCreator(type.SHOP_FET_STRT)
export const fetchItemsStop = makeActionCreator(type.SHOP_FET_STOP)
export const fetchItemsFail = makeActionCreator(type.SHOP_FET_FAIL, 'error')

export const fetchItemsAsync = () => {
  return (dispatch, getState) => {
    dispatch(fetchItemsStart())
    fetch('https://api.punkapi.com/v2/beers/')
      .then(
        response => {
          if (!response.ok) {
            dispatch(fetchItemsFail(response.status))
            return Promise.reject(response.status)
          }
          return response.json()
        }, error => {
          dispatch(fetchItemsFail(error))
        })
      .then(
        json => {
          dispatch(fetchItems(json))
        }, error => {
          dispatch(fetchItemsFail(error))
        }
      )
  }
}