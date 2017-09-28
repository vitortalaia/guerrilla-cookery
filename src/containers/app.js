import React, { Component } from 'react'

import recipes from '../recipes'

import Header from '../components/header'
import Loader from '../components/loader'
import RecipesList from '../components/recipes-list'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isFetching: false,
      recipes
    }
  }

  render() {
    return (
      <div className="container">
        <Header />

        { this.state.isFetching && <Loader /> }

        <RecipesList recipes={ this.state.recipes } />
      </div>
    )
  }
}

export default App
