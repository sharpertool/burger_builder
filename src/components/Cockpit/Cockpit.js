import React from 'react'
import classes from "./Cockpit.css";

const cockpit = (props) => {

  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = []
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <div className={classes.Cockpit}>
      <p className={classes.Cockpit_intro}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p className={assignedClasses.join(' ')}>This changes with # of elements!</p>
      <button
        className={btnClass}
        onClick={props.click}>Toggle Persons
      </button>
    </div>
  )
}

export default cockpit
