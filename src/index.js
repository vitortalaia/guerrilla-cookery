import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import registerServiceWorker from './register-service-worker'

import reducers from './reducers/reducers'
import App from './containers/app'

import './styles/font.css'
import './styles/base.css'

const logger = createLogger()
const enhancer = compose(
  applyMiddleware(
    logger,
    thunk
  )
)

const store = createStore(reducers, {}, enhancer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
