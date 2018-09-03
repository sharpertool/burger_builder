import React from 'react'

import classes from './style.css'
import NavigationItem from './NavigationItem'

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">My Orders</NavigationItem>
  </ul>
)

export default navigationItems

