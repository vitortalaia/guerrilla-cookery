import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import registerServiceWorker from './register-service-worker'

import reducers from './reducers/reducers'
import App from './containers/app'

import './styles/font.css'
import './styles/base.css'

const logger = createLogger()

const store = createStore(reducers, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
