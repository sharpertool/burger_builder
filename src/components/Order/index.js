import React from 'react'

import classes from './styles.css'
import BurgerIngredient from "~/components/Burger/BurgerIngredient"

const order = (props) => {
  console.log('Order props:', props)

  const ingredients = Object.keys(props.ingredients).map(iname => {
    return {
      name: iname,
      amount: props.ingredients[iname]
    }
  })

  const iout = ingredients.map((ig, idx) => {
    return <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid gray',
        padding: '5px'
      }}>
        {ig.name} (ig.amount})
    </span>
  })
  return (
    <div className={classes.Order}>
      <p>Ingredients: {iout}</p>
      <p>Price: <strong>USD {props.price}</strong></p>
    </div>
  )
}

export default order
