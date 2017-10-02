import React from 'react'

import '../styles/components/recipe.css'
import defaultImage from '../images/default-image.svg'

const Recipe = (props) => {
  return (
    <div className="recipe">
      <img
        alt={ props.title }
        className="recipe__image"
        src={ props.thumbnail || defaultImage }
        width="80"
        height="80"
      />

      <div className="recipe__info">
        <h3 className="recipe__title">{ props.title }</h3>

        <p className="recipe__ingredients">
          <strong>Ingredients: </strong>

          { props.ingredients }
        </p>
      </div>
    </div>
  )
}

export default Recipe
