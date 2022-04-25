import { applyMiddleware, combineReducers, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import placesReducer from './reducers/places.reducer'
import thunk from 'redux-thunk'

const middlewares = [thunk, logger]

const rootReducer = combineReducers({
  places: placesReducer,
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
