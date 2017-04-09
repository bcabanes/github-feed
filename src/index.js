import React from 'react'
import ReactDOM from 'react-dom'
require('es6-promise/auto')
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// Store
import { history, store } from './store'

// Components
import App from './App'

// Styles
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
