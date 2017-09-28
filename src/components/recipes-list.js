import React from 'react'

import Recipe from './recipe'

import '../styles/components/recipes-list.css'

const renderRecipes = (recipes) => {
  return recipes.map((recipe) => {
    return (
      <li key={ recipe.id }>
        <Recipe { ...recipe } />
      </li>
    )
  })
}

const RecipesList = (props) => {
  return (
    <ul className="recipes-list">
      { renderRecipes(props.recipes) }
    </ul>
  )
}

export default RecipesList
