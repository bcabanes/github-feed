import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { routerMiddleware, routerReducer } from 'react-router-redux'

// Reducers
import { newsFeedReducer } from '../containers/news-feed'

export const history = createHistory()
const middleware = routerMiddleware(history)
const reducers = {
  newsFeed: newsFeedReducer
}

export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  undefined,
  applyMiddleware(thunk, middleware, createLogger())
)
export const persistor = persistStore(store)
