import React, {Component} from 'react';
import classes from "./Cockpit.css";
import Aux from '../../hoc/Aux'

class Cockpit extends Component {
  constructor(props) {
    super(props)
    
    console.log('[Cockpit.js] Inside Constructor', props)
  }
  
  componentWillMount() {
    console.log('[Cockpit.js] Inside Will Mount]')
  }
  
  componentDidMount() {
    console.log('[Cockpit.js] Inside Did Mount]')
  }
  
  render() {
    console.log('[Cockpit.js] Inside render')
    const props = this.props
    
    let btnClass = classes.Button;
    
    if (props.showPersons) {
      btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
      <Aux>
        <p className={assignedClasses.join(' ')}>This changes with # of elements!</p>
        <button
          className={btnClass}
          onClick={props.click}>Toggle Persons
        </button>
      </Aux>
    );
  }
}

export default Cockpit;
