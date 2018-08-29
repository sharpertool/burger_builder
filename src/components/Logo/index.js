import React from 'react'

import classes from './style.css'
import burgerLogo from '~/assets/images/burger-logo.png'

const index = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
)

export default index
