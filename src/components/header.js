import React from 'react'

import '../styles/components/header.css'

const ENTER_CHAR_CODE = 13

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">Guerrilla Cookery</h1>

      <div className="header__search">
        <p className="header__instructions">
          Type the ingredients separated by comma on the box below
        </p>

        <input
          type="text"
          className="header__searchbar"
          onKeyPress={
            (event) => {
              if (event.charCode === ENTER_CHAR_CODE) {
                props.onSearchRecipes(event.target.value)
              }
            }
          }
        />
      </div>
    </header>
  )
}

export default Header
