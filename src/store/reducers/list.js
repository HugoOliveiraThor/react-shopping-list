import { Types } from '../actions/list'
import { createSelector } from 'reselect'

const INITIAL_STATE = {
  list:null,
  items: []
}

export default function list (state= INITIAL_STATE, action) {
  switch(action.type) {
    case Types.ADD_PRODUCT:
      return {
        list:action.list, 
        items: [
          ...state.items, 
          {... action.product, total: getItemTotal(action.product)}
        ]
      }
    default: 
      return state  
  }
}


function getItemTotal(product) {
  return product.price * product.quantity
}

// export function getListTotal(state) {
//   return state.list.items.reduce((acc,item) =>  acc + item.total, 0)
// }

export const getListTotal = createSelector(
  state => state.list.items,
  items => items.reduce((acc,item) =>  acc + item.total, 0)
)