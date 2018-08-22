import React, {Component} from 'react';
import classes from "./Cockpit.css";

class Cockpit extends Component {
  
  render() {
    const props = this.props
    
    let btnClass = '';
    
    if (props.showPersons) {
      btnClass = classes.Red;
    }
    
    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return (
      <div className={classes.Cockpit}>
        <p className={assignedClasses.join(' ')}>This changes with # of elements!</p>
        <button
          className={btnClass}
          onClick={props.click}>Toggle Persons
        </button>
      </div>
    );
  }
}

export default Cockpit;
