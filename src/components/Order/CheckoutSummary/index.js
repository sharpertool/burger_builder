import React from 'react'
import Burger from '~/components/Burger'
import Button from '~/components/UI/Button'

import classes from './styles.css'

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you love your burger!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        clicked={props.checkoutCancelled}
        btnType="Danger">
        CANCEL it
      </Button>
      <Button btnType="Success"
              clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  )
}

export default checkoutSummary
