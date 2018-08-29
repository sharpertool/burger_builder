import React from 'react'

import classes from './style.css'
import Logo from '~/components/Logo'
import NavigationItems from '~/components/Navigation/NavigationItems'
import MenuIcon from '~/components/UI/MenuIcon'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <MenuIcon clicked={props.toggleSidebar}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    
    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
)

export default toolbar
