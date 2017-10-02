import React from 'react'

import Recipe from './recipe'

import '../styles/components/recipes-list.css'

const renderRecipes = (recipes) => {
  return recipes.map((recipe) => {
    return (
      <li key={ recipe.id }>
        <a href={ recipe.href }>
          <Recipe { ...recipe } />
        </a>
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
