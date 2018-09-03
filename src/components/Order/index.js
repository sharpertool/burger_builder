import React from 'react'

import classes from './styles.css'
import BurgerIngredient from "~/components/Burger/BurgerIngredient"

const order = (props) => {
  console.log('Order props:', props)

  let transformedIngredients = Object.keys(props.ingredients)
    .map(k => {
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
  
  const iNames = Object.keys(props.ingredients)
  const iout = iNames.map((ingredient,idx) => {
    return <li key={idx}>{ingredient}: {props.ingredients[ingredient]}</li>
  })
  return (
    <div className={classes.Order}>
      {transformedIngredients}
      <p>Ingredients:</p>
      <ul>
        {iout}
      </ul>
      <p>Price: <strong>USD {props.price}</strong></p>
    </div>
  )
}

export default order
