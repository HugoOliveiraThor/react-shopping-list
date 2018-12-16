import { call, put } from 'redux-saga/effects'
import { services } from '../services/'

import { Creators as ListActions } from '../actions/list'

const genericImg = 'https://img.elo7.com.br/product/zoom/1737D07/porta-copo-biscoito-decor.jpg' 

export function* getImageRequest(action) {
  try {
    const img = yield call(services.getImages, action.product.product) // Actions get images and what value return 
    console.log('GET IMAGE SUCCESS', img)

    yield put(ListActions.getImageSuccess(action.product, img))
  } catch (error) {
    console.log(error)
    yield put(ListActions.getImageFailure(action.product, genericImg))
  }
}