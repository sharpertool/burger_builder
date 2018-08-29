import React from 'react'

import classes from './style.css'
import Logo from '~/components/Logo'
import NavigationItems from '~/components/Navigation/NavigationItems'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo/>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
)

export default toolbar
