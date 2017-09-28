import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './register-service-worker'

import App from './containers/app'

import './styles/font.css'
import './styles/base.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
