import { Types } from '../actions/list'
import uuidv1 from 'uuid/v1'
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
          {... action.product, total: getItemTotal(action.product), id: uuidv1(), checked: false}
        ]
      }
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId)
      }
    case Types.TOOGLE_PRODUCT:
      // achar o item a ser modificado
      return {
        // todos os items antes do item a ser modificado
        // item atualizado
        // todos os items antes do item a ser atualizado
        ...state,
        items: toggleItem(state.items, action.productId)
      }
    
    default: 
      return state  
  }
}


function getItemTotal(product) {
  return product.price * product.quantity
}

function toggleItem(items, productId) {
  const idx = items.findIndex(item => item.id === productId)
  return [
    ...items.slice(0,idx), // todos os itens a serem alterados
    { ...items[idx], checked: !items[idx].checked}, // item atualizado
    ...items.slice(idx + 1) // todos os items depois do item ser modificado
  ]

}

export const getListTotal = createSelector(
  state => state.list.items,
  items => items.reduce((acc,item) =>  acc + item.total, 0)
)

export const getOpenedItems = createSelector(
  state => state.list.items,
  items => items.filter(item => !item.checked).length
)

export const getClosedItems = createSelector(
  state => state.list.items,
  items => items.filter(item => item.checked).length
)