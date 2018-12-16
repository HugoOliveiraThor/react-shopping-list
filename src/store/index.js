import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

import reducers from './reducers'
import { loadState, saveState } from './localStorage'

const localStorageState = loadState()
const sagaMiddlewares = createSagaMiddleware();
const middleWares = [sagaMiddlewares]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, localStorageState, composeEnhancers(
  applyMiddleware(...middleWares)
))

sagaMiddlewares.run(sagas)

store.subscribe(() => {
  saveState({ list: store.getState().list })
})


export default store;