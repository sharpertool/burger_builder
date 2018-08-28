import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button'

const orderSummary = (props) => {
  const summary = Object.keys(props.ingredients)
    .map(k => {
      return (
      <li key={k}>
        <span style={{textTransform: 'capitalize'}}>
          {k}: {props.ingredients[k]}
          </span>
      </li>
      )
    })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {summary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType={'Danger'} clicked={props.cancelHandler}>CANCEL</Button>
      <Button btnType={'Success'} clicked={props.orderHandler}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary
