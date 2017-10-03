import * as types from '../actions/types'

export const recipes = (state = [], action) => {
  switch (action.type) {
    case types.SET_RECIPES:
      return action.recipes

    default:
      return state
  }
}
