import React from 'react'

import classes from './burger.css'
import BurgerIngredient from './BurgerIngredient'

const burger = props => {
  console.log('Burger Props:', props)
  let transformedIngredients = Object.keys(props.ingredients)
    .map((k) => {
      return [...Array(props.ingredients[k])]
        .map((_, index) => {
          return <BurgerIngredient key={k+index} type={k}/>
        })
    })
    .reduce((arr, el) => {return [...arr, ...el]}, [])
  console.log(`Transformed: `, transformedIngredients)
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>

      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  )
}

export default burger
