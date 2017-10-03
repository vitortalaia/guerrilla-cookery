import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { displayLoader, hideLoader } from '../actions/loader'

import Header from '../components/header'
import Loader from '../components/loader'

const actionCreators = {
  displayLoader,
  hideLoader
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        { this.props.isFetching && <Loader /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
