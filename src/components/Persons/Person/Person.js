import React, {Component} from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'

class Person extends Component {
  constructor(props) {
    super(props)
    
    console.log('[Person.js] Inside Constructor', props)
    this.inputElement = React.createRef()
  }
  
  componentWillMount() {
    console.log('[Person.js] Inside Will Mount]')
  }
  
  componentDidMount() {
    console.log('[Person.js] Inside Did Mount]')
  }
  
  focusme() {
    this.inputElement.current.focus()
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] Inside componentWillReceiveProps', nextProps)
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState)
    return true
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState)
  }
  
  render() {
    console.log('[Person.js] Inside render')
    const props=this.props
    
    return (
      <Aux>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p onClick={props.click}>{props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={props.changed}
          value={props.name}
          />
      </Aux>
    );
    
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);

