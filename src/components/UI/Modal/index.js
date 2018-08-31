import React from 'react'

import classes from './style.css'
import Aux from '~/hoc/Aux'
import Backdrop from '~/components/UI/Backdrop'

class modal extends React.Component {
  componentWillUpdate() {
    console.log('[Modal] willUpdate')
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
      || nextProps.children !== this.props.children
  }
  
  render() {
    const props = this.props
    
    return (
      <Aux>
        <Backdrop show={props.show} clicked={props.modalClose}/>
        <div className={classes.Modal}
             style={{
               transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
               opacity: props.show ? '1' : '0'
             }}
        >
          {props.children}
        </div>
      </Aux>
    )
  }
}

export default modal
