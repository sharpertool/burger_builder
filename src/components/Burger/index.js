import React from 'react'

import classes from './burger.css'
import BurgerIngredient from './BurgerIngredient'

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((k) => {
      return [...Array(props.ingredients[k])]
        .map((_, index) => {
          return <BurgerIngredient key={k+index} type={k}/>
        })
    })
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger