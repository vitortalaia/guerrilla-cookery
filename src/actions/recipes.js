import * as types from './types'
import { displayLoader, hideLoader } from './loader'

import API from '../api'

export const searchRecipes = (ingredients) => {
  return (dispatch) => {
    const params = { i: ingredients }

    dispatch(displayLoader())

    API.get('/', { params })
      .then((response) => {
        dispatch(setRecipes(response.data.results))
      })
      .catch((err) => {
        console.error(err)
        alert('An error occurred while searching the recipes.Take a look at the console for more details.')
      })
      .then(() => {
        dispatch(hideLoader())
      })
  }
}

export const setRecipes = (recipes) => {
  return {
    type: types.SET_RECIPES,
    recipes
  }
}
