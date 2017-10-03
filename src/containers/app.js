import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { displayLoader, hideLoader } from '../actions/loader'
import { searchRecipes } from '../actions/recipes'

import Header from '../components/header'
import Loader from '../components/loader'
import RecipesList from '../components/recipes-list'

const actionCreators = {
  displayLoader,
  hideLoader,
  searchRecipes
}

class App extends Component {
  render() {
    const { props } = this

    return (
      <div className="container">
        <Header onSearchRecipes={ props.searchRecipes } />

        { props.isFetching && <Loader /> }

        {
          !!props.recipes.length &&
          <RecipesList recipes={ props.recipes } />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.loader,
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
