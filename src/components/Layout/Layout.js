import React from 'react'

import classes from './layout.css'

import Aux from '../../hoc/Aux'
import Toobar from '~/components/Navigation/Toolbar'

const layout = (props) => (
  <Aux>
    <Toobar/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout
