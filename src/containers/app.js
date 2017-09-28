import React, { Component } from 'react'

import Header from '../components/header'
import Loader from '../components/loader'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isFetching: false
    }
  }

  render() {
    return (
      <div className="container">
        <Header />

        { this.state.isFetching && <Loader /> }
      </div>
    )
  }
}

export default App
